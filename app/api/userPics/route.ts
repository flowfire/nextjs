
export const dynamic = 'force-dynamic' // defaults to auto

interface Post {
  url: string,
  like: number,
  comment: number,
  canCopy: boolean,
}
export async function POST(request: Request) {
  const body = await request.json();

  
  const initPost: (i: number) => Post = (i) => {
    return {
      url: "https://picsum.photos/id/2" + body.page + i +"/316/316",
      like: Math.round((Math.random() * 1000)),
      comment: Math.round((Math.random() * 100)),
      canCopy: Math.random() >= 0.5,
    }
  }
  let posts: Post[] = [];
  for (let i = 0; i < 9; i++) {
    posts.push(initPost(i))
  }

  return new Response(JSON.stringify({
    total: Math.round(Math.random() * 10000 + 10000),
    currentPage: body.page,
    isEnd: false,
    posts: posts,
  }), {
    status: 200,
  })
}