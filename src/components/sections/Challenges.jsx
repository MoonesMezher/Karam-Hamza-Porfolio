import { useState } from 'react';
import { useContent } from '../../hooks/useContent';

const Challenges = () => {
    const { content } = useContent();
    const [activeTab, setActiveTab] = useState('manufacturing');

    return (
        <section id="challenges" className="section" style={{ backgroundColor: 'var(--darker-bg)' }}>
            <div className="container">
                <h2 className="section-title">{content.challengesTitle}</h2>
                
                <div className="challenges-container">
                    <div className="challenges-tabs">
                        {content.challengeTabs.map((tab) => (
                            <button
                                key={tab.id}
                                className={`challenge-tab ${activeTab === tab.id ? 'active' : ''}`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                <i className={tab.icon}></i> {tab.text}
                            </button>
                        ))}
                    </div>
                    
                    <div className="challenges-content active">
                        {activeTab === 'customer-approach' ? (
                            <div className="challenge-grid">
                                <div className="challenge-card">
                                    <h3>
                                        <i className="fas fa-users"></i> 
                                        {content.challenges[activeTab][0].title}
                                    </h3>
                                    <p>{content.challenges[activeTab][0].description}</p>
                                    <div className="solution-box">
                                        <p dangerouslySetInnerHTML={{ __html: content.challenges[activeTab][0].solution }} />
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="challenge-grid">
                                {content.challenges[activeTab]?.map((challenge, index) => (
                                    <div 
                                        key={index}
                                        className="challenge-card"
                                        data-aos="fade-up" 
                                        data-aos-delay={index * 50}
                                        data-aos-duration="500"
                                    >
                                        <h3>
                                            <i className="fas fa-exclamation-circle"></i> 
                                            {challenge.title}
                                        </h3>
                                        <p>{challenge.description}</p>
                                        <div className="solution-box">
                                            <p>{challenge.solution}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Challenges;