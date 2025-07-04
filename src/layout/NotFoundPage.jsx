import { Link } from "react-router-dom";
import {
  FiCompass,
  FiCloud,
  FiStar,
  FiMoon,
  FiSun,
  FiMeh,
  FiFrown,
} from "react-icons/fi";

const NotFoundPage = () => {
  return (
    <div
      className="min-h-screen
    
      bg-gradient-to-br from-[#355889] via-[#376fbe] via-[83%] to-[#DF8A2A]    

     flex flex-col items-center justify-center p-4 text-white overflow-hidden"
    >
      {/* Elementos decorativos flutuantes */}
      <FiCompass className="absolute top-20 left-10 text-purple-300 text-4xl opacity-60 animate-float" />
      <FiCloud className="absolute top-1/4 right-16 text-blue-200 text-5xl opacity-50 animate-float-delay-1" />
      <FiStar className="absolute bottom-1/3 left-20 text-yellow-200 text-3xl opacity-70 animate-pulse" />
      <FiMoon className="absolute top-40 right-1/4 text-blue-100 text-4xl opacity-60 animate-float-delay-2" />
      <FiSun className="absolute bottom-40 left-1/4 text-yellow-100 text-5xl opacity-80 animate-ping-slow" />
      <FiMeh className="absolute bottom-20 right-20 text-pink-200 text-4xl opacity-70 animate-bounce-slow" />
      <FiFrown className="absolute top-1/3 left-1/5 text-rose-200 text-4xl opacity-80 animate-bounce" />

      <div className="relative z-10 text-center max-w-2xl">
        {/* Número 404 oco com contorno */}
        <div className="relative -top-8">
          <h1
            className="text-[15rem] md:text-[25rem] font-bold text-transparent opacity-90"
            style={{
              WebkitTextStroke: "3px rgba(255,255,255,0.7)",
              textStroke: "3px rgba(255,255,255,0.7)",
            }}
          >
            404
          </h1>

          {/* Efeito de brilho interno */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-[15rem] md:text-[25rem] font-bold opacity-10">
              404
            </div>
          </div>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold mb-6 mt-[-80px] md:mt-[-140px] relative">
          Página não encontrada!
          <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 h-1 w-32 bg-accent rounded-full"></div>
        </h2>

        <p className="text-lg md:text-xl mb-10 max-w-md mx-auto">
          Parece que você se perdeu no espaço digital. A página que você está
          procurando pode ter sido movida ou não existe mais.
        </p>

        <Link
          to="/"
          className="inline-block bg-accent text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-orange-400"
        >
          Voltar para a Página Inicial
        </Link>
      </div>

      {/* Estilos de animação customizados */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        @keyframes float-delay-1 {
          0% {
            transform: translateY(10px);
          }
          50% {
            transform: translateY(-15px);
          }
          100% {
            transform: translateY(10px);
          }
        }

        @keyframes float-delay-2 {
          0% {
            transform: translateY(5px);
          }
          50% {
            transform: translateY(-25px);
          }
          100% {
            transform: translateY(5px);
          }
        }

        @keyframes pulse {
          0% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
          100% {
            opacity: 0.5;
            transform: scale(1);
          }
        }

        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          75%,
          100% {
            transform: scale(2.5);
            opacity: 0;
          }
        }

        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-25px);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delay-1 {
          animation: float 7s ease-in-out 1s infinite;
        }
        .animate-float-delay-2 {
          animation: float 5s ease-in-out 2s infinite;
        }
        .animate-pulse {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animate-ping-slow {
          animation: ping-slow 4s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default NotFoundPage;
