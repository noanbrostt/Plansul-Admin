import { useMemo, useRef, useState } from "react";
import KeyboardVisualizer from "@/features/typing/KeyboardVisualizer";
import FavoriteButton from "@/components/FavoriteButton";
import { useSelector } from "react-redux";
import {
  FiPlay,
  FiTrendingUp,
  FiTarget,
  FiZap,
  FiClock,
  FiAward,
  FiHelpCircle,
  FiChevronLeft,
  FiChevronRight,
  FiBarChart2,
  FiList,
  FiCheck,
  FiLock,
} from "react-icons/fi";
import { HiOutlineLightningBolt } from "react-icons/hi";
import { IoMdRefresh } from "react-icons/io";
import { LuTrophy } from "react-icons/lu";
import { CgFileDocument } from "react-icons/cg";
import {
  PHASES,
  saveAttempt,
  listAttempts,
  listAttemptsByPhase,
  bestOf,
  averages,
  totalPractice,
  formatTime,
  phaseById,
  topByMetric,
  unlockedUpTo,
} from "@/features/typing/typingData";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

// ===== helpers de cor (gera degradê a partir de uma cor base) =====
function hexToRgb(hex) {
  const clean = hex.replace("#", "");
  const bigint = parseInt(clean, 16);
  return { r: (bigint >> 16) & 255, g: (bigint >> 8) & 255, b: bigint & 255 };
}
function clamp(v) {
  return Math.max(0, Math.min(255, v));
}
function adjust(hex, amt) {
  const { r, g, b } = hexToRgb(hex);
  const nr = clamp(r + amt),
    ng = clamp(g + amt),
    nb = clamp(b + amt);
  const toHex = (n) => n.toString(16).padStart(2, "0");
  return `#${toHex(nr)}${toHex(ng)}${toHex(nb)}`;
}
function phaseGradient(color) {
  const start = adjust(color, 30); // um pouco mais claro
  const end = adjust(color, -20); // um pouco mais escuro
  return `linear-gradient(135deg, ${start}, ${end})`;
}
// helpers de estilo por colocação (com brilho p/ Top 3)
const rankCardClass = (i) => {
  if (i === 0)
    return "bg-gradient-to-br from-amber-300/15 to-amber-600/15 border border-amber-400/40 shadow-lg"; // ouro
  if (i === 1)
    return "bg-gradient-to-br from-slate-300/15 to-slate-600/15 border border-slate-400/40 shadow-lg"; // prata
  if (i === 2)
    return "bg-gradient-to-br from-orange-300/15 to-amber-600/15 border border-amber-500/40 shadow-lg"; // bronze
  return "bg-base-100 border border-base-300";
};
const rankBadgeClass = (i) => {
  if (i === 0)
    return "bg-gradient-to-br from-amber-200 to-amber-500 text-amber-950 ring-1 ring-amber-200/50 ring-offset-1 ring-offset-base-100"; // ouro
  if (i === 1)
    return "bg-gradient-to-br from-slate-100 to-slate-400 text-slate-900 ring-1 ring-white/40 ring-offset-1 ring-offset-base-100"; // prata
  if (i === 2)
    return "bg-gradient-to-br from-amber-200 to-orange-600 text-amber-950 ring-1 ring-amber-300/50 ring-offset-1 ring-offset-base-100"; // bronze
  return "bg-base-300 text-base-content";
};

