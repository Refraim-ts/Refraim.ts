// controller/post.controller.ts
import { Hono } from 'hono'
import { getPosts } from '../service/post.service.ts' // ← 相対パス注意

const posts = new Hono()
posts.get('/posts', (c) => {
  const posts = getPosts()
  console.log('🔥 Controller sees posts:', posts)
  return c.json(posts)
})
export default posts