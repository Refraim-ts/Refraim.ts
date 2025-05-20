import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '../../src/components/ui/card.tsx'
import { Input } from '../../src/components/ui/input'
import { Label } from '../../src/components/ui/label'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '../../src/components/ui/select'
import { Button } from '../../src/components/ui/button.tsx'
import { z } from 'zod'

const schema = z.object({
  title: z.string().min(1, 'Title is required'),
  category: z.enum(['structure', 'type', 'philosophy']).optional(),
})

export default function NewPostPage() {
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState<'structure' | 'type' | 'philosophy' | undefined>()
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async () => {
    const result = schema.safeParse({ title, category })
    if (!result.success) {
      setError(result.error.errors[0].message)
      return
    }

    const res = await fetch('/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(result.data),
    })

    if (res.ok) {
      navigate('/posts')
    } else {
      setError('Failed to create post')
    }
  }

  return (
    <div className="p-6 max-w-xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Create a New Post</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label>Title</Label>
            <Input value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div>
            <Label>Category</Label>
            <Select value={category} onValueChange={(val) => setCategory(val as any)}>
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="structure">Structure</SelectItem>
                <SelectItem value="type">Type</SelectItem>
                <SelectItem value="philosophy">Philosophy</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <Button onClick={handleSubmit} className="w-full">Submit</Button>
        </CardContent>
      </Card>
    </div>
  )
}