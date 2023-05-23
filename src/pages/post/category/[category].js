import PostCard from "@/components/PostCard";
import getClient from "@/utils/connection";

export async function getServerSideProps({params}) {
    const posts = await getClient().fetch('*[_type=="post"&&category->name =="' + params.category + '"]{publishedAt,title,slug,category,content,"imageUrl": thumbnail.asset->url,author->{nickname}}');

    return {
        props: {
            posts: posts
        }
    }
}

export default function Category({ posts }) {
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