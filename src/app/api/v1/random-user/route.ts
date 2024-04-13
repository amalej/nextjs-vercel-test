export async function GET(request: Request) {
  const res = await fetch("https://randomuser.me/api/");
  const text = await res.text();
  const json = JSON.parse(text);
  return Response.json(json);
}
