import { useState, useEffect } from 'react';
import SplashScreen from '../components/ui/SplashScreen';
import Hero from '../components/sections/Hero';
import Experience from '../components/sections/Experience';
import FixedBackground from '../components/sections/FixedBackground';
import Concepts from '../components/sections/Concepts';
import Challenges from '../components/sections/Challenges';
import Contact from '../components/sections/Contact';

const Home = () => {
    const [showSplash, setShowSplash] = useState(localStorage.getItem("showed")? false: true);

    useEffect(() => {
        if(localStorage.getItem("showed")) return;

        const timer = setTimeout(() => {
            setShowSplash(false);
            localStorage.setItem("showed", "true");
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <SplashScreen visible={showSplash}/>
            {!showSplash && (
                <>
                    <Hero />
                    <Experience />
                    <FixedBackground />
                    <Concepts />
                    <Challenges />
                    <Contact />
                </>
            )}
        </>
    );
};

export default Home;