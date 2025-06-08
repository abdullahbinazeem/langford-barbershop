import Hero from "./pages/hero";
import About from "./pages/about";
import Services from "./pages/services";
import Pricing from "./pages/pricing";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Pricing />
    </div>
  );
}
