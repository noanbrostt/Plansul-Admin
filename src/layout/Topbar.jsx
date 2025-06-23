import { useState, useEffect } from 'react';

export default function Topbar() {
  //- usar o state do React para controlar o tema atual
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  );

  //- função que será chamada na mudança do checkbox
  const handleToggle = (e) => {
    const newTheme = e.target.checked ? 'dark' : 'light';
    setTheme(newTheme);
  };

  // usar useEffect para aplicar a mudança no HTML e no localStorage
  useEffect(() => {
   
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]); //- este efeito roda sempre que o state 'theme' mudar

  return (
    <div className="navbar bg-base-100 shadow-md">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Painel Admin</a>
      </div>
      <div className="flex-none">
        <label className="swap swap-rotate">
          {/*- o input é controlado pelo state do React */}
          <input
            type="checkbox"
            className="theme-controller"
            onChange={handleToggle}
            //- o estado 'checked' é determinado pelo tema atual
            checked={theme === 'dark'}
          />

          {/*- ícone de sol (claro) */}
          <svg
            className="swap-on fill-current w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5 12a7 7 0 1114 0 7 7 0 01-14 0zm7-9v2M7.05 4.05l1.414 1.414M3 12h2m1.636 5.95l1.414-1.414M12 21v-2m4.95-1.05l-1.414-1.414M21 12h-2M16.95 7.05l-1.414 1.414" />
          </svg>

          {/*- ícone de lua (escuro) */}
          <svg
            className="swap-off fill-current w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.752 15.002A9 9 0 1112.998 2.25c.199 0 .397.007.594.02A7.5 7.5 0 0021.75 15c.013.197.02.395.002.594a.75.75 0 01-1.5-.092z" />
          </svg>
        </label>
      </div>
    </div>
  );
}