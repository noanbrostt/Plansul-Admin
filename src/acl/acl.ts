// src/acl/acl.js
import { ROUTES_REGISTRY } from "./routeRegistry";
import { canViewFeature } from "./normalizePermissions";

/**
 * Tipos (anotação via JSDoc só pra referência)
 * @typedef {{label:string,to:string,icon?:any,targetBlank?:boolean}} MenuItem
 * @typedef {{label:string,icon?:any,subItems:MenuItem[]}} DropdownGroup
 * @typedef {{links:MenuItem[],groups:DropdownGroup[],ordered:Array<({kind:"link"} & MenuItem) | ({kind:"group"} & DropdownGroup)>}} SectionData
 * @typedef {Record<string, SectionData>} Sections
 */

const DOCS_FEATURE = "devs.docs";
const DOCS_GROUP_LABEL = "Documentação";

const canSee = (perms, featureKey) =>
  !featureKey || canViewFeature(perms, featureKey);

/**
 * Constrói o menu por seção PRESERVANDO a ordem do ROUTES_REGISTRY
 * - Intercala links e dropdowns conforme definidos no registry
 * - Aplica ACL via canViewFeature
 * - Regra especial "Documentação" (devs):
 *   aparece se o usuário tiver "devs.docs" OU se tiver acesso a qualquer outra tela de Devs
 * @param {Record<string, any>|undefined} perms
 * @returns {Sections}
 */
export function buildMenuForUser(perms) {
  /** @type {Sections} */
  const sections = {};
  /** @type {Record<string, Map<string, DropdownGroup>>} */
  const groupMaps = {};
  /** @type {Record<string, Set<string>>} */
  const groupPushedInOrdered = {};

  // 1) decidir se "Documentação" deve aparecer
  let hasAnyDevVisible = false;
  for (const r of ROUTES_REGISTRY) {
    const isDocs = r.section === "devs" && r.groupLabel === DOCS_GROUP_LABEL;
    if (isDocs) continue;
    if (r.section === "devs" && canSee(perms, r.featureKey)) {
      hasAnyDevVisible = true;
      break;
    }
  }
  const docsPermitted = canViewFeature(perms, DOCS_FEATURE);
  const showDocs = docsPermitted || hasAnyDevVisible;

  // 2) varrer o registry NA ORDEM e preencher
  for (const r of ROUTES_REGISTRY) {
    // pula docs se regra especial não permitir
    if (r.section === "devs" && r.groupLabel === DOCS_GROUP_LABEL && !showDocs) {
      continue;
    }
    // ACL normal
    if (!canSee(perms, r.featureKey)) continue;

    const sectionKey = r.section;
    if (!sections[sectionKey]) {
      sections[sectionKey] = { links: [], groups: [], ordered: [] };
    }
    if (!groupMaps[sectionKey]) groupMaps[sectionKey] = new Map();
    if (!groupPushedInOrdered[sectionKey]) groupPushedInOrdered[sectionKey] = new Set();

    /** @type {MenuItem} */
    const asItem = {
      label: r.label,
      to: r.path,
      icon: r.icon,
      targetBlank: r.targetBlank === true,
    };

    if (r.groupLabel) {
      // subitem de dropdown
      const glabel = r.groupLabel;
      const gicon = r.groupIcon;
      if (!groupMaps[sectionKey].has(glabel)) {
        groupMaps[sectionKey].set(glabel, { label: glabel, icon: gicon, subItems: [] });
      }
      const g = groupMaps[sectionKey].get(glabel);
      g.subItems.push(asItem);

      // empurra o grupo para "ordered" só na 1ª aparição
      if (!groupPushedInOrdered[sectionKey].has(glabel)) {
        sections[sectionKey].ordered.push({ kind: "group", ...g });
        groupPushedInOrdered[sectionKey].add(glabel);
      }
    } else {
      // link direto
      sections[sectionKey].links.push(asItem);
      sections[sectionKey].ordered.push({ kind: "link", ...asItem });
    }
  }

  // 3) materializar "groups" (legado/compat) a partir de groupMaps
  for (const section of Object.keys(groupMaps)) {
    const map = groupMaps[section];
    if (map.size > 0) {
      sections[section].groups = Array.from(map.values());
    }
  }

  return sections;
}

/**
 * Itens pesquisáveis no Topbar (inclui Documentação se a regra permitir)
 * @param {Record<string, any>|undefined} perms
 */
export function getSearchableRoutes(perms) {
  // mesma lógica de decisão de docs:
  let hasAnyDevVisible = false;
  for (const r of ROUTES_REGISTRY) {
    const isDocs = r.section === "devs" && r.groupLabel === DOCS_GROUP_LABEL;
    if (isDocs) continue;
    if (r.section === "devs" && canSee(perms, r.featureKey)) {
      hasAnyDevVisible = true;
      break;
    }
  }
  const docsPermitted = canViewFeature(perms, DOCS_FEATURE);
  const showDocs = docsPermitted || hasAnyDevVisible;

  return ROUTES_REGISTRY
    .filter((r) => {
      if (r.section === "devs" && r.groupLabel === DOCS_GROUP_LABEL) {
        return showDocs;
      }
      return canSee(perms, r.featureKey);
    })
    .map((r) => ({
      label: r.label,
      to: r.path,
      icon: r.icon,
      targetBlank: r.targetBlank === true,
    }));
}
