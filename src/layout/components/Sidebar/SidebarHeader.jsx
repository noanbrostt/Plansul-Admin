import logoLonga from '../../../assets/layout/Topbar/logo_longa.png';
import logoCurta from '../../../assets/layout/Topbar/logo_curta.png';
import { useSidebarContext } from './SidebarContext'; // Importe o contexto

export default function SidebarHeader({ currentTheme }) { // Remova collapsed, hovering
  const { collapsed, hovering } = useSidebarContext(); // Use o contexto

  const filtroAzulEscuro = '[filter:invert(74%)_sepia(10%)_saturate(4436%)_hue-rotate(180deg)_brightness(98%)_contrast(85%)]';
  const filtroAzulClaro = '[filter:brightness(35%)_saturate(100%)_invert(27%)_sepia(9%)_saturate(4404%)_hue-rotate(177deg)_brightness(90%)_contrast(86%)]';

  return (
    <div className="m-4 mb-0 pb-2 h-12 flex items-center justify-start border-b border-gray-200 dark:border-gray-700">
      <img
        src={logoLonga}
        alt="Logo Longa"
        className={`
          ${currentTheme === 'myLightTheme' ? filtroAzulEscuro : filtroAzulClaro}
          ml-[34px] mb-[6px] scale-140 max-w-full max-h-full object-contain transition-all duration-300 ease-in-out relative delay-50
          ${(!collapsed || hovering) ? 'opacity-100' : 'opacity-0 ml-0 mb-0 w-0' }
        `}
      />
      <img
        src={logoCurta}
        alt="Logo Curta"
        className={`
          ${currentTheme === 'myLightTheme' ? filtroAzulEscuro : filtroAzulClaro}
          mb-[6px] -ml-2 max-w-full max-h-full object-contain absolute transition-all duration-300 ease-in-out delay-50
          ${(!collapsed || hovering) ? 'opacity-0 scale-50 left-5 top-0' : 'opacity-100 w-[60px]' }
        `}
      />
    </div>
  );
}