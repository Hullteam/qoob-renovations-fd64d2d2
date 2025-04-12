
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Advantages from "@/components/Advantages";
import Gallery from "@/components/Gallery";
import HomePageDevisForm from "@/components/HomePageDevisForm";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { Helmet } from "react-helmet";
import HomePageSchema from "@/components/seo/HomePageSchema";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>qoob rénovations | Experts en Rénovation d'Habitat</title>
        <meta name="description" content="Transformez votre habitat avec style et confort. qoob rénovations, experts en rénovation intérieure et extérieure." />
        <link rel="canonical" href="https://qoobrenovations.com/" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      </Helmet>
      <HomePageSchema />
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
