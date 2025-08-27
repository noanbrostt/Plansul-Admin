// src/features/typing/typingData.js
// Utilidades, constantes e storage do jogo de digitação (localStorage)

export const PHASES = [
  {
    id: 1,
    title: "Iniciante",
    subtitle: "Palavras simples",
    mult: 1,
    color: "#10b981",
    text: "O gato subiu no telhado.",
  }, // verde
  {
    id: 2,
    title: "Básico",
    subtitle: "Frases curtas",
    mult: 2,
    color: "#06b6d4",
    text: "A casa azul fica na esquina da rua principal.",
  }, // ciano
  {
    id: 3,
    title: "Intermediário",
    subtitle: "Texto introdutório",
    mult: 3,
    color: "#8b5cf6",
    text: "O Brasil é um país tropical com belezas naturais e cultura rica.",
  }, // roxo
  {
    id: 4,
    title: "Avançado",
    subtitle: "Mudanças no mundo digital",
    mult: 4,
    color: "#f59e0b",
    text: "A tecnologia mudou como nos comunicamos e trabalhamos ao longo do século vinte e um.",
  }, // laranja
  {
    id: 5,
    title: "Expert",
    subtitle: "Pesquisa e história",
    mult: 5,
    color: "#ef4444",
    text: "No século passado, descobertas científicas impulsionaram avanços em várias áreas do conhecimento humano.",
  }, // vermelho
  {
    id: 6,
    title: "Mestre",
    subtitle: "Biodiversidade",
    mult: 6,
    color: "#22c55e",
    text: "A biodiversidade do Brasil pede cuidado constante e estudo detalhado em biomas muito diferentes entre si.",
  }, // verde
  {
    id: 7,
    title: "Profissional",
    subtitle: "Globalização",
    mult: 7,
    color: "#3b82f6",
    text: "A globalização acelerou a troca cultural e a integração da economia entre países, conectando mercados distantes.",
  }, // azul
  {
    id: 8,
    title: "Especialista",
    subtitle: "Neurobiologia",
    mult: 8,
    color: "#ec4899",
    text: "A neurobiologia indica que o cérebro se adapta com treino: práticas regulares reforçam sinapses e melhoram a memória.",
  }, // rosa
  {
    id: 9,
    title: "Virtuoso",
    subtitle: "Criptomoedas",
    mult: 9,
    color: "#eab308",
    text: "Criptomoedas usam redes descentralizadas para registrar transações, reduzir intermediação e manter a segurança dos dados.",
  }, // amarelo
  {
    id: 10,
    title: "Lenda",
    subtitle: "IA generativa",
    mult: 10,
    color: "#a855f7",
    text: "Modelos de IA generativa aprendem padrões nos dados e criam textos, imagens e sons originais, ajustando estilo e material conforme o contexto.",
  }, // violeta
];

export const STORAGE_KEY = "typing_game_attempts_v1"; // { [phaseId]: Attempt[] }

export function loadAttemptsMap() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}
export function saveAttemptsMap(map) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
}
export function saveAttempt(attempt) {
  const map = loadAttemptsMap();
  const phaseId = attempt.phase;
  map[phaseId] = [...(map[phaseId] || []), attempt].slice(-500);
  saveAttemptsMap(map);
}
export function listAttempts() {
  const map = loadAttemptsMap();
  return Object.values(map)
    .flat()
    .sort((a, b) => a.when - b.when);
}
export function listAttemptsByPhase(phaseId) {
  const map = loadAttemptsMap();
  return (map[phaseId] || []).slice().sort((a, b) => a.when - b.when);
}

export function bestOf(arr, field = "score") {
  if (!arr?.length) return null;
  return arr.reduce((b, a) => (a[field] > b[field] ? a : b), arr[0]);
}
export function averages(arr) {
  if (!arr?.length) return { avgWpm: 0, avgAcc: 0, avgScore: 0 };
  const n = arr.length;
  const avgWpm = Math.round(arr.reduce((s, a) => s + a.wpm, 0) / n);
  const avgAcc = Math.round(arr.reduce((s, a) => s + a.accuracy, 0) / n);
  const avgScore = Math.round(arr.reduce((s, a) => s + a.score, 0) / n);
  return { avgWpm, avgAcc, avgScore };
}
export function totalPractice(arr) {
  const totalMs = arr.reduce((s, a) => s + (a.timeMs || 0), 0);
  return { totalMs, totalMin: Math.round(totalMs / 60000) };
}
export function formatTime(ms) {
  const s = Math.floor(ms / 1000);
  const m = Math.floor(s / 60);
  const r = s % 60;
  return `${m}:${String(r).padStart(2, "0")}`;
}
export function phaseById(id) {
  return PHASES.find((p) => p.id === id);
}

// ---- Desbloqueio sequencial ----
export function highestCompletedPhase(allAttempts) {
  if (!allAttempts?.length) return 0;
  return Math.max(0, ...allAttempts.map((a) => a.phase));
}
export function unlockedUpTo(allAttempts) {
  return Math.min(PHASES.length, highestCompletedPhase(allAttempts) + 1);
}

// ---- Ranking helper (faltava!) ----
export function topByMetric(
  arr,
  metric = "score",
  phaseFilter = "all",
  limit = 10
) {
  const filtered = arr.filter((a) =>
    phaseFilter === "all" ? true : a.phase === Number(phaseFilter)
  );
  const sorted = filtered
    .slice()
    .sort((a, b) => (b[metric] ?? 0) - (a[metric] ?? 0));
  return sorted.slice(0, limit);
}
