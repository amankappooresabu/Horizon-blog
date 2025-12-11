
async function fetchBlog(id: string) {
  const res = await fetch(`https://69398ee9c8d59937aa084c6e.mockapi.io/api/horizon-blogs/Blogs/${id}`, {
    cache: 'no-store'
  })
  if (!res.ok) throw new Error('Failed to fetch blog')
  return res.json()
}

export default async function BlogPost({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const blog = await fetchBlog(id)

  return (
    <div className="max-w-4xl mx-auto px-8 py-12">
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <span className="bg-blue-100 text-blue-600 px-4 py-1.5 rounded-full text-sm font-medium">
            {blog.category}
          </span>
          <span className="text-gray-500 text-sm">{blog.date}</span>
          <span className="text-gray-500 text-sm">• {blog.readTime}</span>
        </div>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {blog.title}
        </h1>
        
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span className="font-medium">{blog.authorName}</span>
        </div>
      </div>

      <div className="mb-8">
        <img 
          src={blog.image} 
          alt={blog.title}
          className="w-full h-[500px] object-cover rounded-2xl"
        />
      </div>

      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 text-lg leading-relaxed">
          {blog.description}
        </p>
      </div>
    </div>
  )
}