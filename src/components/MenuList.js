import PropTypes from "prop-types";

export default function MenuList({state}) {
    return (
        <div id="menu-list" className={
            "absolute top-0 mt-14 rounded-b-lg bg-primary-light w-full z-40 transition-all duration-500 ease-in-out overflow-hidden "
            + (state ? "max-h-screen" : "max-h-0"
            )}>
            <ul className="p-4 text-lg font-bold text-primary-dark">
                <li>Home</li>
                <li>Technology</li>
                <li>Travel</li>
                <li>Food</li>
                <li>Fashion</li>
                <li>Sports</li>
            </ul>
        </div>
    )
}

MenuList.prototype = {
    state: PropTypes.bool.isRequired
}