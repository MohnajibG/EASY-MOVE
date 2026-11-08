import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BookingForm from "./components/BookingForm";
import TrustBar from "./components/TrustBar";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Pricing from "./components/Pricing";
import Storage from "./components/Storage";
import Packing from "./components/Packing";
import Gallery from "./components/Gallery";
// import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import SocialCTA from "./components/SocialCTA";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BookingForm />
        <TrustBar />
        <Services />
        <WhyUs />
        <Pricing />
        <Storage />
        <Packing />
        <Gallery />
        {/* <Testimonials /> */}
        <FAQ />
        <SocialCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
};

export default App;
