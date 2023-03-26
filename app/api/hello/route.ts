export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id: string = searchParams.get('id') ?? 'friend';
  return new Response(`Hello, ${id}!`, {
    headers: {
      'Server': 'FeatherFlow 1.12.3',
    }
  })
}
