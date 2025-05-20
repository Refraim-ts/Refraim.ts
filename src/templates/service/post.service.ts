let posts = [
  {
    id: '1',
    title: 'Hello from Refraim',
    category: 'structure',
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    title: 'Structure is beautiful',
    category: 'philosophy',
    createdAt: new Date(Date.now() - 1000 * 60 * 60).toISOString(),
  },
  {
    id: '3',
    title: 'Type safety is freedom',
    category: 'type',
    createdAt: new Date(Date.now() - 1000 * 60 * 120).toISOString(),
  },
]

export function getPosts() {
  return posts
}

export function addPost(data: { title: string; category?: string }) {
  const post = {
    id: (posts.length + 1).toString(),
    title: data.title,
    category: data.category,
    createdAt: new Date().toISOString(),
  }
  posts = [post, ...posts]
  return post
}