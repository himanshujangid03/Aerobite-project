import About from "./UI/About";
import HeroSection from "./UI/HeroSection";
import Navbar from "./UI/Navbar";
import Services from "./UI/Services";
import VideoSection from "./UI/VideoSection";
import Lenis from "lenis";
import YoutubeSection from "./UI/YoutubeSection";
import DeliveryZones from "./UI/DeliveryZones";
import EmailSubscription from "./UI/EmailSubscription";
import Footer from "./UI/Footer";
import Contact from "./UI/Contact";
import Brands from "./UI/Brands";
import "./fonts/TWKEverett-Light.otf";
import "./fonts/TWKEverett-LightItalic.otf";
import "./fonts/TWKEverett-Medium.otf";
import "./fonts/TWKEverett-MediumItalic.otf";
import "./fonts/TWKEverett-Bold.otf";
import "./fonts/TWKEverett-BoldItalic.otf";
import "./fonts/TWKEverett-Extrabold.otf";
import "./fonts/TWKEverett-ExtraboldItalic.otf";

const lenis = new Lenis();
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

function App() {
  return (
    <>
      <div className="flex flex-col font-twkEverett transition-all">
        <Navbar />
        <HeroSection />
        <VideoSection />
        <About />
        <Brands />
        <Services />
        <YoutubeSection />
        <DeliveryZones />
        <Contact />
        <div>
          <EmailSubscription />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
