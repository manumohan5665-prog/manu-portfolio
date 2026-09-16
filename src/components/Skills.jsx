import skills from "../data/skills"

function Skills() {
    
    return (
        <section className="skills section" id="skills">

            <div className="section-container">

                <p className="section-label">
                    What I Work With
                </p>

                <h2 className="section-title">
                    Skills
                </h2>

                <div className="skills-grid">

                    {skills.map((skill) => (
                        <div className="skill-card" key={skill}>
                            {skill}
                        </div>
                    ))}

                </div>

            </div>

        </section>
    )
}

export default Skills