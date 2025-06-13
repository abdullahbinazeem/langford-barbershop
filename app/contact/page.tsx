import Directions from "../pages/directions";
import Footer from "../pages/footer";
import Header from "../pages/header";

export default function Home() {
  return (
    <div>
      <Header title="Contact" />
      <div className="pt-40 bg-neutral-900">
        <Directions />
      </div>
      <Footer />
    </div>
  );
}
