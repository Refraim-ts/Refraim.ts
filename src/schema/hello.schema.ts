// schema/hello.schema.ts
import { z } from 'zod'

export const helloSchema = z.object({
  message: z.string(),
})