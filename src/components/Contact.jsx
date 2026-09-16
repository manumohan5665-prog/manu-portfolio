import { useState } from "react"

function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const handleChange = (event) => {

        const { name, value } = event.target

        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (event) => {

        event.preventDefault()

        console.log(formData)
    }

    return (
        <section className="contact section" id="contact">

            <div className="section-container">

                <p className="section-label">
                    Get In Touch
                </p>

                <h2 className="section-title">
                    Contact Me
                </h2>

                <div className="contact-content">

                    <div className="contact-intro">

                        <h3>
                            Let's work together.
                        </h3>

                        <p>
                            Have a project, job opportunity, or just want
                            to say hello? Feel free to send me a message.
                        </p>

                    </div>

                    <form
                        className="contact-form"
                        onSubmit={handleSubmit}
                    >

                        <div className="form-group">

                            <label htmlFor="name">
                                Name
                            </label>

                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your name"
                            />

                        </div>

                        <div className="form-group">

                            <label htmlFor="email">
                                Email
                            </label>

                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="your@email.com"
                            />

                        </div>

                        <div className="form-group">

                            <label htmlFor="message">
                                Message
                            </label>

                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tell me about your project..."
                                rows="6"
                            />

                        </div>

                        <button
                            type="submit"
                            className="btn primary-btn"
                        >
                            Send Message
                        </button>

                    </form>

                </div>

            </div>

        </section>
    )
}

export default Contact