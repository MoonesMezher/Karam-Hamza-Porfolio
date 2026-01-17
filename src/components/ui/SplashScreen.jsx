import Logo from "/public/logo.svg"

const SplashScreen = ({ visible }) => {
    if (!visible) return null;

    return (
        <div className="splash-screen" id="splashScreen">
            <div className=''>
                <img src={Logo} alt="Karam Hamza" />
            </div>
            <div className="splash-logo">Karam Hamza</div>
            <div className="splash-loader">
                <div className="splash-dot"></div>
                <div className="splash-dot"></div>
                <div className="splash-dot"></div>
            </div>
            <div className="splash-text">Your Journey Start Now</div>
        </div>
    );
};

export default SplashScreen;