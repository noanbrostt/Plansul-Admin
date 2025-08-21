// src/acl/normalizePermissions.ts
export type PermissionsMap = Record<string, Record<string, boolean>>;

type BackendAcao = { co_acao: number; no_acao: string; vinculada: boolean };
type BackendFunc = { co_funcionalidade: number; no_funcionalidade: string; acoes: BackendAcao[] };
export type BackendPerfil = { co_perfil: number; no_perfil: string; funcionalidades: BackendFunc[] };

export function buildPermissionsMap(data: BackendPerfil[] = []): PermissionsMap {
  const map: PermissionsMap = {};
  for (const perfil of data) {
    for (const func of perfil.funcionalidades || []) {
      const feature = func.no_funcionalidade; // ex.: "admin.gestao-perfis"
      map[feature] ||= {};
      for (const acao of func.acoes || []) {
        map[feature][acao.no_acao] = !!acao.vinculada; // última vence (se houver conflito entre perfis)
      }
    }
  }
  return map;
}

export function canViewFeature(perms: PermissionsMap | null | undefined, feature: string): boolean {
  if (!perms) return false;
  return !!perms[feature]?.VISUALIZAR;
}

export function canDo(perms: PermissionsMap | null | undefined, feature: string, acao: string): boolean {
  if (!perms) return false;
  return !!perms[feature]?.[acao];
}