export default function TypingGame() {
  const user = useSelector((s) => s.user?.data);
  const playerName = user?.nome || "Usuário";

  // abas
  const [tab, setTab] = useState("Jogar"); // Jogar | Ranking | Estatísticas

  // jogar
  const [showKeyboard, setShowKeyboard] = useState(true);
  const [phaseId, setPhaseId] = useState(null);
  const [prestart, setPrestart] = useState(false);
  const [startedAt, setStartedAt] = useState(null);
  const [finishedAt, setFinishedAt] = useState(null);
  const [cursor, setCursor] = useState(0);
  const [typed, setTyped] = useState("");
  const [errors, setErrors] = useState(0);
  const [done, setDone] = useState(false);

  const [showPointsModal, setShowPointsModal] = useState(false);

  const activePhase = phaseId ? phaseById(phaseId) : null;
  const activeText = activePhase?.text || "";
  const totalChars = activeText.length;

  // métricas
  const elapsedMs = startedAt
    ? finishedAt
      ? finishedAt - startedAt
      : Date.now() - startedAt
    : 0;
  const minutes = elapsedMs / 60000 || 0.0001;
  const correctChars = typed.length;
  const totalKeystrokes = correctChars + errors; // ✅
  const accuracy =
    totalKeystrokes > 0
      ? Math.round((correctChars / totalKeystrokes) * 100)
      : 100; // ✅
  const wpm = Math.max(0, Math.round(correctChars / 5 / minutes));
  const progress = totalChars ? Math.round((cursor / totalChars) * 100) : 0;
  const score = Math.round(wpm * (accuracy / 100) * (activePhase?.mult || 1));

  const inputRef = useRef(null);

  const lastPhaseId = PHASES[PHASES.length - 1].id; // normalmente 10
  const isLastPhase = phaseId === lastPhaseId;

  // ranking/estatísticas
  // helpers de estilo por colocação
  const allAttempts = useMemo(() => listAttempts(), [done, phaseId, tab]);
  const unlockedMax = useMemo(() => unlockedUpTo(allAttempts), [allAttempts]);

  const overall = useMemo(() => {
    const { avgWpm, avgAcc, avgScore } = averages(allAttempts);
    const { totalMin, totalMs } = totalPractice(allAttempts);
    return {
      avgWpm,
      avgAcc,
      avgScore,
      totalMin,
      totalMs,
      count: allAttempts.length,
    };
  }, [allAttempts]);

  // --- núcleo do jogo ---
  const resetGame = () => {
    setStartedAt(null);
    setFinishedAt(null);
    setCursor(0);
    setTyped("");
    setErrors(0);
    setDone(false);
  };

  const choosePhase = (id) => {
    if (id > unlockedMax) return; // bloqueada
    setPhaseId(id);
    setPrestart(true);
    resetGame();
  };

  const startPhase = () => {
    setPrestart(false);
    // setStartedAt(Date.now());
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  const stopAndSave = () => {
    const payload = {
      id: crypto?.randomUUID?.() || `${Date.now()}`,
      player: playerName || "Anônimo",
      phase: phaseId,
      wpm,
      accuracy,
      score,
      errors,
      timeMs: elapsedMs,
      when: Date.now(),
    };
    saveAttempt(payload);
  };

  // NOVO: input não aceita apagar nem digitar char errado
  const onKeyDownControlled = (e) => {
    if (!activePhase) return;

    // bloquear colar e atalhos
    if (e.ctrlKey || e.metaKey) {
      if (
        e.key.toLowerCase() === "v" ||
        e.key.toLowerCase() === "x" ||
        e.key.toLowerCase() === "z"
      ) {
        e.preventDefault();
        return;
      }
    }

    if (!startedAt) setStartedAt(Date.now());

    const expected = activeText[cursor];

    // bloquear apagar
    if (e.key === "Backspace" || e.key === "Delete") {
      e.preventDefault();
      return;
    }

    // aceitar somente teclas de um caractere
    if (e.key.length !== 1) return;

    // sempre impedir que o browser escreva; nós controlamos
    e.preventDefault();

    if (cursor >= activeText.length) return; // já terminou

    if (e.key === expected) {
      // tecla correta → avança e escreve
      const nextTyped = typed + e.key;
      const nextCursor = cursor + 1;
      setTyped(nextTyped);
      setCursor(nextCursor);

      if (nextCursor >= activeText.length) {
        setFinishedAt(Date.now());
        setDone(true);
        stopAndSave();
      }
    } else {
      // tecla errada → conta erro e mantém cursor/parcial
      setErrors((x) => x + 1);
    }
  };

  const goBackToPhases = () => {
    setPhaseId(null);
    setPrestart(false);
    resetGame();
  };

  const Metric = ({ icon, label, value }) => (
    <div className="card bg-base-100">
      <div className="card-body py-3 px-4">
        <div className="flex items-center gap-1 text-xs opacity-70">
          {icon} {label}
        </div>
        <div className="text-2xl font-semibold text-center">{value}</div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* header + tabs */}
      <div className="flex justify-between items-center">
        <h1 className="flex text-3xl font-bold text-base-content">
          DigitaPro
          <FavoriteButton tela={{ nome: "DigitaPro", url: "devs/digitacao" }} />
        </h1>

        <div className="join">
          {["Jogar", "Ranking", "Estatísticas"].map((t) => (
            <button
              key={t}
              className={`btn join-item ${
                tab === t ? "btn-primary" : "btn-ghost"
              }`}
              onClick={() => setTab(t)}
            >
              {t === "Jogar" && <FiPlay />}
              {t === "Ranking" && <LuTrophy />}
              {t === "Estatísticas" && <FiBarChart2 />}
              {t}
            </button>
          ))}
        </div>
      </div>

      {tab === "Jogar" && (
        <>
          {/* Seleção de fases */}
          {phaseId === null && (
            <div className="card bg-base-200 shadow-lg">
              <div className="card-body">
                <div className="flex items-center justify-between">
                  <h2 className="card-title text-2xl ml-0.5">
                    Escolha sua Fase
                  </h2>
                  <button
                    className="btn btn-ghost btn-sm"
                    onClick={() => setShowPointsModal(true)}
                  >
                    <FiHelpCircle className="mr-1" /> Como funcionam os pontos?
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-2">
                  {PHASES.map((p) => {
                    const attempts = listAttemptsByPhase(p.id);
                    const best = bestOf(attempts, "score");
                    const avg = averages(attempts);
                    const locked = p.id > unlockedMax;
                    const firstPlay = attempts.length === 0;

                    return (
                      <div
                        key={p.id}
                        className={`relative group card bg-base-100 shadow transition-[bottom] duration-400 bottom-0
                          ${
                            locked
                              ? "opacity-60 cursor-not-allowed"
                              : "hover:shadow-xl hover:bottom-1 cursor-pointer"
                          }`}
                        onClick={() => choosePhase(p.id)}
                        title={
                          locked
                            ? `Complete a Fase ${p.id - 1} para desbloquear`
                            : ""
                        }
                      >
                        {/* popover (se liberada) */}
                        {!locked && (
                          <div className="absolute -top-28 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition pointer-events-none">
                            <div className="w-64 p-3 rounded-xl border border-base-300 bg-base-100 shadow">
                              <div className="text-sm font-semibold text-center">
                                <div className="mb-1">Fase {p.id}</div>
                                <div className="flex justify-center items-center gap-1 opacity-60">
                                  <IoMdRefresh /> {attempts.length} tentativa(s)
                                </div>
                                <hr className="opacity-60 my-2.5" />
                              </div>
                              {best ? (
                                <>
                                  <div className="flex items-center justify-between bg-warning/10 px-2 py-1 rounded">
                                    <span className="flex items-center gap-1">
                                      <FiAward /> Melhor
                                    </span>
                                    <span className="badge badge-warning">
                                      {best.score} pts
                                    </span>
                                  </div>
                                  <div className="mt-2 text-sm grid grid-cols-2 px-2">
                                    <div className="flex items-center gap-1 opacity-80">
                                      <FiTrendingUp /> {avg.avgWpm} PPM
                                    </div>
                                    <div className="flex items-center gap-1 opacity-80">
                                      <FiTarget /> {avg.avgAcc}%
                                    </div>
                                  </div>
                                </>
                              ) : (
                                <div className="opacity-60 text-sm text-center">
                                  Sem histórico
                                </div>
                              )}
                            </div>
                          </div>
                        )}

                        <div className="card-body items-center text-center">
                          {/* ícone com degradê */}
                          <div
                            className="w-10 h-10 rounded-full flex items-center justify-center text-white"
                            style={{ backgroundImage: phaseGradient(p.color) }}
                          >
                            {locked ? <FiLock /> : <FiCheck />}
                          </div>
                          <h3 className="font-semibold text-lg">{p.title}</h3>
                          <div className="opacity-70 text-sm">{p.subtitle}</div>
                          <div className="mt-2 text-xs opacity-70">
                            Melhor: {best ? `${best.score} pts` : "--"}
                          </div>

                          {/* botão com degradê da fase */}
                          <button
                            className={`btn btn-sm mt-2 border-0 ${
                              locked ? "btn-ghost" : "text-white"
                            }`}
                            style={
                              !locked
                                ? { backgroundImage: phaseGradient(p.color) }
                                : {}
                            }
                            onClick={(e) => {
                              e.stopPropagation();
                              choosePhase(p.id);
                            }}
                            disabled={locked}
                          >
                            {locked
                              ? "Bloqueada"
                              : firstPlay
                              ? "Jogar"
                              : "Repetir"}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* Pré-início */}
          {phaseId !== null && prestart && (
            <div className="card bg-base-200 shadow-lg py-12">
              <div className="card-body items-center">
                <div
                  className="badge my-3 text-white rounded-full w-20 h-20"
                  style={{
                    backgroundImage: phaseGradient(
                      activePhase?.color || "#376fbe"
                    ),
                  }}
                >
                  <CgFileDocument className="text-4xl" />
                </div>
                <div className="text-2xl font-bold">
                  Pronto para a Fase {phaseId}?
                </div>
                <div className="opacity-70 mb-1">
                  Clique no botão abaixo para começar a digitar
                </div>

                <div className="mt-6 flex gap-3 border-0">
                  <button className="btn" onClick={goBackToPhases}>
                    <FiChevronLeft /> Voltar às Fases
                  </button>
                  <button
                    className="btn text-white border-0"
                    style={{
                      backgroundImage: phaseGradient(
                        activePhase?.color || "#376fbe"
                      ),
                    }}
                    onClick={startPhase}
                  >
                    <FiPlay /> Começar
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Em andamento */}
          {phaseId !== null && !prestart && !done && (
            <div className="card bg-base-200 shadow-lg">
              <div className="card-body space-y-4">
                {/* topo simplificado (SEM "voltar às fases" aqui) */}
                <div className="flex items-center flex-wrap gap-2 justify-between">
                  <div className="flex gap-3 w-1/3">
                    <div className="flex flex-col justify-around">
                      {/* AGORA o botão "Voltar às Fases" fica no fim da fase */}
                      <div className="flex justify-center items-center">
                        <button
                          className="btn btn-neutral btn-sm w-full"
                          onClick={goBackToPhases}
                        >
                          <FiChevronLeft /> Voltar às Fases
                        </button>
                      </div>
                      {/* Toggle do teclado */}
                      <div className="flex justify-center items-center">
                        <button
                          className="btn btn-neutral btn-sm w-full"
                          onClick={() => setShowKeyboard((v) => !v)}
                        >
                          {showKeyboard ? "Ocultar Teclado" : "Exibir Teclado"}
                        </button>
                      </div>
                    </div>
                    <Metric
                      icon={<FiClock />}
                      label="Tempo"
                      value={formatTime(elapsedMs)}
                    />
                  </div>

                  <div
                    className="badge text-white text-2xl ml-0.5 p-4"
                    style={{
                      backgroundImage: phaseGradient(
                        activePhase?.color || "#376fbe"
                      ),
                    }}
                  >
                    Fase {phaseId}
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 !w-1/3 md:w-auto">
                    <Metric icon={<FiTrendingUp />} label="PPM" value={wpm} />
                    <Metric
                      icon={<FiTarget />}
                      label="Precisão"
                      value={`${accuracy}%`}
                    />
                    <Metric icon={<FiAward />} label="Pontos" value={score} />
                    <Metric icon={<FiZap />} label="Erros" value={errors} />
                  </div>
                </div>

                <div className="rounded-2xl bg-base-100 border border-base-300 p-4">
                  <progress
                    className="progress progress-primary w-full"
                    value={progress}
                    max="100"
                  />
                  <div className="text-xs opacity-70 mt-1 flex justify-between">
                    <span>
                      {cursor} / {totalChars} caracteres
                    </span>
                    <span>{progress}% completo</span>
                  </div>

                  <div className="mt-4 rounded-xl bg-base-200/50 p-4 font-mono text-lg leading-7">
                    {activeText.split("").map((ch, i) => {
                      const t = typed[i];
                      let cls = "opacity-70";
                      if (t == null) {
                        cls =
                          i === cursor ? "bg-primary/20 rounded" : "opacity-60";
                      } else {
                        cls =
                          t === ch
                            ? "text-success"
                            : "text-error bg-error/10 rounded";
                      }
                      return (
                        <span key={i} className={cls}>
                          {ch}
                        </span>
                      );
                    })}
                  </div>

                  <div className="mt-4">
                    <input
                      ref={inputRef}
                      className="input input-lg input-bordered w-full"
                      placeholder="Digite aqui..."
                      value={typed}
                      readOnly
                      onKeyDown={onKeyDownControlled}
                      onPaste={(e) => e.preventDefault()}
                    />
                  </div>

                  {/* Visualizador do teclado */}
                  <KeyboardVisualizer
                    nextChar={activeText[cursor]}
                    isVisible={showKeyboard}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Conclusão */}
          {phaseId !== null && done && (
            <div
              className="card bg-base-100 shadow-xl py-4"
              style={{
                backgroundImage: phaseGradient(activePhase?.color || "#376fbe"),
              }}
            >
              <div className="card-body items-center">
                <div className="w-20 h-20 rounded-full bg-base-200 text-success-content flex items-center justify-center mb-3">
                  <LuTrophy className="text-4xl" />
                </div>
                <h2 className="text-3xl text-white font-extrabold">
                  Fase {phaseId} Concluída!
                </h2>

                <div className="mt-4 p-4 rounded-xl bg-base-200 border border-base-300">
                  <div className="text-center">
                    <div className="text-sm opacity-70">Pontuação Final</div>
                    <div className="text-4xl font-extrabold text-primary">
                      {score} pontos
                    </div>
                    <div className="opacity-70 mt-1 text-sm">
                      ({wpm} PPM × {accuracy}% × {activePhase?.mult})
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4 w-full max-w-3xl">
                  <Mini label="PPM" value={wpm} />
                  <Mini label="Precisão" value={`${accuracy}%`} />
                  <Mini label="Tempo" value={formatTime(elapsedMs)} />
                  <Mini label="Erros" value={errors} />
                </div>

                <div className="mt-6 flex gap-3">
                  <button className="btn" onClick={goBackToPhases}>
                    <FiChevronLeft /> Voltar às Fases
                  </button>

                  <button
                    className="btn"
                    onClick={() => {
                      setDone(false);
                      setTyped("");
                      setCursor(0);
                      setErrors(0);
                      setStartedAt(Date.now());
                      setFinishedAt(null);
                      setTimeout(() => inputRef.current?.focus(), 0);
                    }}
                  >
                    Repetir Fase
                  </button>

                  {!isLastPhase && (
                    <button
                      className="btn btn-primary text-white border-0"
                      onClick={() => {
                        const next = Math.min(lastPhaseId, phaseId + 1);
                        setPhaseId(next);
                        setPrestart(true);
                        setDone(false);
                        setTyped("");
                        setCursor(0);
                        setErrors(0);
                        setStartedAt(null);
                        setFinishedAt(null);
                      }}
                    >
                      Próxima Fase <FiChevronRight />
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Modal: Como funcionam os pontos */}
          {showPointsModal && (
            <div className="modal modal-open">
              <div className="modal-box w-11/12 max-w-4xl">
                <h3 className="font-bold text-lg flex items-center gap-2">
                  <FiHelpCircle /> Como Funcionam os Pontos
                </h3>
                <div className="mt-3 space-y-4">
                  <div className="p-4 rounded-xl bg-base-100 border border-base-300">
                    <div className="font-semibold mb-1">
                      Fórmula de Pontuação
                    </div>
                    <div className="text-2xl font-extrabold">
                      Pontos = PPM × Precisão% × Número da Fase
                    </div>
                    <div className="opacity-80 mt-1">
                      Ex.: 50 PPM × 100% × Fase 3 = <b>150 pontos</b>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-success/10 border border-success/20">
                      <div className="font-semibold">Velocidade (PPM)</div>
                      <div className="opacity-80 text-sm">
                        Quanto mais rápido você digita, mais pontos ganha.
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-info/10 border border-info/20">
                      <div className="font-semibold">Precisão (%)</div>
                      <div className="opacity-80 text-sm">
                        Erros reduzem os pontos. Mantenha a precisão alta.
                      </div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-warning/10 border border-warning/20">
                    <div className="font-semibold mb-1">
                      Multiplicadores por Fase
                    </div>
                    <div className="flex flex-wrap gap-2 text-sm">
                      {PHASES.map((p) => (
                        <span
                          key={p.id}
                          className="badge"
                        >{`Fase ${p.id}: x${p.mult}`}</span>
                      ))}
                    </div>
                    <div className="opacity-80 mt-2 text-sm">
                      Fases mais difíceis = mais pontos.
                    </div>
                  </div>
                </div>

                <div className="modal-action">
                  <button
                    className="btn"
                    onClick={() => setShowPointsModal(false)}
                  >
                    Fechar
                  </button>
                </div>
              </div>
              <div
                className="modal-backdrop"
                onClick={() => setShowPointsModal(false)}
              />
            </div>
          )}
        </>
      )}

      {tab === "Ranking" && <RankingView attempts={allAttempts} />}

      {tab === "Estatísticas" && (
        <StatsView attempts={allAttempts} overall={overall} />
      )}
    </div>
  );
}

function Mini({ label, value }) {
  return (
    <div className="p-4 rounded-xl bg-base-200 text-center w-40">
      <div className="text-xs opacity-70">{label}</div>
      <div className="text-xl font-bold">{value}</div>
    </div>
  );
}

// --------- RANKING ----------
function RankingView({ attempts }) {
  const [metricTab, setMetricTab] = useState("Pontuação");
  const [phaseFilter, setPhaseFilter] = useState("all");

  const items = useMemo(() => {
    const m =
      metricTab === "Pontuação"
        ? "score"
        : metricTab === "Velocidade"
        ? "wpm"
        : "accuracy";
    return topByMetric(attempts, m, phaseFilter, 10);
  }, [attempts, metricTab, phaseFilter]);

  return (
    <div className="space-y-4">
      <div className="card bg-base-200 shadow-lg">
        <div className="card-body">
          <div className="flex items-center justify-between">
            <h2 className="card-title text-2xl ml-0.5">Ranking dos Melhores</h2>
            <div className="flex gap-2 items-center">
              <select
                className="select select-bordered select-sm"
                value={phaseFilter}
                onChange={(e) => setPhaseFilter(e.target.value)}
              >
                <option value="all">Todas as Fases</option>
                {PHASES.map((p) => (
                  <option key={p.id} value={p.id}>
                    Fase {p.id}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="tabs tabs-boxed mt-3">
            {["Pontuação", "Velocidade", "Precisão"].map((t) => (
              <a
                key={t}
                className={`tab w-1/3 gap-2 ${
                  metricTab === t ? "tab-active text-primary font-bold" : ""
                }`}
                onClick={() => setMetricTab(t)}
              >
                {t === "Pontuação" && <LuTrophy className="text-md" />}
                {t === "Velocidade" && (
                  <HiOutlineLightningBolt className="text-xl" />
                )}
                {t === "Precisão" && <FiTarget className="text-lg" />}
                {t}
              </a>
            ))}
          </div>

          <div className="mt-4 space-y-3">
            {items.length ? (
              items.map((a, i) => (
                <div key={a.id} className={`card ${rankCardClass(i)}`}>
                  <div className="card-body py-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${rankBadgeClass(
                            i
                          )}`}
                        >
                          {i + 1}
                        </div>
                        <div>
                          <div className="font-semibold">{a.player}</div>
                          <div className="text-xs opacity-70">
                            Fase {a.phase} •{" "}
                            {new Date(a.when).toLocaleDateString()}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-extrabold">
                          {metricTab === "Pontuação" && `${a.score} pts`}
                          {metricTab === "Velocidade" && `${a.wpm} PPM`}
                          {metricTab === "Precisão" && `${a.accuracy}%`}
                        </div>
                        <div className="opacity-70 text-xs">
                          {a.wpm} PPM • {a.accuracy}%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="opacity-70">
                Sem dados ainda — jogue algumas fases! 🎯
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// --------- ESTATÍSTICAS ----------
function StatsView({ attempts, overall }) {
  // ----- Agregações -----
  // Melhor por fase
  const bestWpmPerPhase = PHASES.map((p) => {
    const best = bestOf(
      attempts.filter((a) => a.phase === p.id),
      "wpm"
    );
    return { name: `Fase ${p.id}`, value: best ? best.wpm : 0 };
  });

  const bestAccPerPhase = PHASES.map((p) => {
    const best = bestOf(
      attempts.filter((a) => a.phase === p.id),
      "accuracy"
    );
    return { name: `Fase ${p.id}`, value: best ? best.accuracy : 0 };
  });

  // Pontuação Total = soma dos melhores "score" por fase
  const totalBestScore = PHASES.reduce((sum, p) => {
    const best = bestOf(
      attempts.filter((a) => a.phase === p.id),
      "score"
    );
    return sum + (best ? best.score : 0);
  }, 0);

  // Recordes gerais do jogador
  const maxWpm = attempts.length
    ? Math.max(...attempts.map((a) => a.wpm || 0))
    : 0;
  const maxAcc = attempts.length
    ? Math.max(...attempts.map((a) => a.accuracy || 0))
    : 0;
  const maxScr = attempts.length
    ? Math.max(...attempts.map((a) => a.score || 0))
    : 0;

  // Tempo de prática
  const totalMs = overall.totalMs || 0;
  const totalMinText =
    overall.totalMin >= 1
      ? `${overall.totalMin} min`
      : `${Math.round(totalMs / 1000)}s`;
  const avgSecText = attempts.length
    ? `${Math.round(totalMs / attempts.length / 1000)}s`
    : "0s";
  const totalScoreAll = attempts.reduce((s, a) => s + (a.score || 0), 0);
  const pointsPerMinute =
    totalMs > 0 ? Math.round(totalScoreAll / (totalMs / 60000)) : 0;

  return (
    <div className="space-y-4">
      {/* KPIs */}
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-3">
        <Kpi
          title="PPM Médio"
          value={overall.avgWpm}
          icon={<HiOutlineLightningBolt />}
          color="primary"
        />
        <Kpi
          title="Precisão Média"
          value={`${overall.avgAcc}%`}
          icon={<FiTarget />}
          color="success"
        />
        <Kpi
          title="Total de Jogos"
          value={overall.count}
          icon={<FiList />}
          color="secondary"
        />
        {/* AJUSTE: Pontuação Total (soma dos recordes por fase) */}
        <Kpi
          title="Pontuação Total"
          value={totalBestScore}
          icon={<LuTrophy />}
          color="accent"
        />
      </div>

      {/* Melhor Velocidade por Fase */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ChartCard title="Melhor Velocidade (PPM)">
          <ResponsiveContainer width="100%" height={260} className="-ml-6 mt-2">
            <LineChart data={bestWpmPerPhase}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="var(--color-primary)"
                isAnimationActive={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Melhor Precisão por Fase */}
        <ChartCard title="Melhor Precisão (%)">
          <ResponsiveContainer width="100%" height={260} className="-ml-6 mt-2">
            <LineChart data={bestAccPerPhase}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
              <XAxis dataKey="name" />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="var(--color-success)"
                isAnimationActive={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      {/* Melhor Pontuação por Fase */}
      <ChartCard title="Melhor Pontuação">
        <ResponsiveContainer width="100%" height={280} className="-ml-6 mt-2">
          <BarChart
            data={PHASES.map((p) => {
              const best = bestOf(
                attempts.filter((a) => a.phase === p.id),
                "score"
              );
              return { name: `Fase ${p.id}`, value: best ? best.score : 0 };
            })}
          >
            <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar
              dataKey="value"
              fill="var(--color-primary)"
              radius={[8, 8, 0, 0]}
              isAnimationActive={false}
            />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      {/* 2 Retângulos: Seus Recordes + Tempo de Prática */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* Seus Recordes */}
        <div className="rounded-lg bg-warning/10">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="text-2xl font-semibold leading-none tracking-tight flex items-center space-x-2 text-warning">
              <LuTrophy className="w-5 h-5" />
              <span>Seus Recordes</span>
            </h3>
          </div>
          <div className="p-6 pt-0 space-y-3 text-base-content/80">
            <div className="flex justify-between items-center">
              <span className="font-medium">Maior Velocidade:</span>
              <span className="text-xl font-bold">{maxWpm} PPM</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium">Melhor Precisão:</span>
              <span className="text-xl font-bold">{maxAcc}%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium">Melhor Pontuação:</span>
              <span className="text-xl font-bold">{maxScr}</span>
            </div>
          </div>
        </div>

        {/* Tempo de Prática */}
        <div className="rounded-lg bg-neutral/10">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="text-2xl font-semibold leading-none tracking-tight flex items-center space-x-2 text-base-content">
              <FiClock className="w-5 h-5" />
              <span>Tempo de Prática</span>
            </h3>
          </div>
          <div className="p-6 pt-0 space-y-3 text-base-content/80">
            <div className="flex justify-between items-center">
              <span className="font-medium">Tempo Total:</span>
              <span className="text-xl font-bold">{totalMinText}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className=" font-medium">Tempo Médio:</span>
              <span className="text-xl font-bold ">{avgSecText}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium">Pontos por Minuto:</span>
              <span className="text-xl font-bold">{pointsPerMinute}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Kpi({ title, value, icon, color }) {
  return (
    <div className={`card bg-${color}/10 text-${color}`}>
      <div className="card-body">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-semibold">{title}</div>
            <div className="text-2xl font-bold text-base-content">{value}</div>
          </div>
          <div className="text-4xl">{icon}</div>
        </div>
      </div>
    </div>
  );
}

function ChartCard({ title, children }) {
  return (
    <div className="card bg-base-200">
      <div className="card-body">
        <div className="card-title">{title}</div>
        {children}
      </div>
    </div>
  );
}
