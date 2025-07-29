import {
  useState,
  useMemo,
  memo,
  useCallback,
  lazy,
  Suspense,
  useTransition,
} from "react";
import Tabela from "@/modules/devs/ui/Tabela/Tabela";
import {
  FiUser,
  FiShield,
  FiLock,
  FiPlus,
  FiEdit,
  FiTrash2,
  FiX,
  FiCheck,
  FiKey,
  FiSquare,
  FiCheckSquare,
} from "react-icons/fi";
import FavoriteButton from "@/components/FavoriteButton";
import { menuConfig } from "@/layout/components/Sidebar/MenuConfig";

const Modal = lazy(() => import("@/components/Modal"));

const acoesIniciais = [
  { co_acao: 1, no_acao: "Visualizar" },
  { co_acao: 2, no_acao: "Criar" },
  { co_acao: 3, no_acao: "Editar" },
  { co_acao: 4, no_acao: "Excluir" },
];

const perfisIniciais = [
  { co_perfil: 1, no_perfil: "Administrador", ic_situacao_ativo: true },
  { co_perfil: 2, no_perfil: "Gestor", ic_situacao_ativo: true },
  { co_perfil: 3, no_perfil: "Desenvolvedor", ic_situacao_ativo: true },
];

const permissoesIniciaisArray = [
  { co_perfil: 1, co_funcionalidade: "admin-acessos", co_acao: 1 },
  { co_perfil: 1, co_funcionalidade: "admin-acessos", co_acao: 2 },
];

const criarMapaDePermissoes = (arr) => {
  const mapa = {};
  for (const { co_perfil, co_funcionalidade, co_acao } of arr) {
    mapa[co_perfil] ??= {};
    mapa[co_perfil][co_funcionalidade] ??= {};
    mapa[co_perfil][co_funcionalidade][co_acao] = true;
  }
  return mapa;
};

