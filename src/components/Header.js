import {useEffect, useState} from "react";
import MenuIcon from "@/components/MenuIcon";
import MenuList from "@/components/MenuList";
import Link from "next/link";
import Image from "next/image";
import logoPic from "@/../public/rivferd.png";
import ToggleDarkMode from "@/components/ToggleDarkMode";
import SearchBar from "@/components/SearchBar";
import {useSelector} from "react-redux";

export default function Header() {
    const categories = useSelector((state) => state.categories);

    const [isSearchBarFixed, setIsSearchBarFixed] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const nav = document.querySelector('nav');
            const isNavOffScreen = nav.getBoundingClientRect().bottom <= 0;
            setIsSearchBarFixed(isNavOffScreen);
            setIsMenuOpen(false);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={"flex flex-col z-50 bg-primary-light dark:text-primary-light dark:bg-primary-dark " + (!isSearchBarFixed || "mb-16")}>
            <nav className="relative flex justify-between items-center bg-white h-16 rounded-b-lg dark:bg-secondary-dark">
                <div className="flex items-center mx-2">
                    <Image src={logoPic} alt="blog logo" width="48"/>
                    <Link href="/" className="text-xl font-bold text-primary-dark dark:text-primary-light">riVFerd</Link>
                </div>
                <MenuList state={isMenuOpen} categories={categories} />
                <div className="flex items-center gap-4">
                    <ToggleDarkMode />
                    <MenuIcon state={isMenuOpen} setState={setIsMenuOpen} className="bg-primary-dark mr-2.5 dark:bg-primary-light" />
                </div>
            </nav>
            <SearchBar state={isSearchBarFixed} />
        </header>
    );
}
