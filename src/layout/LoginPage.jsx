import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import Input from "@/modules/elementos ui/components/Input";
import Button from "@/modules/elementos ui/components/Button";
import { FiLock } from "react-icons/fi";
// Importe seus logos
import logoLonga from "../assets/layout/Topbar/logo_longa.png";

export default function LoginPage() {
  const [screenSide, setScreenSide] = useState("Login");
  const [cpfNumber, setCpfNumber] = useState("");

  const switchSides = () => {
    setScreenSide(screenSide == "Login" ? "Cadastro" : "Login");

    setTimeout(() => {
      const formHeading = document.querySelector("#form > h1");
      const formCpf = document.querySelector("#form > #cpf");
      const formSenhaLegend = document.querySelector(
        "#form > fieldset:last-of-type legend"
      );
      const formButton = document.querySelector("#form > button");
      const smallNovaSenha = document.querySelector("#nova-senha small");
      const btnNovaSenha = document.querySelector("#nova-senha button");

      switch (screenSide) {
        case "Cadastro":
          formHeading.textContent = "Login";
          formCpf.style.display = "none";
          formSenhaLegend.textContent = "Senha";
          formButton.textContent = "Login";
          smallNovaSenha.textContent = "Não tem senha?";
          btnNovaSenha.textContent = "Nova senha";
          break;

        case "Login":
          formHeading.textContent = "Cadastro";
          formCpf.style.display = "contents";
          formSenhaLegend.textContent = "Nova Senha";
          formButton.textContent = "Cadastrar";
          smallNovaSenha.textContent = "Já tem senha?";
          btnNovaSenha.textContent = "Fazer login";
          break;
      }
    }, 300);
  };

  useEffect(() => {
    const ladoImagem = document.querySelector("#lado-esquerdo");
    const ladoForm = document.querySelector("#lado-direito");

    ladoImagem.classList.toggle("left-1/2");
    ladoForm.classList.toggle("right-1/2");
  }, [screenSide]);

  // Animação inicial e força tema claro
  useEffect(() => {
    const ladoForm = document.querySelector("#lado-direito");

    ladoForm.classList.remove("right-1/2");
    ladoForm.classList.add("right-0");

    setTimeout(() => {
      ladoForm.classList.remove("z-25");
    }, 1000);

    const html = document.documentElement;
    const previousTheme = html.getAttribute("data-theme");
    html.setAttribute("data-theme", "myLightTheme");

    return () => {
      if (previousTheme) html.setAttribute("data-theme", previousTheme);
    };
  }, []);
  // 

  const submitForm = () => {
    
  }

  return (
    <div className="relative min-h-screen font-sans">
      {/* Container Principal com Flexbox */}
      <div className="flex h-screen">
        {/* Lado Esquerdo (Logo) */}
        <div
          id="lado-esquerdo"
          className={`w-1/2 flex items-center justify-center bg-primary transition-all duration-1000 relative left-0 z-20`}
        >
          <img
            src={logoLonga}
            alt="Logo Plansul"
            className="w-3/5 h-3/5 object-contain"
          />
        </div>

        {/* Lado Direito (Formulário) */}
        <div
          id="lado-direito"
          className={`w-1/2 flex items-center justify-center bg-base-200 h-full transition-all duration-1000 relative right-1/2 z-25`}
        >
          <div
            id="form"
            className="w-full flex flex-col items-center"
            onSubmit={console.log("Submit Form")}
          >
            <h1 className="text-primary font-medium text-center text-5xl mb-10">
              Login
            </h1>

            {/* Input Matrícula */}
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
              required
              inputClassName="w-64"
            />

            {/* Input Cpf */}
            <span id="cpf" className="hidden">
              <Input
                fieldset="CPF"
                placeholder="000.000.000-00"
                inputClassName="w-64"
                mask="000.000.000-00"
                validMessage={<>Precisa ter 11 números</>}
                validReqs={{
                  pattern: "[0-9]*",
                  minLength: "14",
                  maxLength: "14",
                }}
                value={cpfNumber}
                onChange={(e) => setCpfNumber(e.target.value)}
              />
            </span>

            {/* Input Senha */}
            <Input
              fieldset="Senha"
              type="password"
              placeholder="******"
              icon={<FiLock />}
              required
              inputClassName="w-64"
            />

            <Button type="button" onClick={submitForm} className="w-64 mt-8">
              Login
            </Button>

            <div id="nova-senha" className="flex">
              <small className="flex items-center text-sm">
                Não tem senha?
              </small>
              <Button
                variant="link"
                className="link text-xs px-1"
                type="button"
                onClick={switchSides}
              >
                Nova senha
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer footer-center p-2 text-white fixed bottom-0 bg-secondary z-30">
        <strong>
          &copy; {new Date().getFullYear()} - Plansul Planejamento e Consultoria
        </strong>
      </footer>
    </div>
  );
}
