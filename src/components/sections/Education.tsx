import { SectionLabel } from "../ui/SectionLabel";
import { Timeline } from "../ui/Timeline";
import { education } from "../../data/personalData";

export function Education() {
  return (
    <section id="education" className="relative py-28 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionLabel comment="education.sql" title="Education" />
        <Timeline items={education} />
      </div>
    </section>
  );
}
