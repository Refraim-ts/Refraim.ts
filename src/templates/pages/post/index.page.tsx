// pages/post/index.page.tsx
import { usePageData } from '../../hooks/usePageData.ts'

type Post = { id: string; title: string }

export default function PostPage() {
  const { posts } = usePageData<{ posts: Post[] }>()

  return (
    <div className="space-y-2 p-4">
      {posts.map((p) => (
        <div key={p.id} className="p-2 border rounded">
          {p.title}
        </div>
      ))}
    </div>
  )
}