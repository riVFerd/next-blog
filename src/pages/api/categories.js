import getClient from "@/utils/connection";

export default async function handler(req, res) {
    const categories = await getClient().fetch(`*[_type == "category"]`);
    res.status(200).json(categories);
}