import { useEffect, useRef } from 'react';

export const useTilt = (active = true) => {
    const ref = useRef(null);

    useEffect(() => {
        if (!active) return;

        const element = ref.current;
        if (!element) return;

        const handleMouseMove = (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateY = ((x - centerX) / centerX) * 10;
            const rotateX = ((centerY - y) / centerY) * 10;
            
            element.style.transform = `
                perspective(1000px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateZ(10px)
            `;
            element.style.boxShadow = `
                ${rotateY * 2}px ${rotateX * 2}px 40px rgba(0, 0, 0, 0.3)
            `;
        };

        const handleMouseLeave = () => {
            element.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
            element.style.boxShadow = 'var(--shadow-md)';
        };

        element.addEventListener('mousemove', handleMouseMove);
        element.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            element.removeEventListener('mousemove', handleMouseMove);
            element.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [active]);

    return ref;
};