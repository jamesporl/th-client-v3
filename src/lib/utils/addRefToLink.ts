export default function addRefToLink(urlStr: string) {
  const url = new URL(urlStr);
  url.searchParams.set('ref', 'techhustlersph');
  return url.toString();
}
