import ContactForm from "@/components/ContactForm";
import AnimatedNavbar from "@/components/AnimatedNavbar";
import PageTransition from "@/components/PageTransition";

const Contact = () => {
  return (
    <PageTransition>
      <AnimatedNavbar />
      <ContactForm />
    </PageTransition>
  );
};

export default Contact;
