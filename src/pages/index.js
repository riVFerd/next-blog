import FeaturedCard from "@/components/FeaturedCard";
import getClient from "@/utils/connection";
import {register} from 'swiper/element/bundle';
import {useEffect} from "react";
import PostCard from "@/components/PostCard";

export async function getServerSideProps() {
    const featuredPost = await getClient().fetch('*[featured==true&&featured==true]{title,slug,author,category,content,"imageUrl": thumbnail.asset->url}');
    const postList = await getClient().fetch('*[_type=="post"&&featured==false]{publishedAt,title,slug,category,content,"imageUrl": thumbnail.asset->url,author->{nickname}}');

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
