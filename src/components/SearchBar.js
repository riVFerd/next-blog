import PropTypes from "prop-types";

export default function SearchBar({ state }) {
    return (
        <div
            id="search-bar"
            className={`transition-all rounded-full duration-300 w-full z-30 ${state ? "fixed top-0 px-2 h-12 mt-2" : "h-16 px-8 pt-4"}`}
        >
            <input
                type="text"
                className="w-full px-4 py-2 border-gray-400 rounded-full h-full dark:bg-secondary-dark"
                placeholder="Search"
            />
        </div>
    )
}

SearchBar.prototype = {
    state: PropTypes.bool.isRequired
}