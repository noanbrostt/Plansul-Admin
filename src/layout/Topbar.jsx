import { useState, useEffect } from 'react';
import { 
  FiAlignLeft,
  FiMenu,
  FiSun,
  FiMoon
} from 'react-icons/fi';

export default function Topbar({ collapsed, onToggleSidebar, currentTheme, onToggleTheme, setOpenDropdown }) {

  return (
    <div className="navbar bg-base-100 shadow-md">
      <div className="flex-1">
        
        {/*- botão de colapsar/expandir */}
        <div className="flex items-center">
          <button
            onClick={() => {
              onToggleSidebar()
              if (!collapsed) setOpenDropdown(null); // Fecha dropdowns ao colapsar
            }}
            className="btn btn-sm btn-ghost"
          >
            {collapsed ? <FiMenu size={22} /> : <FiAlignLeft size={22} />}
          </button>
        </div>
        
        {/* <a className="btn btn-ghost text-xl">Plansul Admin</a> */}
      </div>
      <div className="flex-none gap-3 items-center flex px-2">
        <label className="swap swap-rotate btn btn-circle h-12 w-12">
          {/*- o input é controlado pelo state do React */}
          <input
            type="checkbox"
            className="theme-controller"
            onChange={onToggleTheme}
            //- o estado 'checked' é determinado pelo tema atual
            checked={currentTheme === 'myDarkTheme'}
          />

          <FiSun className="swap-on fill-current text-2xl" />
          <FiMoon className="swap-off fill-current text-2xl" />
        </label>

         {/* Info Usuário */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar w-full">
            <div
              className="w-12 h-12 rounded-full tooltip tooltip-bottom flex content-center bg-base-content text-base-100"
              data-tip="Administrador">
              <span className="text-sm font-semibold">NB</span>
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a className='pointer-events-none'>Noan Caliel Brostt</a>
            </li>
            <li>
              <a className="text-sm pointer-events-none mb-[5px]">Administrador</a>
            </li>
            <li>
              <a className="text-error hover:text-error flex items-center gap-1">
                Logout
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1m0-9V5m-3 14h6a2 2 0 002-2V7a2 2 0 00-2-2h-6"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}