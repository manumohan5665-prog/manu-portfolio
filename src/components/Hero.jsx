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
                I build modern, responsive and user-friendly web applications
                using modern web technologies.
            </p>

            <div className="hero-buttons">

                <a href="#projects" className="btn primary-btn">
                    View My Projects
                </a>

                <a href="#contact" className="btn secondary-btn">
                    Contact Me
                </a>

            </div>

        </section>
    )
}

export default Hero