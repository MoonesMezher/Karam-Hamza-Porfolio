import { useEffect, useState } from 'react';
import '../../assets/css/custom-cursor.css';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hidden, setHidden] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [linkHovered, setLinkHovered] = useState(false);

    useEffect(() => {
        const addEventListeners = () => {
            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseenter', onMouseEnter);
            document.addEventListener('mouseleave', onMouseLeave);
            document.addEventListener('mousedown', onMouseDown);
            document.addEventListener('mouseup', onMouseUp);
            
            // Link hover detection
            document.querySelectorAll('a, button, .nav-link').forEach(el => {
                el.addEventListener('mouseenter', () => setLinkHovered(true));
                el.addEventListener('mouseleave', () => setLinkHovered(false));
            });
        };

        const removeEventListeners = () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseenter', onMouseEnter);
            document.removeEventListener('mouseleave', onMouseLeave);
            document.removeEventListener('mousedown', onMouseDown);
            document.removeEventListener('mouseup', onMouseUp);
        };

        addEventListeners();
        return () => removeEventListeners();
    }, []);

    const onMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);
    const onMouseLeave = () => setHidden(true);
    const onMouseEnter = () => setHidden(false);

    const cursorClasses = [
        'cursor',
        hidden && 'cursor--hidden',
        clicked && 'cursor--clicked',
        linkHovered && 'cursor--hovered'
    ].filter(Boolean).join(' ');

    return (
        <>
            <div 
                className={cursorClasses}
                style={{ left: `${position.x}px`, top: `${position.y}px` }}
            />
            <div 
                className="cursor-follower"
                style={{ left: `${position.x}px`, top: `${position.y}px` }}
            />
        </>
    );
};

export default CustomCursor;