import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '../../src/components/ui/card.tsx'
import { loader as fetchPosts } from './index.loader'

type Post = { id: string; title: string }

export default function PostPage() {
  const [posts, setPosts] = useState<Post[] | null>(null)

  useEffect(() => {
    fetchPosts().then((data) => setPosts(data.posts))
  }, [])

  if (!posts) return <p className="text-center text-muted-foreground">Loading posts...</p>

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">📝 Your Posts</h1>
        {/* ← 将来的に /posts/new ボタンもここに */}
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
        className="grid gap-4 sm:grid-cols-2"
      >
        {posts.map((p) => (
          <motion.div
            key={p.id}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Card className="hover:shadow-md transition-all">
              <CardHeader>
                <CardTitle>{p.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                ID: {p.id}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}