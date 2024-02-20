
export const dynamic = 'force-dynamic' // defaults to auto
export async function GET(request: Request) {
  return new Response(JSON.stringify({
    userName: "test_user_random_id_" + Math.round(Math.random() * 10000 + 10000),
    userIcon: "https://picsum.photos/id/111/200/200",
    postsCount: Math.round(Math.random() * 10000 + 10000),
  }), {
    status: 200,
  })
}