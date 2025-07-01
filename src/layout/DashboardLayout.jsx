import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";

const SIDEBAR_COLLAPSED_KEY = "sidebarCollapsed"; // Chave para o localStorage
const THEME_KEY = "currentTheme"; // Chave para o tema no localStorage

export default function DashboardLayout() {
  // 1. Inicialize o estado 'collapsed' lendo do localStorage
  //    Se não houver nada salvo, defina como 'false' (expandido por padrão)
  const [collapsed, setCollapsed] = useState(() => {
    try {
      const storedCollapsed = localStorage.getItem(SIDEBAR_COLLAPSED_KEY);
      // localStorage armazena strings. Converte 'true'/'false' para booleanos.
      return storedCollapsed === "true";
    } catch (error) {
      console.error("Erro ao ler do localStorage:", error);
      return false; // Fallback para false em caso de erro
    }
  });
  const [openDropdown, setOpenDropdown] = useState(null);
  const [theme, setTheme] = useState(() => {
    try {
      // Use 'myLightTheme' ou 'myDarkTheme' como padrão
      return localStorage.getItem(THEME_KEY) || "myDarkTheme";
    } catch (error) {
      console.error("Erro ao ler tema do localStorage:", error);
      return "myDarkTheme";
    }
  });

  // Função para alternar o tema
  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === "myLightTheme" ? "myDarkTheme" : "myLightTheme"
    );
  };

  // Efeito para aplicar o tema ao elemento HTML e salvar no localStorage
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch (error) {
      console.error("Erro ao salvar tema no localStorage:", error);
    }
  }, [theme]);

  // 2. Use useEffect para salvar o estado 'collapsed' no localStorage sempre que ele mudar
  useEffect(() => {
    try {
      localStorage.setItem(SIDEBAR_COLLAPSED_KEY, String(collapsed)); // Salva como string 'true' ou 'false'
    } catch (error) {
      console.error("Erro ao salvar no localStorage:", error);
    }
  }, [collapsed]); // Este efeito roda toda vez que 'collapsed' muda

  const toggleSidebar = () => {
    setCollapsed((prevCollapsed) => !prevCollapsed); // Use o callback para garantir o valor mais recente
  };

  const handleDropdownToggle = (label) => {
    // Se o dropdown clicado já estiver aberto, fecha. Senão, abre.
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <div className="flex h-screen">
      <Sidebar
        collapsed={collapsed}
        openDropdown={openDropdown}
        handleDropdownToggle={handleDropdownToggle}
        currentTheme={theme}
      />

      {/* Container principal ajustado */}
      <div className="flex flex-col flex-1 min-w-0">
        {" "}
        {/* Adicione min-w-0 para evitar overflow */}
        <Topbar
          onToggleSidebar={toggleSidebar}
          collapsed={collapsed}
          setOpenDropdown={setOpenDropdown}
          onToggleTheme={toggleTheme}
          currentTheme={theme}
        />
        {/* Container do SimpleBar ajustado */}
        <div className="flex-1 min-h-0">
          {" "}
          {/* Container flexível */}
          <SimpleBar
            className="h-full" // Ocupa 100% da altura do container pai
            forceVisible="y"
          >
            <main className="p-6">
              <Outlet />
            </main>
          </SimpleBar>
        </div>
      </div>
    </div>
  );
}
