import { useEffect, useState } from "react";
import { login, cadastro } from "@/services/authService";
import { showErrorAlert } from "@/components/alerts";
import Input from "@/modules/elementos ui/components/Input";
import Button from "@/modules/elementos ui/components/Button";
import { FiLock } from "react-icons/fi";
import logoLonga from "../assets/layout/Topbar/logo_longa.png";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "@/store/userSlice";

export default function LoginPage() {
  const [screenSide, setScreenSide] = useState("Login");
  const [form, setForm] = useState({
    matricula: "",
    cpf: "",
    senha: "",
  });

  const [animationStep, setAnimationStep] = useState(screenSide);
  const [zIndex, setZIndex] = useState(true); // controla z-25
  const [rightInicial, setRightInicial] = useState(true);

  // Força tema claro
  useEffect(() => {
    const html = document.documentElement;
    const previousTheme = html.getAttribute("data-theme");
    html.setAttribute("data-theme", "myLightTheme");

    return () => {
      if (previousTheme) html.setAttribute("data-theme", previousTheme);
    };
  }, []);

  // Animação inicial
  useEffect(() => {
    setRightInicial(false);
    setTimeout(() => {
      setZIndex(false);
    }, 1000);
  }, []);

  const handleInputChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const validateForm = () => {
    const { matricula, cpf, senha } = form;
    const errors = [];

    if (matricula.trim().length !== 6) errors.push("Preencha a matrícula.");

    if (screenSide === "Resetar Senha" && cpf.trim().length !== 14)
      errors.push("Preencha o CPF.");

    if (senha.trim().length === 0) errors.push("Preencha a senha.");

    if (errors.length > 0) {
      return showErrorAlert(errors.join("<br/>"));
    }

    submitForm();
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitForm = async () => {
    try {
      const res =
        screenSide === "Login"
          ? await login(form.matricula, form.senha)
          : await cadastro(form.matricula, form.cpf, form.senha);

      // Somente para testes
      let usuarioo = res.data.usuario;
      usuarioo = { ...usuarioo, permissoes: ["menu", "dev"] };
      dispatch(setUser(usuarioo));
      // 
      
      // dispatch(setUser(res.data.usuario)); // salva os dados do usuário globalmente

      navigate("/", { state: { success: true } }); // redireciona e sinaliza sucesso
    } catch (err) {
      showErrorAlert(err.response?.data?.message || "Erro ao enviar os dados");
    }
  };

  const toggleScreenSide = () => {
    const next = screenSide === "Login" ? "Resetar Senha" : "Login";
    setAnimationStep(next);

    // Delay de 300ms pra esconder a mudança do form
    setTimeout(() => {
      setScreenSide(next);
    }, 300);
  };

  const isCadastro = screenSide === "Resetar Senha";
  const isCadastroAnim = animationStep === "Resetar Senha";

  return (
    <div className="relative min-h-screen font-sans">
      <div className="flex h-screen">
        {/* Lado Esquerdo */}
        <div
          id="lado-esquerdo"
          className={`w-1/2 flex items-center justify-center bg-primary transition-all duration-1000 relative ${
            isCadastroAnim ? "left-1/2" : "left-0"
          } z-20`}
        >
          <img
            src={logoLonga}
            alt="Logo Plansul"
            className="w-3/5 h-3/5 object-contain"
          />
        </div>

        {/* Lado Direito */}
        <div
          id="lado-direito"
          className={`w-1/2 flex items-center justify-center bg-base-200 h-full transition-all duration-1000 relative ${
            isCadastroAnim ? "right-1/2" : "right-0"
          } 
          ${zIndex ? "z-25" : "z-10"}
          ${rightInicial ? "right-1/2" : ""}`}
        >
          <div className="w-full flex flex-col items-center">
            <h1 className="text-primary font-medium text-center text-5xl mb-10">
              {screenSide}
            </h1>

            <Input
              id="matricula"
              fieldset="Matrícula"
              placeholder="000000"
              mask="000000"
              validMessage={<>A matrícula deve ter 6 números</>}
              validReqs={{
                pattern: "[0-9]*",
                minLength: "6",
                maxLength: "6",
              }}
              inputClassName="w-64"
              value={form.matricula}
              onChange={(e) => handleInputChange("matricula", e.target.value)}
              required
            />

            {isCadastro && (
              <Input
                id="cpf"
                fieldset="CPF"
                placeholder="000.000.000-00"
                mask="000.000.000-00"
                validMessage={<>O CPF deve ter 11 números</>}
                validReqs={{
                  pattern: "\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}",
                  minLength: "14",
                  maxLength: "14",
                }}
                inputClassName="w-64"
                value={form.cpf}
                onChange={(e) => handleInputChange("cpf", e.target.value)}
                required
              />
            )}

            <Input
              id="senha"
              fieldset={isCadastro ? "Resetar Senha" : "Senha"}
              type="password"
              placeholder="******"
              icon={<FiLock />}
              inputClassName="w-64"
              value={form.senha}
              onChange={(e) => handleInputChange("senha", e.target.value)}
              required
            />

            <Button type="button" onClick={validateForm} className="w-64 mt-8">
              {isCadastro ? "Cadastrar" : "Login"}
            </Button>

            <div className="flex mt-4">
              <small className="flex items-center text-sm">
                {isCadastro ? "Já tem senha?" : "Não tem senha?"}
              </small>
              <Button
                variant="link"
                className="link text-xs px-1"
                type="button"
                onClick={toggleScreenSide}
              >
                {isCadastro ? "Fazer login" : "Resetar senha"}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer footer-center p-2 text-white fixed bottom-0 bg-secondary z-30">
        <strong>
          &copy; {new Date().getFullYear()} - Plansul Planejamento e Consultoria
        </strong>
      </footer>
    </div>
  );
}
