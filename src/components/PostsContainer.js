import PostCard from "@/components/PostCard";
import PropTypes from "prop-types";
import {useEffect, useState} from "react";
import {Skeleton} from "@/components/helper/Skeleton";

export default function PostsContainer({postList, baseUrl, pageSize}) {
    const posts = postList;
    const [pageIndex, setPageIndex] = useState(1);
    const [isLastPage, setIsLastPage] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const loadMorePost = async () => {
        if (isLoading) return; // Prevent multiple request
        setIsLoading(true);
        const newPosts = await fetch(`${baseUrl}&page=${pageIndex}`).then((res) => res.json());
        if (newPosts.length < pageSize) setIsLastPage(true);
        posts.push(...newPosts);
        setPageIndex(pageIndex + 1);
        setIsLoading(false);
    }

    useEffect(() => {
        setPageIndex(1);
        setIsLastPage(posts.length < pageSize);
    }, [pageSize, posts]);

    return (
        <>
            <div id="posts-container"
                 className="flex flex-wrap justify-center items-center gap-4 dark:text-primary-light">
                {
                    (postList.length === 0)
                        ? <h1 className="text-2xl font-bold">Data not found</h1>
                        : postList.map((post) => (<PostCard key={post.slug.current} post={post}/>))
                }
                {
                    isLoading &&
                    Array(pageSize).fill('').map((_, index) => (
                        <div
                            key={index}
                            className="flex justify-center bg-white rounded-md overflow-hidden w-96 h-28 p-2 dark:bg-secondary-dark">
                            <Skeleton className="w-1/2"/>
                            <div className="flex flex-col justify-between w-1/2 pl-2">
                                <Skeleton className="h-3/4 overflow-hidden"></Skeleton>
                                <div className="flex justify-between">
                                    <Skeleton className="w-16 h-4"></Skeleton>
                                    <Skeleton className="w-16 h-4"></Skeleton>
                                </div>
                            </div>
                        </div>
                    ))
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
    pageSize: PropTypes.number.isRequired
}