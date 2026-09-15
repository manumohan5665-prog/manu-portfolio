function Skills() {
    const skills = [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Bootstrap",
        "Tailwind",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Git",
        "GitHub",
        "REST API"
    ]

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