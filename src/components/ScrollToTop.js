import React, { useState, useEffect } from 'react';
import { BsArrowBarUp } from 'react-icons/bs';

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > window.screen.height / 2) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <a className={`fixed bottom-4 right-4 p-3 cursor-pointer rounded-3xl drop-shadow-lg text-primary-dark bg-white dark:text-primary-light dark:bg-secondary-dark ${isVisible ? 'visible' : 'hidden'}`} onClick={scrollToTop}>
            <BsArrowBarUp className="font-extrabold text-2xl"/>
        </a>
    );
};
