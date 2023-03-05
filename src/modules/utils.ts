// create a unique ID with a given prefix
export function createId(prefix = "uid"): string {
  return `${prefix}-${Math.random().toString(36).substring(2, 9)}`;
}
