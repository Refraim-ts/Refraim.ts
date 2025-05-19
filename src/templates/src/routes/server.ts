import { Hono } from 'hono'
import posts from '../../controller/post.controller.ts'

const app = new Hono()

// /api/posts に対応
app.route('/api', posts)

export default app