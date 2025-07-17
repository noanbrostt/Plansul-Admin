// components/CodeBlock.jsx
import { useState, useEffect } from 'react';
import { Highlight, themes } from 'prism-react-renderer';

const CodeBlock = ({ code, language = 'jsx' }) => {
  const [copied, setCopied] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Detecta mudanças de tema do site
  useEffect(() => {
    const observer = new MutationObserver(() => {
      const theme = document.documentElement.getAttribute('data-theme');
      setIsDarkMode(theme?.includes('myDarkTheme') || false);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });

    // Inicializa com o tema atual
    const currentTheme = document.documentElement.getAttribute('data-theme');
    setIsDarkMode(currentTheme?.includes('myDarkTheme') || false);

    return () => observer.disconnect();
  }, []);

  // Função para copiar o código com animação
  const copyToClipboard = () => {
    const textToCopy = code.trim();
    
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset da animação após 2 segundos
    });
  };

  return (
    <div className="rounded-lg overflow-hidden border border-base-300 justify-self-center mt-2">
      <div className="bg-base-300 px-4 py-2 text-xs flex justify-between items-center">
        <span className="text-base-content/70">
          {language.toUpperCase()}
        </span>
        <button 
          className={`text-primary hover:text-primary-focus cursor-pointer flex items-center gap-1 ${
            copied ? 'scale-[0.98] opacity-90' : ''
          }`}
          onClick={copyToClipboard}
          aria-label="Copiar código"
        >
          {copied ? (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Copiado!
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
              </svg>
              Copiar
            </>
          )}
        </button>
      </div>
      
      <Highlight
        theme={isDarkMode ? themes.jettwaveDark : themes.jettwaveLight}
        code={code.trim()}
        language={language}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre 
            className={`${className} flex p-4 text-sm overflow-x-auto !mt-0`} 
            style={{ 
              ...style, 
              margin: 0,
              fontFamily: 'Consolas, Monaco, "Andale Mono", monospace',
              borderRadius: 0
            }}
          >
            <code>
              {tokens.map((line, i) => (
                <div 
                  key={i} 
                  {...getLineProps({ line, key: i })}
                  className="table-row"
                >
                  <span className="table-cell text-right pr-4 opacity-50 select-none">
                    {i + 1}
                  </span>
                  <span className="table-cell">
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </span>
                </div>
              ))}
            </code>
          </pre>
        )}
      </Highlight>
    </div>
  );
};

export default CodeBlock;