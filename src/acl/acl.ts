import { ROUTES_REGISTRY } from "./routeRegistry";
import type { PermissionsMap } from "./normalizePermissions";
import { canViewFeature } from "./normalizePermissions";

export type MenuItem = { label: string; to: string; icon?: any; targetBlank?: boolean };
export type DropdownGroup = { label: string; icon?: any; subItems: MenuItem[] };
export type SectionData = { links: MenuItem[]; groups: DropdownGroup[] };
export type Sections = Record<string, SectionData>;

const DOCS_FEATURE = "devs.docs";
const DOCS_GROUP_LABEL = "Documentação";

/**
 * Constrói o menu por seção:
 * - links diretos (SidebarLink)
 * - grupos (SidebarDropdown) detectados por groupLabel/groupIcon
 * Regra especial para "Documentação" dentro de Devs:
 *   aparece se o usuário tiver permissão "devs.docs" OU se tiver acesso a QUALQUER outra tela de Devs.
 */
export function buildMenuForUser(perms: PermissionsMap | undefined): Sections {
  const sections: Sections = {};
  const groupMaps: Record<string, Map<string, DropdownGroup>> = {}; // section -> (groupLabel -> group)

  const canSee = (featureKey: string | null | undefined) =>
    !featureKey || canViewFeature(perms, featureKey);

  let hasAnyDevVisible = false;
  const devDocsItems: Array<{ item: MenuItem; groupLabel: string; groupIcon?: any }> = [];

  const addLink = (section: string, item: MenuItem) => {
    sections[section] ||= { links: [], groups: [] };
    sections[section].links.push(item);
  };

  const addGroupItem = (section: string, label: string, icon: any, item: MenuItem) => {
    sections[section] ||= { links: [], groups: [] };
    groupMaps[section] ||= new Map<string, DropdownGroup>();
    if (!groupMaps[section].has(label)) {
      groupMaps[section].set(label, { label, icon, subItems: [] });
    }
    groupMaps[section].get(label)!.subItems.push(item);
  };

  // 1ª passada: adiciona tudo EXCETO os itens de "Documentação" (guardamos para decidir depois)
  for (const r of ROUTES_REGISTRY as any[]) {
    const item: MenuItem = {
      label: r.label,
      to: r.path,
      icon: r.icon,
      targetBlank: r.targetBlank === true,
    };

    // Itens de documentação: guardamos para resolver depois da detecção de Devs
    const isDevDocs = r.section === "devs" && r.groupLabel === DOCS_GROUP_LABEL;
    if (isDevDocs) {
      devDocsItems.push({ item, groupLabel: r.groupLabel, groupIcon: r.groupIcon });
      continue;
    }

    // Visibilidade padrão
    if (!canSee(r.featureKey)) continue;

    if (r.groupLabel) {
      addGroupItem(r.section, r.groupLabel, r.groupIcon, item);
    } else {
      addLink(r.section, item);
    }

    if (r.section === "devs") {
      hasAnyDevVisible = true;
    }
  }

  // 2ª passada: decide se "Documentação" entra
  const docsPermitted = canViewFeature(perms, DOCS_FEATURE);
  const showDocs = docsPermitted || hasAnyDevVisible;

  if (showDocs && devDocsItems.length > 0) {
    for (const d of devDocsItems) {
      addGroupItem("devs", d.groupLabel, d.groupIcon, d.item);
    }
  }

  // materializa os grupos em arrays
  for (const section of Object.keys(groupMaps)) {
    const map = groupMaps[section];
    if (map.size > 0) {
      sections[section] ||= { links: [], groups: [] };
      sections[section].groups = Array.from(map.values());
    }
  }

  return sections;
}

/**
 * Itens pesquisáveis no Topbar (inclui links externos de Documentação).
 * Mantém a mesma regra de visibilidade do menu:
 * - Documentação aparece na busca se o usuário tiver "devs.docs" OU se ele tiver acesso a qualquer outra tela de Devs.
 */
export function getSearchableRoutes(perms: PermissionsMap | undefined) {
  const canSee = (featureKey: string | null | undefined) =>
    !featureKey || canViewFeature(perms, featureKey);

  // Visíveis por permissão (não decide docs ainda)
  const visible = (ROUTES_REGISTRY as any[]).filter((r) => canSee(r.featureKey));

  const hasAnyDevVisible = visible.some(
    (r) => r.section === "devs" && r.groupLabel !== DOCS_GROUP_LABEL
  );

  const docsPermitted = canViewFeature(perms, DOCS_FEATURE);
  const showDocs = docsPermitted || hasAnyDevVisible;

  return (ROUTES_REGISTRY as any[])
    .filter((r) => {
      // regras de visibilidade
      if (r.section === "devs" && r.groupLabel === DOCS_GROUP_LABEL) {
        return showDocs; // docs entram se a regra especial permitir
      }
      return canSee(r.featureKey);
    })
    .map((r) => ({
      label: r.label,
      to: r.path,
      icon: r.icon,
      targetBlank: r.targetBlank === true,
    }));
}
