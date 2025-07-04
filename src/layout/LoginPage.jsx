import { useEffect, useState, useRef } from "react";
import { login, reset } from "@/services/authService";
import { showErrorAlert } from "@/components/alerts";
import Input from "@/modules/ui/components/Input";
import Button from "@/modules/ui/components/Button";
import { FiLock } from "react-icons/fi";
import logoLonga from "../assets/layout/Topbar/logo_longa.png";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "@/store/userSlice";

export default function LoginPage() {
  const [screenSide, setScreenSide] = useState("Login");
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    matricula: "",
    cpf: "",
    senha: "",
  });

  // Refs para os campos de input
  const matriculaRef = useRef(null);
  const cpfRef = useRef(null);
  const senhaRef = useRef(null);
  const submitButtonRef = useRef(null);

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
    setIsLoading(true);

    const { matricula, cpf, senha } = form;
    const errors = [];

    if (matricula.trim().length !== 6) errors.push("Preencha a matrícula.");

    if (screenSide === "Criar/Resetar Senha" && cpf.trim().length !== 14)
      errors.push("Preencha o CPF.");

    if (senha.trim().length === 0) errors.push("Preencha a senha.");

    if (errors.length > 0) {
      setIsLoading(false);
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
          : await reset(
              form.matricula,
              form.cpf.replace(/\D/g, ""),
              form.senha
            );

      dispatch(setUser(res.data.usuario)); // salva os dados do usuário globalmente

      if (screenSide !== "Login") {
        sessionStorage.setItem("senhaResetada", "1");
      }

      navigate("/");
    } catch (err) {
      showErrorAlert(err.response?.data?.message || "Erro ao enviar os dados");
    }
    setIsLoading(false);
  };

  const toggleScreenSide = () => {
    const next = screenSide === "Login" ? "Criar/Resetar Senha" : "Login";
    setAnimationStep(next);

    // Delay de 300ms pra esconder a mudança do form
    setTimeout(() => {
      setScreenSide(next);
    }, 300);
  };

  // Função para navegação por teclado
  const handleKeyDown = (e, field) => {
    if (e.key === "Enter") {
      e.preventDefault();

      const isReset = screenSide === "Criar/Resetar Senha";

      switch (field) {
        case "matricula":
          // Se estiver na tela de reset e CPF existir, vá para CPF
          if (isReset && cpfRef.current) {
            cpfRef.current.focus();
          } else if (senhaRef.current) {
            // Caso contrário, vá para senha
            senhaRef.current.focus();
          }
          break;

        case "cpf":
          // Do CPF vá para senha
          if (senhaRef.current) {
            senhaRef.current.focus();
          }
          break;

        case "senha":
          // Na senha, submeta o formulário
          if (submitButtonRef.current) {
            submitButtonRef.current.click();
          }
          break;

        default:
          break;
      }
    }
  };

  const isReset = screenSide === "Criar/Resetar Senha";
  const isResetAnim = animationStep === "Criar/Resetar Senha";

  return (
    <div className="relative min-h-screen font-sans">
      <div className="flex h-screen">
        {/* Lado Esquerdo */}
        <div
          id="lado-esquerdo"
          className={`w-1/2 flex items-center justify-center bg-primary transition-all duration-1000 relative ${
            isResetAnim ? "left-1/2" : "left-0"
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
            isResetAnim ? "right-1/2" : "right-0"
          } 
          ${zIndex ? "z-25" : "z-10"}
          ${rightInicial ? "right-1/2" : ""}`}
        >
          <div className="w-full flex flex-col items-center">
            <h1 className="text-primary font-medium text-center text-5xl mb-8">
              {screenSide}
            </h1>

            <Input
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
              onKeyDown={(e) => handleKeyDown(e, "matricula")}
              ref={matriculaRef}
              required
              autoFocus
            />

            {isReset && (
              <Input
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
                onKeyDown={(e) => handleKeyDown(e, "cpf")}
                inputRef={cpfRef}
                required
              />
            )}

            <Input
              fieldset={isReset ? "Criar/Resetar Senha" : "Senha"}
              type="password"
              placeholder="******"
              icon={<FiLock />}
              inputClassName="w-64"
              value={form.senha}
              onChange={(e) => handleInputChange("senha", e.target.value)}
              onKeyDown={(e) => handleKeyDown(e, "senha")}
              ref={senhaRef}
              required
            />

            <Button
              type="button"
              onClick={validateForm}
              className={`${isLoading ? "w-9" : "w-64"} mt-8`}
              ref={submitButtonRef}
              variant={isLoading ? "ghost" : "primary"}
              loading={isLoading}
            >
              {isReset ? "Cadastrar" : "Login"}
            </Button>

            <div className="flex mt-0">
              <small className="flex items-center text-xs">
                {isReset ? "Já tem senha?" : "Não tem senha?"}
              </small>
              <Button
                variant="link"
                className="link text-xs px-1"
                type="button"
                onClick={toggleScreenSide}
              >
                {isReset ? "Fazer login" : "Criar/Resetar Senha"}
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
