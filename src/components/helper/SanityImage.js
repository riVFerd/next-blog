import {useNextSanityImage} from "next-sanity-image";
import Image from "next/image";
import getClient from "@/utils/connection";

export default function SanityImage({ asset }) {
    const imageProps = useNextSanityImage(getClient(), asset);

    if (!imageProps) return null;

    return (<Image
        {...imageProps}
        alt={asset.alt}
        className="w-full p-4"
    />);
}