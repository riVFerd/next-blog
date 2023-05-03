import getClient from "@/utils/connection";
import Image from "next/image";

export async function getServerSideProps({params}) {
    const post = await getClient().fetch('*[slug.current=="' + params.slug + '"]{title,slug,author,category,content,"imageUrl": thumbnail.asset->url}');

    console.log(post[0]);

    return {
        props: {
            post: post[0]
        }
    }
}

export default function BlogPost({post}) {
    return (
        <div className="flex flex-col items-center gap-4 p-4 dark:text-primary-light">
            <h1 className="font-bold text-xl text-center">{post.title}</h1>
            <Image src={post.imageUrl} alt="post-image" width="360" height="360"/>
        </div>
    )
}