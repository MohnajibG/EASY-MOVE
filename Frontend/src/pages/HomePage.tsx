import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import BookingForm from "../components/BookingForm";
import TrustBar from "../components/TrustBar";
import Services from "../components/Services";
import WhyUs from "../components/WhyUs";
import Pricing from "../components/Pricing";
import Storage from "../components/Storage";
import Packing from "../components/Packing";
import Gallery from "../components/Gallery";
import GoogleReviews from "../components/GoogleReviews";
import FAQ from "../components/FAQ";
import InstagramFeed from "../components/InstagramFeed";
import SocialCTA from "../components/SocialCTA";
import Footer from "../components/Footer";
import MiniFooter from "../components/MiniFooter";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

const HomePage = () => {
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
        <GoogleReviews />
        <FAQ />
        <InstagramFeed />
        <SocialCTA />
      </main>
      <Footer />
      <MiniFooter />
      <FloatingWhatsApp />
    </>
  );
};

export default HomePage;
