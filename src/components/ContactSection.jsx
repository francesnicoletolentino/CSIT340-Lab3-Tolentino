import SectionHeading from "./SectionHeading";
import ContactLink from "./ContactLink";

function ContactSection() {
  return (
  <section
  id="contact"
  className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
    <SectionHeading title="Contact" subtitle="Contact me through these platforms." />
    <ul className="mt-8 space-y-3">
        <ContactLink
          label="Email"
          href="mailto:tolentinofrancesnicole06@gmail.com"
          text="tolentinofrancesnicole06@gmail.com"
        />
        <ContactLink
          label="GitHub"
          href="https://github.com/francesnicoletolentino"
          text="github.com/francesnicoletolentino"
        />
        <ContactLink
          label="LinkedIn"
          href="https://www.linkedin.com/in/frances-nicole-tolentino-14473439b"
          text="linkedin.com/in/frances-nicole-tolentino-14473439b"
        />  
    </ul>
    </section>
  );
}

export default ContactSection;