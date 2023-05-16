import PropTypes from "prop-types";
import Link from "next/link";
import {MdArrowDropDown} from "react-icons/md";
import {useState} from "react";

export default function MenuList({state, setState, categories}) {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <div id="menu-list" className={
            "absolute top-0 mt-14 rounded-b-lg bg-white w-full z-40 transition-all duration-300 overflow-hidden dark:bg-secondary-dark "
            + (state ? "max-h-screen" : "max-h-0"
            )}>
            <ul className="select-none p-4 font-bold text-primary-dark dark:text-primary-light">
                <li><Link href='/' onClick={setState.bind(this, false)}>Home</Link></li>
                <li className="flex items-center justify-between" onClick={setIsDropdownOpen.bind(this, !isDropdownOpen)}>
                    <p>Categories</p>
                    <MdArrowDropDown className={`text-3xl transition-all ${isDropdownOpen || 'rotate-180'}`}/>
                </li>
                <ul className={`flex flex-col gap-1 transition-all px-4 ${isDropdownOpen || 'hidden'}`}>
                    {
                        categories.map((category) =>
                            <li key={category.id}>
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