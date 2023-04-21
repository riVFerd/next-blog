import {useEffect, useState} from "react";
import MenuIcon from "@/components/MenuIcon";
import MenuList from "@/components/MenuList";
import Link from "next/link";
import Image from "next/image";
import logoPic from "@/../public/rivferd.png";

export default function Header() {
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
        <header className="flex flex-col z-50">
            <nav className="relative flex justify-between items-center bg-primary-light h-16 rounded-b-lg">
                <div className="flex items-center mx-2">
                    <Image src={logoPic} alt="blog logo" width="48"/>
                    <Link href="/" className="text-xl font-bold text-primary-dark">riVFerd</Link>
                </div>
                <MenuList state={isMenuOpen}/>
                <MenuIcon state={isMenuOpen} setState={setIsMenuOpen} className="bg-primary-dark"/>
            </nav>
            <div
                id="search-bar"
                className={`transition-all duration-300 pt-4 px-8 w-full h-16 z-30 ${isSearchBarFixed && "fixed top-0 pt-0 px-2 h-12 rounded-full mt-2"}`}
            >
                <input
                    type="text"
                    className="w-full px-4 py-2 border-gray-400 rounded-full h-full"
                    placeholder="Search"
                />
            </div>
        </header>
    );
}
