'use client'

import { Card, CardHeader, CardContent } from '../components/ui/card'
import { motion } from 'framer-motion'

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-4">
      <motion.div
        className="w-full max-w-md"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Card>
          <CardHeader>
            <h1 className="text-2xl font-bold">🎉 Hello, Refraim</h1>
            <p className="text-sm text-muted-foreground">
              A fullstack framework where structure is the engine.
            </p>
          </CardHeader>
          <CardContent className="space-y-2">
            <ul className="list-disc pl-4 text-sm">
              <li>Typed API with Zod + Zodios</li>
              <li>Controller / Service structure</li>
              <li>Cloudflare Edge ready</li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>
    </main>
  )
}