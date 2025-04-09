
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Advantages from "@/components/Advantages";
import Gallery from "@/components/Gallery";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Testimonials />
      <Advantages />
      <Gallery />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
