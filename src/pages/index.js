import FeaturedCard from "@/components/FeaturedCard";
import getClient from "@/utils/connection";
import Image from "next/image";

export async function getServerSideProps() {
    const featuredPost = await getClient().fetch('*[featured==true&&featured==true]{title,slug,author,category,content,"imageUrl": thumbnail.asset->url}');
    const postList = await getClient().fetch('*[_type=="post"&&featured==false]{title,slug,author,category,content,"imageUrl": thumbnail.asset->url}');

    return {
        props: {
            featuredPost: featuredPost[0],
            postList: postList,
        }
    }
}

export default function Home({featuredPost, postList}) {

    return (
        <section className="flex flex-col min-h-screen">
            <FeaturedCard post={featuredPost}/>
            <div id="posts-container"
                 className="flex flex-wrap justify-center items-center gap-4 mx-4 mb-4 dark:text-primary-light">
                {
                    postList.map((post, index) => (
                        <div key={index} className="flex justify-center bg-white rounded-md overflow-hidden w-96 h-28 dark:bg-secondary-dark">
                            <span className="w-1/2">
                                <Image src={post.imageUrl} className="object-cover rounded-l w-full h-full" width="360" height="320" alt="post-img"/>
                            </span>
                            <span className="w-1/2 p-2">
                                <h1 className="text-sm font-bold">{post.title}</h1>
                            </span>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
