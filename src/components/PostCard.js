import Image from "next/image";
import Link from "next/link";

export default function PostCard({post}) {

    return (
        <Link href={`/post/${post.slug.current}`}
              className="transition-all lg:hover:scale-105">
            <div
                className="flex justify-center bg-white rounded-md overflow-hidden w-96 h-28 dark:bg-secondary-dark">
                <div className="w-1/2">
                    <Image src={post.imageUrl} className="object-cover rounded-l w-full h-full"
                           width="360" height="320" alt="post-img"/>
                </div>
                <div className="flex flex-col justify-between w-1/2 px-2 py-1">
                    <h1 className="text-sm font-bold h-3/4 overflow-hidden">{post.title}</h1>
                    <div className="flex justify-between">
                        <h1 className="text-xs font-bold text-accent-blue">{new Date(post.publishedAt).toLocaleDateString()}</h1>
                        <h1 className="text-xs font-bold text-end text-accent-blue">by {post.author['nickname']}</h1>
                    </div>
                </div>
            </div>
        </Link>
    )
}