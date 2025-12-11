import Home from '../components/Home'

async function fetchBlogs() {
  const res = await fetch('https://69398ee9c8d59937aa084c6e.mockapi.io/api/horizon-blogs/Blogs', {
    cache: 'no-store'
  })
  if (!res.ok) throw new Error('Failed to fetch')
  return res.json()
}

export default async function Main() {
  const blogs = await fetchBlogs() 

  return <Home blogs={blogs} /> 
}