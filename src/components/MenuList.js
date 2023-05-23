import PropTypes from "prop-types";
import Link from "next/link";
import {MdArrowDropDown} from "react-icons/md";
import {useState} from "react";

export default function MenuList({state, setState, categories}) {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <div id="menu-list" className={
            "absolute top-0 left-0 mt-14 rounded-b-lg bg-white w-full z-40 transition-all duration-300 overflow-hidden dark:bg-secondary-dark "
            + (state ? "max-h-screen" : "max-h-0 lg:max-h-screen lg:static lg:w-auto lg:mt-0"
            )}>
            <ul className="select-none p-4 font-bold text-primary-dark dark:text-primary-light">
                <li className="lg:hidden"><Link href='/' onClick={setState.bind(this, false)}>Home</Link></li>
                <li className="flex items-center justify-between lg:inline-flex" onClick={setIsDropdownOpen.bind(this, !isDropdownOpen)}>
                    <p>Categories</p>
                    <MdArrowDropDown className={`text-3xl transition-all ${isDropdownOpen || 'rotate-180'}`}/>
                </li>
                <ul className={`flex flex-col gap-1 transition-all px-4 ${isDropdownOpen || 'hidden'} lg:absolute lg:bg-white lg:p-0 lg:rounded-b-xl dark:lg:bg-secondary-dark`}>
                    {
                        categories.map((category) =>
                            <li key={category.id} className="hover:bg-primary-light dark:hover:bg-primary-dark lg:px-4 lg:py-2">
                                <Link href={`/post/category/${category.name}`} onClick={setState.bind(this, false)}>{category.name}</Link>
                            </li>
                    )}
                </ul>
            </ul>
        </div>
    )
}

MenuList.prototype = {
    state: PropTypes.bool.isRequired,
    setState: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired
}