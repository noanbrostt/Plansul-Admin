import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import { showSuccessAlert } from "@/components/alerts";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";

const SIDEBAR_COLLAPSED_KEY = "sidebarCollapsed";
const THEME_KEY = "currentTheme";

export default function DashboardLayout() {

  useEffect(() => {
    const senhaResetada = sessionStorage.getItem("senhaResetada");
    if (senhaResetada) {
      showSuccessAlert("Senha resetada com sucesso!");
      sessionStorage.removeItem("senhaResetada");
    }
  }, []);

  const [collapsed, setCollapsed] = useState(() => {
    try {
      const storedCollapsed = localStorage.getItem(SIDEBAR_COLLAPSED_KEY);
      // localStorage armazena strings. Converte 'true'/'false' para booleanos.
      return storedCollapsed === "true";
    } catch (error) {
      console.error("Erro ao ler do localStorage:", error);
      return false;
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
  const user = useSelector((state) => state.user.data);
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
    setCollapsed((prevCollapsed) => !prevCollapsed);
  };

  const handleDropdownToggle = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <div className="flex h-screen">
      <Sidebar
        collapsed={collapsed}
        openDropdown={openDropdown}
        handleDropdownToggle={handleDropdownToggle}
        currentTheme={theme}
        user={user}
      />

      <div className="flex flex-col flex-1 min-w-0">
        <Topbar
          onToggleSidebar={toggleSidebar}
          collapsed={collapsed}
          setOpenDropdown={setOpenDropdown}
          onToggleTheme={toggleTheme}
          currentTheme={theme}
          user={user}
        />
        <div className="flex-1 min-h-0">
          <SimpleBar
            className="h-full"
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
