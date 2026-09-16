function Projects() {

    const projects = [
        {
            id: 1,
            title: "Audify",
            description:
                "A modern music player interface inspired by popular music streaming platforms.",
            technologies: ["React", "JavaScript", "CSS"],
            github: "#",
            live: "#"
        },

        {
            id: 2,
            title: "Weather App",
            description:
                "A responsive weather application that fetches and displays weather information using an API.",
            technologies: ["JavaScript", "API", "CSS"],
            github: "#",
            live: "#"
        },

        {
            id: 3,
            title: "Phonebook",
            description:
                "A phonebook application with features for adding, viewing, updating, deleting and searching contacts.",
            technologies: ["JavaScript", "Fetch API", "Bootstrap"],
            github: "#",
            live: "#"
        },

        {
            id: 4,
            title: "To-Do List",
            description: "A task management application.",
            technologies: ["JavaScript", "Bootstrap"],
            github: "#",
            live: "#"
        }
    ]

    return (
        <section className="projects section" id="projects">

            <div className="section-container">

                <p className="section-label">
                    My Work
                </p>

                <h2 className="section-title">
                    Projects
                </h2>

                <div className="projects-grid">

                    {projects.map((project) => (

                        <div
                            className="project-card"
                            key={project.id}
                        >

                            <div className="project-image">
                                Project Image
                            </div>

                            <div className="project-content">

                                <h3>
                                    {project.title}
                                </h3>

                                <p>
                                    {project.description}
                                </p>

                                <div className="project-technologies">

                                    {project.technologies.map((technology) => (
                                        <span key={technology}>
                                            {technology}
                                        </span>
                                    ))}

                                </div>

                                <div className="project-links">

                                    <a href={project.github}>
                                        GitHub →
                                    </a>

                                    <a href={project.live}>
                                        Live Demo →
                                    </a>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    )
}

export default Projects