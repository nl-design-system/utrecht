/**
 * Joins a base path with a relative path, avoiding double slashes.
 * When base is '/', returns '/path'. When base is '/utrecht', returns '/utrecht/path'.
 */
export function joinUrl(base: string, path: string): string {
  // Remove trailing slash from base and leading slash from path to avoid doubles
  const normalizedBase = base.replace(/\/$/, '');
  const normalizedPath = path.replace(/^\//, '');

  // If base is empty or just '/', return path with leading slash
  if (!normalizedBase || normalizedBase === '') {
    return `/${normalizedPath}`;
  }

  return `${normalizedBase}/${normalizedPath}`;
}
