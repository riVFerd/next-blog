import React, {useEffect} from "react";
import Header from "@/components/Header";
import {useDispatch} from "react-redux";
import {fetchCategories, setCategories} from "@/store/categoriesSlice";

export default function Layout({ children }) {
    const dispatch = useDispatch();

    useEffect(() => {
        const loadData = async () => {
            dispatch(setCategories(await fetchCategories()));
        };
        loadData().then(res => console.log(res));
    }, [dispatch]);

    return (
        <div className="bg-primary-light dark:bg-primary-dark">
            <Header />
            <main>
                {children}
            </main>
        </div>
    )
}