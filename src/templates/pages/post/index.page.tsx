import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '../../src/components/ui/card.tsx'
import { loader as fetchPosts } from './index.loader'
import { useNavigate } from 'react-router-dom'
import { Badge } from '../../src/components/ui/badge.tsx'

type Post = {
  id: string
  title: string
  createdAt?: string
  category?: 'structure' | 'type' | 'philosophy'
}

export default function PostPage() {
  const [posts, setPosts] = useState<Post[] | null>(null)
  const navigate = useNavigate()

  useEffect(() => {
    fetchPosts().then((data) => {
      console.log('Fetched posts:', data.posts) // ✅ 全体ログ確認
      setPosts(data.posts)
    })
  }, [])

  if (!posts) {
    return <p className="text-center text-muted-foreground mt-10">Loading posts...</p>
  }

  return (
    <div className="px-4 py-10 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">📝 Your Posts</h1>
        <button
          onClick={() => navigate('/posts/new')}
          className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition w-full sm:w-auto"
        >
          ＋ New Post
        </button>
      </div>

      {/* Posts Grid */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
        className="grid gap-6 sm:grid-cols-2 md:grid-cols-3"
      >
        {posts.map((p) => {
          const parsedDate = new Date(p.createdAt ?? '')
          const isValidDate = !isNaN(parsedDate.getTime())



          return (
            <motion.div
              key={p.id}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Card className="hover:shadow-lg transition-all h-full">
                <CardHeader>
                  <CardTitle className="flex justify-between items-center text-lg font-semibold">
                    <span>{p.title}</span>
                    {p.category && (
                      <Badge variant="outline" className="ml-5 capitalize text-sm">
                        {p.category}
                      </Badge>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-xs text-muted-foreground space-y-2 py-3">
                  <p>ID: {p.id}</p>
                  <p>
                    Created:{' '}
                    {isValidDate
                      ? parsedDate.toLocaleString()
                      : '—'}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}