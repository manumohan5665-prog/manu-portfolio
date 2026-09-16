import education from "../data/education"

function Education() {

    return (
        <section className="education section" id="education">

            <div className="section-container">

                <p className="section-label">
                    My Academic Background
                </p>

                <h2 className="section-title">
                    Education
                </h2>

                <div className="education-list">

                    {education.map((item) => (

                        <div
                            className="education-card"
                            key={item.id}
                        >

                            <div className="education-main">

                                <h3>
                                    {item.degree}
                                </h3>

                                <p className="education-institution">
                                    {item.institution}
                                </p>

                                <p className="education-university">
                                    {item.university}
                                </p>

                            </div>

                            <span className="education-year">
                                {item.year}
                            </span>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    )
}

export default Education