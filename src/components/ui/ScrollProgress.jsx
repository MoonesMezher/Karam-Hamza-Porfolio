import { useState, useEffect } from 'react';
import '../../assets/css/scroll-progress.css';

const ScrollProgress = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const calculateScrollProgress = () => {
            const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
            const currentScroll = window.scrollY;
            const progress = (currentScroll / totalScroll) * 100;
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', calculateScrollProgress);
        return () => window.removeEventListener('scroll', calculateScrollProgress);
    }, []);

    return (
        <div className="scroll-progress">
            <div 
                className="scroll-progress-bar"
                style={{ width: `${scrollProgress}%` }}
            />
        </div>
    );
};

export default ScrollProgress;