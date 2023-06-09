import getBaseUrl from "@/utils/getBaseUrl";
import PostsContainer from "@/components/PostsContainer";

const PAGE_SIZE = 6;
const POST_API_URL = `/api/postList?pageSize=${PAGE_SIZE}`;

export async function getServerSideProps({req, params}) {
    const posts = await fetch(`${getBaseUrl(req)}${POST_API_URL}&category=${params.category}`).then((res) => res.json());

    return {
        props: {
            posts: posts,
            params: params
        }
    }
}

export default function Category({posts, params}) {
    return (
        <PostsContainer postList={posts} baseUrl={`${POST_API_URL}&category=${params.category}`} pageSize={PAGE_SIZE}/>
    )
}