import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { FiStar } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";

interface FavoriteButtonProps {
  tela: { nome: string; url: string };
}

export default function FavoriteButton({ tela }: FavoriteButtonProps) {
  const user = useSelector((state: RootState) => state.user.data);
  const FAVORITOS_KEY = `favoritos_${user.matricula}`;
  const [isFavorito, setIsFavorito] = useState(false);

  useEffect(() => {
    const favoritos: FavoriteButtonProps["tela"][] = JSON.parse(
      localStorage.getItem(FAVORITOS_KEY) || "[]"
    );

    setIsFavorito(favoritos.some((fav) => fav.url === tela.url));
  }, [tela]);

  const toggleFavorito = () => {
    const favoritos: FavoriteButtonProps["tela"][] = JSON.parse(
      localStorage.getItem(FAVORITOS_KEY) || "[]"
    );

    let atualizados;
    const jaExiste = favoritos.some((fav) => fav.url === tela.url);

    if (jaExiste) {
      atualizados = favoritos.filter((fav) => fav.url !== tela.url);
    } else {
      atualizados = [...favoritos, tela];
    }

    localStorage.setItem(FAVORITOS_KEY, JSON.stringify(atualizados));
    setIsFavorito(!jaExiste);
  };

  return (
    <button
      onClick={toggleFavorito}
      className="w-6 h-10 ml-2 text-warning justify-items-center transition-all hover:brightness-90 cursor-pointer tooltip tooltip-right"
      data-tip={isFavorito ? "Remover dos favoritos" : "Adicionar aos favoritos"}
    >
      {isFavorito ? <AiFillStar size={20} /> : <FiStar size={20} />}
    </button>
  );
}
