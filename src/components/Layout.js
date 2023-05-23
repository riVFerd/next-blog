import React, {useEffect} from "react";
import Header from "@/components/Header";
import {useDispatch} from "react-redux";
import {fetchCategories, setCategories} from "@/store/categoriesSlice";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";

export default function Layout({ children }) {
    const dispatch = useDispatch();

    useEffect(() => {
        const loadData = async () => {
            dispatch(setCategories(await fetchCategories()));
        };
        loadData().then();
    }, [dispatch]);

    return (
        <div className="bg-primary-light dark:bg-primary-dark flex flex-col min-h-screen">
            <Header />
            <main className="flex-auto flex flex-col items-center justify-center py-4">
                {children}
            </main>
            <Footer />
            <ScrollToTop />
        </div>
    )
}