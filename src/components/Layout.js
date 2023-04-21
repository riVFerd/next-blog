import Header from "@/components/Header";

export default function Layout({ children }) {
    return (
        <div className="bg-primary-light dark:bg-primary-dark">
            <Header />
            <main>
                {children}
            </main>
        </div>
    )
}