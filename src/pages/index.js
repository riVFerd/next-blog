import FeaturedCard from "@/components/FeaturedCard";
import {register} from 'swiper/element/bundle';
import {useEffect} from "react";
import PostCard from "@/components/PostCard";
import getBaseUrl from "@/utils/getBaseUrl";

export async function getServerSideProps({ req }) {
    const baseUrl = getBaseUrl(req);
    const featuredPost = await fetch(`${baseUrl}/api/postList?featured`).then((res) => res.json());
    const postList = await fetch(`${baseUrl}/api/postList?unfeatured`).then((res) => res.json());

    return {
        props: {
            featuredPost: featuredPost,
            postList: postList,
        }
    }
}

export default function Home({featuredPost, postList}) {

    useEffect(() => {
        register();
    }, [])

    return (
        <section className="flex flex-col items-center w-full">
            <div className="w-full md:w-1/2">
                <swiper-container loop="true" navigation="true" pagination="true">
                    {
                        featuredPost.map((post) => (
                            <swiper-slide key={post.slug.current}>
                                <FeaturedCard post={post} className="active:scale-95"/>
                            </swiper-slide>
                        ))
                    }
                </swiper-container>
            </div>
            <div id="posts-container"
                 className="flex flex-wrap justify-center items-center gap-4 mx-4 mb-4 dark:text-primary-light">
                {
                    postList.map((post) => (
                        <PostCard key={post.slug.current} post={post}/>
                    ))
                }
            </div>
        </section>
    )
}
