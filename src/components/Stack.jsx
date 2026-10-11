import { skills } from "../data/skills";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
export default function Stack() {
  return (
    <section
      id="stack"
      className="section container"
      aria-label="Skills and stack"
    >
      <Reveal>
        <SectionHeading
          number="03"
          label="Tools of the trade"
          description="A practical stack, chosen for the problem. Across the interface, the data, and the infrastructure."
        >
          The right tools.
          <br />
          <span className="serif">The whole picture.</span>
        </SectionHeading>
      </Reveal>
      <div className="skill-list">
        {skills.map((group) => (
          <Reveal className="skill-row" key={group.title}>
            <div className="skill-title">
              <span className="eyebrow accent">/{group.number}</span>
              <div>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
              </div>
            </div>
            <ul className="skill-items" aria-label={group.title}>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
