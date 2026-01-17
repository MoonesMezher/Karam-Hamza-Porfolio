import { useContent } from '../../hooks/useContent';
import Video from "/public/bg.mp4"

const FixedBackground = () => {
    const { content } = useContent();

    return (
        <section className="fixed-bg-section" style={{ overflow: "hidden" }}>
            <div className='video-container'>
                <div className='overlay'></div>
                <video muted autoPlay loop>
                    <source src={Video}/>
                </video>
            </div>
            <div className="container">
                <div className="fixed-bg-content" data-aos="zoom-up" data-aos-delay={100} data-aos-duration="500">
                    <h2 className="fixed-bg-title">{content.fixedBgTitle}</h2>
                    <p className="fixed-bg-text">{content.fixedBgText}</p>
                </div>
            </div>
        </section>
    );
};

export default FixedBackground;