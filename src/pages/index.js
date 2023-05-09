import FeaturedCard from "@/components/FeaturedCard";
import getClient from "@/utils/connection";
import Image from "next/image";
import Link from "next/link";
import {register} from 'swiper/element/bundle';
import {useEffect} from "react";

export async function getServerSideProps() {
    const featuredPost = await getClient().fetch('*[featured==true&&featured==true]{title,slug,author,category,content,"imageUrl": thumbnail.asset->url}');
    const postList = await getClient().fetch('*[_type=="post"&&featured==false]{title,slug,category,content,"imageUrl": thumbnail.asset->url,author->{nickname}}');

    featuredPost.map((post) => {
        console.log(post)
    });

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
        <section className="flex flex-col items-center min-h-screen">
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
                    postList.map((post, index) => (
                        <Link key={index} href={`/post/${post.slug.current}`}
                              className="transition-all lg:hover:scale-105">
                            <div
                                className="flex justify-center bg-white rounded-md overflow-hidden w-96 h-28 dark:bg-secondary-dark">
                                <div className="w-1/2">
                                    <Image src={post.imageUrl} className="object-cover rounded-l w-full h-full"
                                           width="360" height="320" alt="post-img"/>
                                </div>
                                <div className="flex flex-col justify-between w-1/2 px-2 py-1">
                                    <h1 className="text-sm font-bold h-3/4">{post.title}</h1>
                                    <h1 className="text-xs font-bold text-end text-accent-blue">by {post.author.nickname}</h1>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </section>
    )
}
