export function getPosts() {
  console.log(getPosts.toString())
  return [
    {
      id: '1',
      title: 'Hello from Refraim',
      createdAt: new Date().toISOString(),
      category: 'structure',
    },
    {
      id: '2',
      title: 'Structure is beautiful',
      createdAt: new Date(Date.now() - 1000 * 60 * 60).toISOString(),
      category: 'philosophy',
    },
    {
      id: '3',
      title: 'Type safety is freedom',
      createdAt: new Date(Date.now() - 1000 * 60 * 120).toISOString(),
      category: 'type',
    },
  ]
}