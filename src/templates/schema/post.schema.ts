// schema/post.schema.ts
import { z } from 'zod'

export const postSchema = z.object({
  message: z.string(),
})