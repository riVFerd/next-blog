import getClient from "@/utils/connection";

export default async function handler(req, res) {
    const pageIndex = req.query['page'] ?? 0;
    const pageSize = req.query['pageSize'] ?? 3;
    const start = (pageIndex) * pageSize;
    const end = (+pageIndex + 1) * pageSize;
    const postList = await getClient().fetch(
        `*[
            _type=="post"
            ${req.query.hasOwnProperty('unfeatured') ? '&&featured==false' : ''}
            ${req.query.hasOwnProperty('featured') ? '&&featured==true' : ''}
            ${req.query['category'] ? `&&category->slug.current =="${req.query['category']}"` : ''}
            ${req.query['key'] ? `&&title match "${req.query['key']}"` : ''}
         ]{
            publishedAt,title,slug,category,"imageUrl": thumbnail.asset->url,author->{nickname},content
        } | order(publishedAt desc) 
        [${start}...${end}]`
    );
    res.status(200).json(postList);
}