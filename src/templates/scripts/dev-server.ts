import { serve } from '@hono/node-server'
import app from '../src/routes/server.ts'

serve({ fetch: app.fetch, port: 8787 })

console.log('🟢 Refraim API server running on http://localhost:8787')