export default function displayNumber(num: number): string {
  if (num < 1000) {
    return num.toString();
  }
  if (num < 1000000) {
    const k = Math.floor(num / 1000);
    return `${k}K`;
  }
  const m = Math.floor(num / 1000000);
  return `${m.toLocaleString()}M`;
}
