// pages/post/index.page.tsx ← 試験的に書き換え

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { loader as fetchPosts } from './index.loader'

type Post = { id: string; title: string }

export default function PostPage() {
  const [posts, setPosts] = useState<Post[] | null>(null)

  useEffect(() => {
    fetchPosts().then((data) => setPosts(data.posts))
  }, [])

  if (!posts) return <p>Loading...</p>

  return (
    <div className="p-6 max-w-xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold">📝 Your Posts</h1>
      <motion.ul
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
        className="space-y-2"
      >
        {posts.map((p) => (
          <motion.li
            key={p.id}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            className="border p-3 rounded bg-white shadow-sm"
          >
            {p.title}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  )
}