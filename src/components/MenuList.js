import PropTypes from "prop-types";

export default function MenuList({state, categories}) {
    return (
        <div id="menu-list" className={
            "absolute top-0 mt-14 rounded-b-lg bg-white w-full z-40 transition-all duration-300 overflow-hidden dark:bg-secondary-dark "
            + (state ? "max-h-screen" : "max-h-0"
            )}>
            <ul className="flex flex-col gap-4 p-4 font-bold text-primary-dark dark:text-primary-light">
                <li>Home</li>
                {categories.map((category) => <li key={category.id}>{category.name}</li>)}
            </ul>
        </div>
    )
}

MenuList.prototype = {
    state: PropTypes.bool.isRequired,
    categories: PropTypes.array.isRequired
}