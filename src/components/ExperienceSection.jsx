import SectionHeading from "./SectionHeading";
import TimelineItem from "./TimelineItem";

function ExperienceSection() {
  return (
  <section
  id="experience"
  className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
    <SectionHeading title="Experience" subtitle="Where I have learned and worked." />
    <ol className="mt-8 space-y-8 border-l border-stone-200">
        <TimelineItem
          period="2023 – Present"
          title="BS Information Technology"
          place="Cebu Institute of Technology – University"
          description="Now in my third year, taking up application development, databases, and web projects."
        />
        <TimelineItem
          period="2023"
          title="Work Immersion Intern"
          place="RJ Digital Print Hub"
          description="Completed 80 hours helping with document prep, print production, and quality checks."
        />
        <TimelineItem
          period="2021 – 2023"
          title="Senior High School, STEM Strand"
          place="St. Alphonsus Catholic School"
          description="Built a strong base in math and logical thinking, and made the Principal's List."
        />
    </ol>
    </section>
  );
}

export default ExperienceSection;