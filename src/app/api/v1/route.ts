export async function GET(request: Request) {
  return new Response("v1 route", {
    status: 200,
  });
}
