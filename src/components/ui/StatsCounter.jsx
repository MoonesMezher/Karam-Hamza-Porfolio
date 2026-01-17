import { useEffect, useState } from 'react';

const StatsCounter = () => {
    const [counters, setCounters] = useState({
        experience: 0,
        projects: 0,
        clients: 0,
        skills: 0
    });

    const targetValues = { experience: 8, projects: 50, clients: 200, skills: 15 };

    useEffect(() => {
        const animateCounters = () => {
            const interval = setInterval(() => {
                setCounters(prev => {
                    const newCounters = { ...prev };
                    let allComplete = true;

                    Object.keys(targetValues).forEach(key => {
                        if (newCounters[key] < targetValues[key]) {
                            newCounters[key] += Math.ceil(targetValues[key] / 50);
                            if (newCounters[key] > targetValues[key]) {
                                newCounters[key] = targetValues[key];
                            }
                            allComplete = false;
                        }
                    });

                    if (allComplete) clearInterval(interval);
                    return newCounters;
                });
            }, 30);

            return () => clearInterval(interval);
        };

        animateCounters();
    }, []);

    return (
        <div className="stats-counter">
            <div className="stats-grid">
                <div className="stat-item">
                    <div className="stat-number">
                        {counters.experience}+
                    </div>
                    <div className="stat-label">Years Experience</div>
                </div>
                <div className="stat-item">
                    <div className="stat-number">
                        {counters.projects}+
                    </div>
                    <div className="stat-label">Projects Completed</div>
                </div>
                <div className="stat-item">
                    <div className="stat-number">
                        {counters.clients}+
                    </div>
                    <div className="stat-label">Happy Clients</div>
                </div>
                <div className="stat-item">
                    <div className="stat-number">
                        {counters.skills}+
                    </div>
                    <div className="stat-label">Skills</div>
                </div>
            </div>
        </div>
    );
};

export default StatsCounter