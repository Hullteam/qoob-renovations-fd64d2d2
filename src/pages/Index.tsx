
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Advantages from "@/components/Advantages";
import Gallery from "@/components/Gallery";
import HomePageDevisForm from "@/components/HomePageDevisForm";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Testimonials />
      <Advantages />
      <Gallery />
      <HomePageDevisForm />
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
