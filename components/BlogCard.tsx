import Link from "next/link"


interface BlogCardProps {
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

export default function BlogCard({
    id,
    image,
    category,
    date,
    readTime,
    title,
    description,
    authorImage,
    authorName
}: BlogCardProps) {
    return (
        <Link href={`/blog/${id}`}>
        <div className=" cursor-pointer">
            <div className="relative h-78 w-full rounded-lg overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />
                <span className="absolute top-3 left-3 bg-black/20  text-white/80 px-3 py-1 rounded-full font-medium text-sm">
                    {category}
                </span>
            </div>

            <div className="py-4 flex flex-col gap-3">
                <div className="flex items-center gap-3 text-md flex-wrap">
                    <span className="text-gray-500">{date}</span>
                    <span className="text-gray-500">• {readTime}</span>
                </div>

                <h3 className="text-3xl font-semibold text-gray-800 line-clamp-2 hover:text-blue-600 transition-colors">
                    {title}
                </h3>

                <p className="text-gray-600 line-clamp-2 text-md leading-relaxed leading-0">
                    {description}
                </p>

                <div className="flex items-center gap-2  ">
                    <img
                        src={authorImage}
                        alt={authorName}
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <span className="text-md font-medium text-gray-700">
                        {authorName}
                    </span>
                </div>
            </div>
        </div>
        </Link>
    )
}