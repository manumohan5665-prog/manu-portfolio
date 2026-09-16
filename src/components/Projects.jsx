import projects from "../data/projects"

function Projects() {

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