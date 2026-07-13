import { profile, projects } from "../data/siteData";
import "../components/styles/Hero.css";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

export default function Hero() {
  return (
    <main className="home">
      <section id="hero" className="hero">
        <h3>
          <span className="highlight">Hi its </span>
          {profile.name}
        </h3>

        <h4>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, aperiam repellendus rerum similique atque in harum repudiandae non enim earum, corrupti, aliquam et at
          illo. Suscipit accusantium adipisci vel necessitatibus.
        </h4>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate eum cupiditate rem expedita temporibus earum quae ab alias sequi accusantium et corporis
          necessitatibus doloribus, facilis quam ipsum. Temporibus, praesentium iste?
        </p>
        <h5>{profile.title}</h5>
        {/* <ul className="hero-socials">
          {profile.socials.map((social) => (
            <li key={social.url}>
              <a href={social.url} target="_blank" rel="noopener noreferrer">
                {social.label}
              </a>
            </li>
          ))}
        </ul> */}

        <div className="socials">
          <a href={profile.socials[0].url} target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>

          <a href={profile.socials[1].url} target="_blank" rel="noopener noreferrer">
            <CiLinkedin />
          </a>
        </div>
      </section>

      {/* Tech Stack  w/ icons*/}
      <section id="projects" className="tech-stack">
        <div className="tech-stack-card">
          <p>Skills</p>
          <ul className="skill-list">
            {profile.techSkill.map((stack, index) => (
              <li key={stack.label ?? index} className="skill-item">
                {stack.imageUrl ? <img src={stack.imageUrl} alt={stack.label ? `${stack.label} icon` : "Skill icon"} className="skill-icon" /> : stack.label || "Skill"}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="about" className="featured-projects">
        <div className="project-card">
          <h3>Featured Projects</h3>
          <ul className="project-list">
            {projects.slice(0, 4).map((project) => (
              <li key={project.id} className="project-item">
                <h2>{project.title}</h2>
              </li>
            ))}
          </ul>
        </div>
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
