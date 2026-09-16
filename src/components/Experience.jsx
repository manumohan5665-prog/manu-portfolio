function Experience() {

    const experiences = [
        {
            id: 1,
            title: "Full Stack Web Development",
            company: "Entri Software Pvt Ltd",
            location: "Kerala",
            year: "2026",
            description:
                "Completed full stack web development training with a focus on building modern web applications using the MERN stack."
        }
    ]

    return (
        <section className="experience section" id="experience">

            <div className="section-container">

                <p className="section-label">
                    My Journey
                </p>

                <h2 className="section-title">
                    Experience
                </h2>

                <div className="experience-list">

                    {experiences.map((experience) => (

                        <div
                            className="experience-card"
                            key={experience.id}
                        >

                            <div className="experience-header">

                                <div>
                                    <h3>{experience.title}</h3>

                                    <p className="experience-company">
                                        {experience.company}
                                    </p>
                                </div>

                                <span className="experience-year">
                                    {experience.year}
                                </span>

                            </div>

                            <p className="experience-location">
                                {experience.location}
                            </p>

                            <p className="experience-description">
                                {experience.description}
                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    )
}

export default Experience