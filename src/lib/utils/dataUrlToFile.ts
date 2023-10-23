export default async function dataUrltoFile(dataUrl: string, filename: string, type: string) {
  const res = await fetch(dataUrl);
  const blob = await res.blob();
  return new File([blob], filename, { type });
}
