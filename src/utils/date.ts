export function convertDateToAgo(dateInput: string | Date): string|number {
  const date = new Date(dateInput);
  const ago = date.getTime();
  const now = new Date().getTime();
  const diff = now - ago;

  switch (true) {
    case diff < 1000 * 60:
      return `${Math.round(diff / 1000)} second${Math.round(diff / 1000) !== 1 ? "s" : ""} ago`;
    case diff < 1000 * 60 * 60:
      return `${Math.round(diff / 1000 / 60)} minute${Math.round(diff / 1000 / 60) !== 1 ? "s" : ""} ago`;
    case diff < 1000 * 60 * 60 * 60:
      return `${Math.round(diff / 1000 / 60 / 60)} hour${Math.round(diff / 1000 / 60 / 60) !== 1 ? "s" : ""} ago`;
    case diff < 1000 * 60 * 60 * 60 * 24:
      return `${Math.round(diff / 1000 / 60 / 60 / 24)} day${Math.round(diff / 1000 / 60 / 60 / 24) !== 1 ? "s" : ""} ago`;
    case diff < 1000 * 60 * 60 * 60 * 24 * 7:
      return `${Math.round(diff / 1000 / 60 / 60 / 24 / 7)} week${Math.round(diff / 1000 / 60 / 60 / 24 / 7) !== 1 ? "s" : ""} ago`;
    case diff < 1000 * 60 * 60 * 60 * 24 * 7 * 4:
      return `${Math.round(diff / 1000 / 60 / 60 / 24 / 7 / 4)} month${Math.round(diff / 1000 / 60 / 60 / 24 / 7 / 4) !== 1 ? "s" : ""} ago`;
    default:
      return diff;
  }
}

export function fireTime() {
  return new Date()
}