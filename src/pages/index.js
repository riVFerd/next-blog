import FeaturedCard from "@/components/FeaturedCard";
import {register} from 'swiper/element/bundle';
import {useEffect} from "react";
import getBaseUrl from "@/utils/getBaseUrl";
import PostsContainer from "@/components/PostsContainer";

const PAGE_SIZE = 6;
const POST_API_URL = `/api/postList?unfeatured&pageSize=${PAGE_SIZE}`;

export async function getServerSideProps({ req }) {
    const baseUrl = getBaseUrl(req);
    const featuredPost = await fetch(`${baseUrl}/api/postList?featured`).then((res) => res.json());
    const postList = await fetch(`${baseUrl}${POST_API_URL}`).then((res) => res.json());

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
            <PostsContainer postList={postList} baseUrl={POST_API_URL} pageSize={PAGE_SIZE}/>
        </section>
    )
}
