export function routeFromHash(hash: string): 'home' | 'projects' {
  return hash.replace(/^#/, '').startsWith('/projects') ? 'projects' : 'home';
}
