// src/pages/post/index.loader.ts
export async function loader() {
  const res = await fetch('/api/posts')
  return { posts: await res.json() }
}