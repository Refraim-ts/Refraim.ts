// controller/post.controller.ts
import { Hono } from 'hono'
import { z } from 'zod'
import { getPosts, addPost } from '../service/post.service.ts'
import { zValidator } from '@hono/zod-validator'

const posts = new Hono()

// GET /api/posts → 投稿一覧取得
posts.get('/posts', (c) => {
  const posts = getPosts()
  console.log('🔥 Controller sees posts:', posts)
  return c.json(posts)
})

// POST /api/posts → 新規投稿追加
posts.post(
  '/posts',
  zValidator(
    'json',
    z.object({
      title: z.string().min(1),
      category: z.enum(['structure', 'type', 'philosophy']).optional(),
    })
  ),
  async (c) => {
    const { title, category } = c.req.valid('json')
    const newPost = addPost({ title, category })
    console.log('🆕 New post added:', newPost)
    return c.json(newPost, 201)
  }
)

export default posts