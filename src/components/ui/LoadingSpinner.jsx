import { useState, useEffect } from 'react';
import { useContent } from '../../hooks/useContent';

const LoadingSpinner = () => {
    const [loading, setLoading] = useState(true);
    const { content } = useContent();

    useEffect(() => {
        // Simulate loading
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (!loading) return null;

    return (
        <div className="loading-spinner active" id="loadingSpinner">
            <div className="spinner"></div>
            <div className="loading-text" id="loadingText">
                {content.loadingText}
            </div>
        </div>
    );
};

export default LoadingSpinner;