import { useState, useMemo } from "react";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

import { SidebarProvider } from "./components/Sidebar/SidebarContext";
import SidebarHeader from "./components/Sidebar/SidebarHeader";
import SidebarSection from "./components/Sidebar/SidebarSection";
import SidebarLink from "./components/Sidebar/SidebarLink";
import SidebarDropdown from "./components/Sidebar/SidebarDropdown";

import { buildMenuForUser } from "@/acl/acl";

export default function Sidebar({
  collapsed,
  openDropdown,
  handleDropdownToggle,
  currentTheme,
  user,
}) {
  const [hovering, setHovering] = useState(false);
  const sections = useMemo(
    () => buildMenuForUser(user?.permissionsMap),
    [user?.permissionsMap]
  );

  const renderSection = (title, sectionKey) => {
    const data = sections?.[sectionKey];
    if (!data) return null;

    const ordered = Array.isArray(data.ordered) ? data.ordered : [];
    const hasOrdered = ordered.length > 0;
    // const hasLegacy = (data.links?.length || 0) + (data.groups?.length || 0) > 0;

    if (!hasOrdered) return null;

    return (
      <SidebarSection title={title} sectionKey={sectionKey}>
        {(hasOrdered ? ordered : [
          // fallback antigo: links depois grupos (apenas para não ficar vazio)
          ...data.links.map(l => ({ kind: "link", ...l })),
          ...data.groups.map(g => ({ kind: "group", ...g })),
        ]).map((it) =>
          it.kind === "group" ? (
            <SidebarDropdown
              key={`grp:${it.label}`}
              label={it.label}
              icon={it.icon}
              subItems={it.subItems}
            />
          ) : (
            <SidebarLink
              key={`lnk:${it.to}`}
              label={it.label}
              to={it.to}
              icon={it.icon}
              targetBlank={it.targetBlank}
            />
          )
        )}
      </SidebarSection>
    );
  };

  return (
    <SidebarProvider
      collapsed={collapsed}
      hovering={hovering}
      openDropdown={openDropdown}
      handleDropdownToggle={handleDropdownToggle}
    >
      <aside
        className={`
          bg-base-200 pb-0 min-h-screen flex flex-col
          transition-[width,opacity,transform] duration-300 ease-in-out overflow-hidden
          ${collapsed && !hovering ? "w-20" : "w-64"}
        `}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        <SidebarHeader currentTheme={currentTheme} />

        <SimpleBar
          style={{ maxHeight: "calc(100vh - 64px)" }}
          className="menu -ml-0.5 p-3 pl-3.5 w-full"
          forceVisible="y"
        >
          {renderSection("Início", "home")}
          {renderSection("Administração", "admin")}
          {renderSection("Ambulatório", "ambulatorio")}
          {renderSection("Dev/Playground", "devs")}
        </SimpleBar>
      </aside>
    </SidebarProvider>
  );
}
