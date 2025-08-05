import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FiStar } from "react-icons/fi";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  rectSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { menuConfig } from "@/layout/components/Sidebar/MenuConfig";

// monta mapa de rota → ícone a partir do menuConfig
const buildIconMap = () => {
  const map = {};
  const allItems = [
    ...menuConfig.mainSection.items,
    ...menuConfig.ambulatorioSection.items,
    ...menuConfig.adminSection.items,
    ...menuConfig.devsSection.items.flatMap((sec) => sec.subItems || []),
  ];
  allItems.forEach((item) => {
    if (item.to) {
      const key = item.to.replace(/^\//, "");
      map[key] = item.icon;
    }
  });
  return map;
};
const iconMap = buildIconMap();

export default function HomePage() {
  const user = useSelector((state) => state.user.data);
  const storageKey = `favoritos_${user.matricula}`;
  const [favoritos, setFavoritos] = useState(() =>
    JSON.parse(localStorage.getItem(storageKey) || "[]")
  );
  const [isDragging, setIsDragging] = useState(false);

  // persiste ordem no localStorage sempre que mudar
  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(favoritos));
  }, [favoritos, storageKey]);

  // sensores para arrastar
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    })
  );

  // handler de drag start/end
  const handleDragStart = () => {
    setIsDragging(true);
  };
  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const oldIndex = favoritos.findIndex((f) => f.url === active.id);
      const newIndex = favoritos.findIndex((f) => f.url === over.id);
      setFavoritos((items) => arrayMove(items, oldIndex, newIndex));
    }
    setIsDragging(false);
  };

  function SortableItem({ id, nome, url }) {
    const { attributes, listeners, setNodeRef, transform, transition } =
      useSortable({ id });
    const style = {
      transform: CSS.Transform.toString(transform),
      transition,
    };

    return (
      <div
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
        className={`card bg-base-100 hover:bg-base-200 shadow group cursor-move
          ${isDragging ? "pointer-events-none" : ""}
        `}
      >
        <Link
          to={`/${url}`}
          key={url}
          className="card bg-base-100 hover:bg-base-300 shadow group"
        >
          <div className="card-body p-4">
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 text-primary text-xl p-2 rounded-lg">
                {iconMap[url]}
              </div>
              <div>
                <h3 className="font-semibold group-hover:text-primary line-clamp-1">
                  {nome}
                </h3>
                <p className="text-sm text-base-content/60 mt-1 line-clamp-1">
                  {url.replace(/\//g, " › ")}
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }

  return (
    <div
      className={`space-y-6
        ${isDragging ? "!cursor-grabbing" : ""}
      `}
    >
      {/* cabeçalho */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h1 className="text-3xl font-bold">
            Olá,{" "}
            <span className="text-primary">
              {user?.nome?.split(" ")[0] || "Usuário"}
            </span>
          </h1>
        </div>
      </div>

      {/* grid principal */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* status usuário */}
        <div className="lg:col-span-1 space-y-6">
          <div className="card bg-base-200 shadow-lg">
            <div className="card-body flex items-center gap-4">
              <div className="avatar">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-content !flex items-center justify-center text-2xl">
                  {user?.nome?.charAt(0) || "U"}
                </div>
              </div>
              <div className="flex flex-col items-center">
                <h2 className="card-title">{user?.nome || "Usuário"}</h2>
                <div className="flex gap-2 mt-1">
                  <span className="badge badge-primary">{user?.matricula}</span>
                  <span className="badge badge-outline">
                    {user?.role || "Desenvolvedor"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* favoritos arrastáveis */}
        <div className="lg:col-span-2 space-y-6">
          <div className="card bg-base-200 shadow-lg">
            <div className="card-body">
              {favoritos.length > 0 ? (
                <>
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="card-title flex items-center gap-2">
                      <FiStar className="text-yellow-500" /> Seus Favoritos
                      <small className="text-xs text-base-content/70 mt-1">
                        (Arraste para reordenar)
                      </small>
                    </h2>
                    <span className="badge badge-primary">
                      {favoritos.length} itens
                    </span>
                  </div>

                  <DndContext
                    sensors={sensors}
                    collisionDetection={closestCenter}
                    onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd}
                  >
                    <SortableContext
                      items={favoritos.map((f) => f.url)}
                      strategy={rectSortingStrategy}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                        {favoritos.map(({ nome, url }) => (
                          <SortableItem
                            key={url}
                            id={url}
                            nome={nome}
                            url={url}
                            isDragging={isDragging}
                          />
                        ))}
                      </div>
                    </SortableContext>
                  </DndContext>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="flex flex-col items-center justify-center text-base-content/50">
                    <FiStar className="text-4xl mb-3 text-yellow-500/50" />
                    <p className="text-lg">Nenhum favorito adicionado</p>
                    <p className="mt-2 max-w-md mx-auto">
                      Adicione páginas aos favoritos usando o ícone{" "}
                      <FiStar className="inline text-yellow-500 -mt-0.5" /> no
                      cabeçalho das páginas
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="text-center text-base-content/50 text-sm">
        <p>
          ©{new Date().getFullYear()} Plansul. Todos os direitos reservados.
        </p>
      </div>
    </div>
  );
}
