import { owner } from "../data/siteData";
import '../components/styles/Hero.css'

export default function Hero() {
    return (
        <main className="home">

            {/* Hero Section */}
            <section id="hero" className="hero">
                <h4>{owner.tagline}</h4>
                <p>{owner.bio}</p>
                {/* Greeting */}
                <h3>{owner.name}</h3>
                {/* Name */}
                <h5>{owner.title}</h5>
                {/* Professional Title */}
                {/* Short Introduction */}
                {/* CTA Buttons */}
                <ul className="hero-socials">
                    {owner.socials.map((social) => (
                        <li key={social.url}>
                            <a href={social.url} target="_blank" rel="noopener noreferrer">
                                {social.label}
                            </a>
                        </li>
                    ))}
                </ul>
                {/* Social Links */}
                {/* Profile Image */}
            </section>

            {/* Tech Stack  w/ icons*/}
            <section id="projects" className="tech-stack">
                <div className="tech-stack-card">
                    <p>Skills</p>
                    <ul>
                        {owner.skills.map((s) => (
                            <li key={s}>{s}</li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Featured Projects */}
            <section id="about" className="featured-projects">
                {/* Project Cards */}
            </section>

            {/* About Preview */}
            <section id="about-preview" className="about-preview">
                {/* Short About Me */}
                {/* Learn More Button */}
            </section>

            {/* Contact Call-to-Action */}
            <section id="contact" className="contact-cta">
                {/* Contact Message */}
                {/* Contact Button */}
            </section>

        </main>
    );
}