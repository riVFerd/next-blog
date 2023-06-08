import { useEffect, useState } from "react";
import { FaSun } from "react-icons/fa";
import { RiMoonClearFill } from "react-icons/ri";

export default function ToggleDarkMode() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleDarkModeSwitch = () => {
        setIsDarkMode(!isDarkMode);
        localStorage.setItem('darkMode', (!isDarkMode).toString());
    }

    useEffect(() => {
        const storedDarkMode = localStorage.getItem('darkMode') === 'true';
        setIsDarkMode(storedDarkMode);
        if (storedDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [isDarkMode])

    return (
        <button onClick={handleDarkModeSwitch} className="p-2 text-xl focus:outline-0">
            {isDarkMode ? <RiMoonClearFill /> : <FaSun />}
        </button>
    )
}
