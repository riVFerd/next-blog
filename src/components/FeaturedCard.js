import Image from "next/image";
import PropTypes from "prop-types";
import Link from "next/link";

export default function FeaturedCard({post, className}) {

    return (
        <Link href={`/post/${post.slug.current}`}>
            <div id="featured" className={`flex flex-col justify-center items-center px-10 py-6 text-center dark:text-primary-light ${className}`}>
                <Image src={post.imageUrl} alt="featured-img" width="360" height="180" className="rounded-lg"/>
                <h1 className="text-lg font-bold mt-2">{post.title}</h1>
            </div>
        </Link>
    )
}

FeaturedCard.prototype = {
    post: PropTypes.object.isRequired
}