import { useSidebarContext } from './SidebarContext';

export default function SidebarSectionTitle({ title }) {
  const { collapsed, hovering } = useSidebarContext();

  return (
    <h2 className={`mb-2 text-xs uppercase flex leading-[20px] text-gray-400 w-full 
      ${(!collapsed || hovering) ? 'justify-start' : 'ml-[13px]'}
    `}>
      {(!collapsed || hovering) ? title : '...'}
    </h2>
  );
}