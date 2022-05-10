export function daysBetween(now: Date, before: Date): number {
  return Math.floor((now.getTime() - before.getTime()) / (1000 * 60 * 60 * 24));
}

export function pluralise(s: string, count: number): string {
  if (count !== 1) {
    return s + "s";
  }
  return s;
}