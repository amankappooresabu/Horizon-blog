"use client"
import { useState } from 'react'
import BlogCard from './BlogCard'

interface Blog {
  id: string
  image: string
  category: string
  date: string
  readTime: string
  title: string
  description: string
  authorImage: string
  authorName: string
}

interface Section2BlogProps {
  blogs: Blog[]
  searchQuery: string
}

export default function Section2Blog({ blogs, searchQuery }: Section2BlogProps) {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('Newest')

  const categories = ['All', 'Destination', 'Culinary', 'Lifestyle', 'Tips & Hacks']

  const filteredBlogs = blogs?.filter(blog => {
    const matchesCategory = selectedCategory === 'All' ? true : blog.category === selectedCategory
    const matchesSearch = searchQuery === '' ? true : 
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.authorName.toLowerCase().includes(searchQuery.toLowerCase())
    
    return matchesCategory && matchesSearch
  })

  return (
    <div className="p-7">
      <div className="flex flex-col gap-2 xl:gap-5">
        <h1 className="text-3xl xl:text-5xl font-semibold">Blog</h1>
        <p className="text-black/60 text-lg xl:text-2xl">
          Here, we share travel tips, destination guides, and stories that inspire your next adventure.
        </p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-3 md:gap-0 md:items-center justify-between mt-8 mb-6">
        <div className="flex items-center gap-2 md:gap-4 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 text-sm sm:text-md md:text-lg lg:text-xl font-medium rounded-lg transition-colors ${
                selectedCategory === category
                  ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  : ''
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="flex items-center gap-3">
          <span className="text-gray-600 font-medium">Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="py-2 font-medium border border-gray-300 rounded-lg bg-white cursor-pointer text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>Newest</option>
            <option>Oldest</option>
            <option>Most Popular</option>
          </select>
        </div>
      </div>

      <div className="mt-10">
        {filteredBlogs.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-xl text-gray-500">No blogs found matching your search.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
              <BlogCard key={blog.id} {...blog} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}