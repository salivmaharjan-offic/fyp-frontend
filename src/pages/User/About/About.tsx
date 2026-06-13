import Hero from "./sub-pages/Hero";
import Values from "../Home/sub-pages/Values";
import ContactForm from "./sub-pages/ContactForm";

const About = () => {
  return (
    <div className="bg-zinc-950 text-zinc-50">
      {/* Hero Section */}
      <Hero />

      {/* Why Us? */}
      <Values />

      {/* Contact Us */}
      <ContactForm />
    </div>
  );
};

export default About;
