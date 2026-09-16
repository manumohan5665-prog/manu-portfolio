function Hero() {
    return (
        <section className="hero" id="home">

            <p className="hero-greeting">
                Hi, I'm
            </p>

            <h1>
                Manu Mohandas
            </h1>

            <h2>
                Full Stack Web Developer
            </h2>

            <p className="hero-description">
                I build responsive, user-friendly and modern web
                applications using technologies like React,
                JavaScript, Node.js and MongoDB.
            </p>

            <div className="hero-buttons">

                <a
                    href="#projects"
                    className="btn primary-btn"
                >
                    View Projects
                </a>

                <a
                    href="/resume.pdf"
                    className="btn secondary-btn"
                    target="_blank"
                    rel="noreferrer"
                >
                    Download Resume
                </a>

            </div>

            <div className="hero-socials">

                <a
                    href="https://github.com/manumohan5665-prog"
                    target="_blank"
                    rel="noreferrer"
                >
                    GitHub
                </a>

                <a
                    href="https://linkedin.com/in/manu-mohandas-dev"
                    target="_blank"
                    rel="noreferrer"
                >
                    LinkedIn
                </a>

            </div>

            <div className="scroll-indicator">
                ↓
            </div>

        </section>
    )
}

export default Hero