// pages/hello/index.page.tsx
import { usePageData } from '../../hooks/usePageData'

export default function HelloPage() {
  const data = usePageData<{ message: string }>()
  return <h1>{data.message}</h1>
}