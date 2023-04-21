import Header from "@/components/Header";

export default function Layout({ children }) {
    return (
        <div className="">
            <Header />
            <main>
                {children}
            </main>
        </div>
    )
}