export default function GestaoPerfisPage() {
  const { sistemas, funcionalidades } = useMemo(() => {
    const sis = [],
      func = [];
    for (let key in menuConfig) {
      const s = menuConfig[key];
      sis.push({ key, title: s.title });
      s.items.forEach((item) => {
        const base = `${key}-${item.label.toLowerCase().replace(/\s+/g, "-")}`;
        if (item.subItems) {
          item.subItems.forEach((si) =>
            func.push({
              key: `${base}-${si.label.toLowerCase().replace(/\s+/g, "-")}`,
              name: `${item.label} > ${si.label}`,
              desc: si.to || "",
              sistema: key,
            })
          );
        } else {
          func.push({
            key: base,
            name: item.label,
            desc: item.to || "",
            sistema: key,
          });
        }
      });
    }
    return { sistemas: sis, funcionalidades: func };
  }, []);

  const [perfis, setPerfis] = useState(perfisIniciais);
  const [permissoes, setPermissoes] = useState(() =>
    criarMapaDePermissoes(permissoesIniciaisArray)
  );
  const [editingId, setEditingId] = useState(null);
  const [tempNome, setTempNome] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selPerfil, setSelPerfil] = useState(null);
  const [permTemp, setPermTemp] = useState({});
  const [pending, setPending] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [activeCollapse, setActiveCollapse] = useState(null);

  const acaoKeys = useMemo(() => acoesIniciais.map((a) => a.co_acao), []);
  const acaoVisualizar = 1;
  const dependentes = [2, 3, 4];

  const openModal = useCallback(
    (p) => {
      setSelPerfil(p);
      setPermTemp(permissoes[p.co_perfil] || {});
      setShowModal(true);
      setPending(false);
    },
    [permissoes]
  );

  const togglePerm = useCallback((f, a) => {
    startTransition(() => {
      setPermTemp((prev) => {
        const next = { ...prev };
        next[f] = { ...next[f] };
        const current = !!next[f][a];

        if (a === acaoVisualizar && current) {
          // Desmarcar tudo
          delete next[f];
        } else {
          next[f][a] = !current;
          if (!next[f][acaoVisualizar] && dependentes.includes(a)) {
            next[f][acaoVisualizar] = true;
          }
          if (!next[f][acaoVisualizar]) {
            delete next[f];
          }
        }

        // Se visualizar for desmarcado, desmarca todas as dependentes também
        if (!next[f]?.[acaoVisualizar]) {
          delete next[f];
        }

        return next;
      });
      setPending(true);
    });
  }, []);

  const hasPerm = useCallback((f, a) => !!permTemp[f]?.[a], [permTemp]);
  const hasAll = useCallback(
    (f) => acaoKeys.every((a) => permTemp[f]?.[a]),
    [permTemp]
  );
  const toggleAll = useCallback((f) => {
    startTransition(() => {
      setPermTemp((pt) => {
        const next = { ...pt };
        const all = acaoKeys.every((a) => pt[f]?.[a]);
        if (all) {
          delete next[f];
        } else {
          next[f] = {};
          acaoKeys.forEach((a) => (next[f][a] = true));
        }
        return next;
      });
      setPending(true);
    });
  }, []);

  const totalPerms = useMemo(
    () =>
      Object.values(permTemp).reduce(
        (sum, obj) => sum + Object.values(obj).filter(Boolean).length,
        0
      ),
    [permTemp]
  );

  const FuncionalidadeCell = memo(
    ({ name, desc, allChecked, onToggleAll }) => (
      <div className="flex items-center space-x-3">
        <button
          className="btn btn-ghost btn-sm p-1"
          onClick={(e) => {
            e.stopPropagation();
            onToggleAll();
          }}
        >
          {allChecked ? (
            <FiCheckSquare className="text-primary text-xl" />
          ) : (
            <FiSquare className="text-base-content text-xl" />
          )}
        </button>
        <div>
          <div className="font-medium">{name}</div>
          {desc && <div className="text-xs mt-1">{desc}</div>}
        </div>
      </div>
    ),
    (a, b) => a.allChecked === b.allChecked
  );

  const CheckboxCell = memo(
    ({ funcKey, acaoKey, checked, onToggle }) => (
      <div className="flex justify-center">
        <input
          type="checkbox"
          className="form-checkbox h-5 w-5 text-primary"
          checked={checked}
          onChange={(e) => {
            e.stopPropagation();
            onToggle(funcKey, acaoKey);
          }}
        />
      </div>
    ),
    (prev, next) => prev.checked === next.checked
  );

  const perfilCols = useMemo(
    () => [
      {
        accessorKey: "co_perfil",
        header: () => <div className="w-full text-center">ID</div>,
        cell: ({ getValue }) => <div className="text-center">{getValue()}</div>,
        size: 60,
      },
      {
        accessorKey: "no_perfil",
        header: "Nome",
        cell: ({ row }) => {
          const p = row.original;
          if (editingId === p.co_perfil) {
            return (
              <div className="flex space-x-1">
                <input
                  className="input input-sm"
                  value={tempNome}
                  onChange={(e) => setTempNome(e.target.value)}
                  autoFocus
                />
                <button
                  className="btn btn-xs"
                  onClick={() => {
                    setPerfis((ps) =>
                      ps.map((x) =>
                        x.co_perfil === p.co_perfil
                          ? { ...x, no_perfil: tempNome }
                          : x
                      )
                    );
                    setEditingId(null);
                  }}
                >
                  <FiCheck />
                </button>
                <button
                  className="btn btn-xs"
                  onClick={() => setEditingId(null)}
                >
                  <FiX />
                </button>
              </div>
            );
          }
          return (
            <div className="flex space-x-1">
              <span>{p.no_perfil}</span>
              <button
                className="btn btn-ghost btn-xs"
                onClick={() => {
                  setEditingId(p.co_perfil);
                  setTempNome(p.no_perfil);
                }}
              >
                <FiEdit />
              </button>
            </div>
          );
        },
      },
      {
        accessorKey: "ic_situacao_ativo",
        header: () => <div className="w-full text-center">Status</div>,
        cell: ({ row }) => (
          <div className="text-center">
            <span
              className={`badge badge-${
                row.original.ic_situacao_ativo ? "success" : "error"
              }`}
            >
              {row.original.ic_situacao_ativo ? "Ativo" : "Inativo"}
            </span>
          </div>
        ),
        size: 100,
      },
      {
        accessorKey: "acoes",
        header: () => <div className="w-full text-center">Ações</div>,
        cell: ({ row }) => (
          <div className="flex space-x-1 justify-center">
            <button
              className="btn btn-xs"
              onClick={() => openModal(row.original)}
            >
              <FiKey />
            </button>
            <button
              className="btn btn-xs btn-error"
              onClick={() =>
                setPerfis((ps) =>
                  ps.filter((x) => x.co_perfil !== row.original.co_perfil)
                )
              }
            >
              <FiTrash2 />
            </button>
            <button
              className="btn btn-xs"
              onClick={() =>
                setPerfis((ps) =>
                  ps.map((x) =>
                    x.co_perfil === row.original.co_perfil
                      ? { ...x, ic_situacao_ativo: !x.ic_situacao_ativo }
                      : x
                  )
                )
              }
            >
              {row.original.ic_situacao_ativo ? <FiLock /> : <FiCheck />}
            </button>
          </div>
        ),
        size: 100,
      },
    ],
    [editingId, tempNome, openModal]
  );

  return (
    <div className="p-4 space-y-6">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold flex items-center">
          Gestão de Perfis{" "}
          <FavoriteButton tela={{ nome: "Perfis", url: "/admin/perfis" }} />
        </h1>
        <button
          className="btn btn-primary"
          onClick={() =>
            setPerfis((ps) => [
              {
                co_perfil: Date.now(),
                no_perfil: "Novo",
                ic_situacao_ativo: true,
              },
              ...ps,
            ])
          }
        >
          <FiPlus /> Novo
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="stats bg-base-200">
          <div className="stat">
            <FiUser /> Total<stat-value>{perfis.length}</stat-value>
          </div>
        </div>
        <div className="stats bg-base-200">
          <div className="stat">
            <FiShield /> Ativos
            <stat-value>
              {perfis.filter((p) => p.ic_situacao_ativo).length}
            </stat-value>
          </div>
        </div>
        <div className="stats bg-base-200">
          <div className="stat">
            <FiLock /> Inativos
            <stat-value>
              {perfis.filter((p) => !p.ic_situacao_ativo).length}
            </stat-value>
          </div>
        </div>
      </div>

      <Tabela data={perfis} columns={perfilCols} exportFileName="perfis" />

      {showModal && selPerfil && (
        <Suspense fallback={<div>Carregando...</div>}>
          <Modal
            isOpen
            onClose={() => setShowModal(false)}
            title={`Permissões: ${selPerfil.no_perfil}`}
            size="6xl"
          >
            <div className="space-y-2 max-h-[70vh] overflow-auto">
              {sistemas.map((s) => {
                const items = funcionalidades.filter(
                  (f) => f.sistema === s.key
                );
                if (!items.length) return null;
                const isOpen = activeCollapse === s.key;
                return (
                  <div
                    key={s.key}
                    className="collapse collapse-arrow border border-base-300 bg-base-100"
                  >
                    <input
                      type="radio"
                      name="collapse-group"
                      checked={isOpen}
                      onChange={() => setActiveCollapse(isOpen ? null : s.key)}
                    />
                    <div className="collapse-title font-medium flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={items.every((f) => hasAll(f.key))}
                        onChange={() => items.forEach((f) => toggleAll(f.key))}
                        onClick={(e) => e.stopPropagation()}
                        className="z-2"
                      />
                      {s.title} ({items.length})
                    </div>
                    <div className="collapse-content">
                      <Tabela
                        data={items}
                        columns={[
                          {
                            accessorKey: "name",
                            header: "Funcionalidade",
                            cell: ({ row }) => (
                              <FuncionalidadeCell
                                name={row.original.name}
                                desc={row.original.desc}
                                allChecked={hasAll(row.original.key)}
                                onToggleAll={() => toggleAll(row.original.key)}
                              />
                            ),
                            size: 300,
                          },
                          ...acoesIniciais.map((a) => ({
                            id: `a${a.co_acao}`,
                            header: a.no_acao,
                            cell: ({ row }) => (
                              <CheckboxCell
                                funcKey={row.original.key}
                                acaoKey={a.co_acao}
                                checked={hasPerm(row.original.key, a.co_acao)}
                                onToggle={togglePerm}
                              />
                            ),
                            size: 80,
                          })),
                        ]}
                        globalFilter={false}
                        pagination={false}
                        enableExport={false}
                        disableSorting
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-between items-center p-4 bg-base-200">
              <div>
                <span>Selecionadas: {totalPerms}</span>
                <span className="ml-4">
                  {pending ? "Não salvas" : "Salvas"}
                </span>
              </div>
              <div className="space-x-2">
                <button
                  className={`btn ${pending ? "btn-primary" : "btn-disabled"}`}
                  onClick={() => {
                    setPermissoes((p) => ({
                      ...p,
                      [selPerfil.co_perfil]: permTemp,
                    }));
                    setPending(false);
                  }}
                  disabled={!pending}
                >
                  Salvar
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Fechar
                </button>
              </div>
            </div>
          </Modal>
        </Suspense>
      )}
    </div>
  );
}
