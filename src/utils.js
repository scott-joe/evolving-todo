export function generateId() {
  return Math.round(Math.random() * (9999999 - 1000000)) + 1000000;
}