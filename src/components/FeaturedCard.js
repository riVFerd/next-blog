import Image from "next/image";

export default function FeaturedCard() {

    return (
        <div id="featured" className="flex flex-col justify-center items-center p-8 text-center dark:text-primary-light">
            <Image src="https://source.unsplash.com/720x480/?{tech}" alt="featured-img" width="360" height="360" className="rounded-lg"/>
            <h1 className="text-4xl font-bold mt-4">Featured News</h1>
            <p className="text-lg mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
        </div>
    )
}