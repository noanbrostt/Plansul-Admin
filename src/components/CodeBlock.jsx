// components/CodeBlock.jsx
import { useState, useEffect } from "react";
import { Highlight, themes } from "prism-react-renderer";

const CodeBlock = ({ code, language = "jsx", className = "" }) => {
  const [copied, setCopied] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Detecta mudanças de tema do site
  useEffect(() => {
    const observer = new MutationObserver(() => {
      const theme = document.documentElement.getAttribute("data-theme");
      setIsDarkMode(theme?.includes("myDarkTheme") || false);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    // Inicializa com o tema atual
    const currentTheme = document.documentElement.getAttribute("data-theme");
    setIsDarkMode(currentTheme?.includes("myDarkTheme") || false);

    return () => observer.disconnect();
  }, []);

  // Função para copiar o código com fallback
  const copyToClipboard = () => {
    const textToCopy = code.trim();

    // Função de fallback para navegadores sem navigator.clipboard
    const fallbackCopy = () => {
      const textArea = document.createElement("textarea");
      textArea.value = textToCopy;
      textArea.style.position = "fixed";
      textArea.style.opacity = "0";
      document.body.appendChild(textArea);
      textArea.select();

      try {
        document.execCommand("copy");
        console.log("Código copiado (fallback):", textToCopy);
      } catch (err) {
        console.error("Erro ao copiar com fallback:", err);
      } finally {
        document.body.removeChild(textArea);
      }
    };

    // Tenta usar a API moderna primeiro
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          console.log("Código copiado:", textToCopy);
        })
        .catch((err) => {
          console.error("Erro na API de clipboard:", err);
          fallbackCopy();
        });
    } else {
      fallbackCopy();
    }

    // Feedback visual
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={`rounded-md border border-base-300 justify-self-center mt-2 max-h-96 max-w-[100%] flex flex-col ${className}`}
    >
      <div className="rounded-t-md bg-base-300 px-4 py-2 text-xs flex justify-between items-center sticky top-0 z-1">
        <span className="text-base-content/70">{language.toUpperCase()}</span>
        <button
          className={`text-primary hover:text-primary-focus cursor-pointer flex items-center gap-1 ${
            copied ? "scale-[0.98] opacity-90" : ""
          }`}
          onClick={copyToClipboard}
          aria-label="Copiar código"
        >
          {copied ? (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Copiado!
            </>
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
              </svg>
              Copiar
            </>
          )}
        </button>
      </div>

      {/* Container para o código com scroll */}
      <div className="overflow-y-auto flex-1">
        <Highlight
          theme={isDarkMode ? themes.jettwaveDark : themes.jettwaveLight}
          code={code.trim()}
          language={language}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre
              className={`${className} p-4 text-sm overflow-x-auto !mt-0`}
              style={{
                ...style,
                margin: 0,
                fontFamily: 'Consolas, Monaco, "Andale Mono", monospace',
                borderRadius: 0,
              }}
            >
              <code>
                {tokens.map((line, i) => (
                  <div
                    key={i}
                    {...getLineProps({ line })}
                    className="table-row"
                  >
                    <span className="table-cell text-right pr-4 opacity-50 select-none">
                      {i + 1}
                    </span>
                    <span className="table-cell">
                      {line.map((token, key) => {
                        const tokenProps = getTokenProps({ token });
                        return <span key={key} {...tokenProps} />;
                      })}
                    </span>
                  </div>
                ))}
              </code>
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  );
};

export default CodeBlock;
