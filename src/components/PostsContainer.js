import PostCard from "@/components/PostCard";
import PropTypes from "prop-types";
import {useEffect, useState} from "react";

export default function PostsContainer({postList, baseUrl}) {
    const posts = postList;
    const [pageIndex, setPageIndex] = useState(1);
    const [isLastPage, setIsLastPage] = useState(false);

    const loadMorePost = async () => {
        const newPosts = await fetch(`${baseUrl}&page=${pageIndex}`).then((res) => res.json());
        if (newPosts.length === 0) setIsLastPage(true);
        posts.push(...newPosts);
        setPageIndex(pageIndex + 1);
    }

    useEffect(() => {
        setIsLastPage(posts.length === 0);
    }, [posts]);

    return (
        <>
            <div id="posts-container"
                 className="flex flex-wrap justify-center items-center gap-4 dark:text-primary-light">
                {
                    (postList.length === 0)
                        ? <h1 className="text-2xl font-bold">Data not found</h1>
                        : postList.map((post) => (<PostCard key={post.slug.current} post={post}/>))
                }
            </div>
            {
                !isLastPage &&
                <button
                    id="load-more-button"
                    className="px-4 py-2 bg-accent-blue text-primary-light rounded my-4 w-fit font-bold hover:scale-95"
                    onClick={loadMorePost}>
                    Load More
                </button>
            }
        </>
    )
}

PostsContainer.prototype = {
    postList: PropTypes.array.isRequired,
    baseUrl: PropTypes.string.isRequired,
}