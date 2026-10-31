import { useInView } from "./utils";
import SectionHeader from "./SectionHeader";
import ASCII_PORTRAIT from "./asciiPortrait";

const TECHNOLOGIES = [
  "Python",
  "TypeScript",
  "React.js",
  "Java",
  "JavaScript ES6+",
];

export default function About() {
  const [ref, inView] = useInView();

  return (
    <section
      id="about"
      ref={ref}
      className={`about-section scroll-mt-20 px-6 transition-opacity duration-700 ${
        inView ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="about-inner">
        <SectionHeader tag="/ " title="about me" />
        <div className="about-content">
          <div className="about-description">
            <p>
              I am currently a <b>Lead Engineer</b> at{" "}
              <a href="https://www.tcs.com/" target="_blank" rel="noopener noreferrer">
                Tata Consultancy Services
              </a>
              , where I build AI-enabled decisioning and digital banking systems.
              Previously, I worked at{" "}
              <b>Fusion Indus Tecsol Pvt. Ltd.</b> and <b>Amagesoft Technologies</b>.
            </p>
            <p>Here are some technologies I have been working with:</p>
            <ul className="tech-stack">
              {TECHNOLOGIES.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
            <p>
              Outside work, I enjoy exploring new technology, learning about AI
              and fintech, and building practical software that solves real problems.
            </p>
          </div>
          <div className="about-photo ascii-photo" aria-label="ASCII portrait of Shailender Singh">
            <pre>{ASCII_PORTRAIT}</pre>
          </div>
        </div>
      </div>
    </section>
  );
}
