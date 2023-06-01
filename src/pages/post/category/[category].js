import PostCard from "@/components/PostCard";
import getBaseUrl from "@/utils/getBaseUrl";

export async function getServerSideProps({req, params}) {
    const posts = await fetch(`${getBaseUrl(req)}/api/postList?category=${params.category}`).then((res) => res.json());

    return {
        props: {
            posts: posts
        }
    }
}

export default function Category({posts}) {
    return (
        <div id="posts-container"
             className="flex flex-wrap justify-center items-center gap-4 dark:text-primary-light">
            {
                (posts.length === 0)
                    ? <h1 className="text-2xl font-bold">Data not found</h1>
                    : posts.map((post) => (<PostCard key={post.slug} post={post}/>))
            }
        </div>
    )
}