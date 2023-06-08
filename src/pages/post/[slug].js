import getClient from "@/utils/connection";
import Image from "next/image";
import {PortableText} from "@portabletext/react";
import {useState} from "react";
import SanityImage from "@/components/helper/SanityImage";

const component = {
    marks: {
        link: ({children, value}) => (
            <a href={value.href} className="text-blue-500 cursor-pointer hover:underline" target="_blank">
                {children}
            </a>
        ),
    },
    types: {
        image: ({value}) => {
            return (
                <SanityImage {...value} />
            );
        },
    },
}

export async function getServerSideProps({params}) {
    const post = await getClient().fetch('*[slug.current=="' + params.slug + '"]{title,slug,author,category,content,"imageUrl": thumbnail.asset->url}');

    return {
        props: {
            post: post[0],
        }
    }
}

export default function BlogPost({post}) {

    const [isCommentVisible, setIsCommentVisible] = useState(false);

    const openComment = () => {
        let disqus_config = function () {
            this.page.url = '/post/';
            this.page.identifier = post.slug;
        };
        let d = document, s = d.createElement('script');
        s.src = 'https://rivferd.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
        if (!isCommentVisible) setIsCommentVisible(true);
    }

    return (
        <div className="flex flex-col items-center gap-4 dark:text-primary-light w-full">
            <h1 className="font-bold text-xl text-center px-2 md:w-1/2 md:px-0">{post.title}</h1>
            <Image src={post.imageUrl} className="px-4 md:px-0" alt="post-image" width="360" height="360"/>
            <article id="article" className="w-full overflow-hidden md:w-1/2">
                <PortableText value={post.content} components={component}/>
            </article>
            <div className="container flex flex-col items-center text-primary-light p-4">
                {
                    isCommentVisible
                        ? <button className="px-4 py-2 bg-accent-blue rounded my-4 w-fit font-bold"
                                  onClick={openComment}>Refresh Comment</button>
                        : <button className="px-4 py-2 bg-accent-blue rounded my-4 w-fit font-bold"
                                  onClick={openComment}>Show Comment</button>
                }
                <div id="disqus_thread" className="w-full md:w-1/2">

                </div>
            </div>
        </div>
    )
}