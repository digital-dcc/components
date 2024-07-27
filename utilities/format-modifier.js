export function formatModifier(mod) {
  if (mod < 0) return String(mod);
  return `+${mod}`;
}
