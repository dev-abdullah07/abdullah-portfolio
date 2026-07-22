import { SectionLabel } from "../ui/SectionLabel";
import { Timeline } from "../ui/Timeline";
import { experience } from "../../data/personalData";

export function Experience() {
  return (
    <section id="experience" className="relative py-28 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionLabel
          comment="experience.sql"
          title="Career Timeline"
          subtitle="Oracle APEX and database development, reporting, dashboards, and web development."
        />
        <Timeline items={experience} />
      </div>
    </section>
  );
}
