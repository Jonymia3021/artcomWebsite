import React from 'react';
import style from './style.css';
import { useEffect } from 'react';
import { useState } from 'react';

const GoToTop = () => {

    const [showScrollTop, setShowScrollTop] = useState(false);

    const handleGoTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth'});
    };

    const listenToScroll = () => {
        let hightToHidden = 500;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        if (winScroll > hightToHidden) {
            setShowScrollTop(true);
        }else{
            setShowScrollTop(false);
        }
    };

    useEffect(()=> {
        window.addEventListener('scroll', listenToScroll)
    },[])

    return (
        <>
            {showScrollTop && <button onClick={handleGoTop} className='goTop rounded-circle'><i className="bi bi-arrow-up"></i></button>}
        </>
    );
};

export default GoToTop;