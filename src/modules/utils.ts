// create a unique ID with a given prefix
export function createId(prefix?: string): string {
  if (!prefix) prefix = "uid";
  return `${prefix}-${Math.random().toString(36).substring(2, 9)}`;
}
