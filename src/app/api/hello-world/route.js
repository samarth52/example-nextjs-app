// app/api/hello-world/route.js
export async function GET(request) {
  return new Response(
    JSON.stringify({ message: 'Hello World from the API!' }),
    { status: 200 }
  );
}