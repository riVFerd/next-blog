import PropTypes from "prop-types";
import {useEffect, useRef} from "react";
import {useRouter} from "next/navigation";

export default function SearchBar({state}) {
    const router = useRouter();
    const searchInputRef = useRef(null);

    const handleSearch = (event) => {
        if (event.key === "Enter") {
            (event.target.value === '') ? router.push(`/`) : router.push(`/search/${event.target.value}`);
        }
    }

    useEffect(() => {
        const searchInput = searchInputRef.current;
        if (searchInput) searchInput.addEventListener("keyup", handleSearch);

        return () => {
            if (searchInput) searchInput.removeEventListener("keyup", handleSearch);
        }
    });

    return (
        <div
            id="search-bar"
            className={`transition-all rounded-full duration-300 w-full z-30 ${state ? "fixed top-0 px-2 h-12 mt-2" : "h-16 px-8 pt-4"}`}
        >
            <input
                type="text" ref={searchInputRef}
                className="w-full px-4 py-2 border-gray-400 rounded-full h-full dark:bg-secondary-dark"
                placeholder="Search"
            />
        </div>
    )
}

SearchBar.prototype = {
    state: PropTypes.bool.isRequired
}