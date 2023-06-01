import getClient from "@/utils/connection";

export default async function handler(req, res) {
    const postList = await getClient().fetch(
        `*[
            _type=="post"
            ${req.query.hasOwnProperty('unfeatured') ? '&&featured==false' : ''}
            ${req.query.hasOwnProperty('featured') ? '&&featured==true' : ''}
            ${req.query['category'] ? `&&category->slug.current =="${req.query['category']}"` : ''}
            ${req.query['key'] ? `&&title match "${req.query['key']}"` : ''}
         ]{
            publishedAt,title,slug,category,content,"imageUrl": thumbnail.asset->url,author->{nickname}
        }`
    );
    res.status(200).json(postList);
}