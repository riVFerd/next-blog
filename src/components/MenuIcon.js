import PropTypes from 'prop-types';
export default function MenuIcon({ state, setState, className }) {
    return (
        <button id="menu-btn" className="mr-2" onClick={setState.bind(this, !state)}>
            <div className={"w-8 h-1 bg-black my-1.5 rounded transition-all " + (state ? 'rotate-45 translate-y-2.5 ' : '') + className}></div>
            <div className={"w-8 h-1 bg-black my-1.5 rounded transition-all " + (state ? 'opacity-0 ' : '') + className}></div>
            <div className={"w-8 h-1 bg-black my-1.5 rounded transition-all " + (state ? '-rotate-45 -translate-y-2.5 ' : '') + className}></div>
        </button>
    )
}

MenuIcon.propTypes = {
    state: PropTypes.bool.isRequired,
    setState: PropTypes.func.isRequired,
};