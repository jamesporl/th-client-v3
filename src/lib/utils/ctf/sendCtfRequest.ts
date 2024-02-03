const spaceId = process.env.NEXT_PUBLIC_CTF_SPACE_ID;
const envId = process.env.NEXT_PUBLIC_CTF_ENV_ID;
const token = process.env.NEXT_PUBLIC_CTF_ACCESS_TOKEN_DELIVERY;

export default async function sendCtfRequest<RespType>(
  endpoint: string,
  revalidate: number,
  searchParams?: { [key: string]: string },
): Promise<RespType> {
  let ctfUrl = `https://cdn.contentful.com/spaces/${spaceId}/environments/${envId}${endpoint}`;
  if (searchParams) {
    const searchParamsStr = new URLSearchParams(searchParams).toString();
    ctfUrl = `${ctfUrl}?${searchParamsStr}`;
  }

  const resp = await fetch(
    ctfUrl,
    {
      headers: { authorization: `Bearer ${token}` },
      next: { revalidate },
    },
  );
  const jsonResp = await resp.json();
  return jsonResp;
}
