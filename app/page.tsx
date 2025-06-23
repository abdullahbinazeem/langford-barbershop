import Hero from "./pages/hero";
import About from "./pages/about";
import Services from "./pages/services";
import Pricing from "./pages/pricing";
import Directions from "./pages/directions";
import Footer from "./pages/footer";
import Gallery from "./pages/gallery";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Pricing />
      <Directions />
      <Footer />
    </div>
  );
}
