import Layout from "@/components/Layout";
import FeaturedCard from "@/components/FeaturedCard";

export default function Home() {
    // Under development, change content later
    return (
        <Layout>
            <section className="flex flex-col min-h-screen">
                <FeaturedCard />
            </section>
        </Layout>
    )
}
