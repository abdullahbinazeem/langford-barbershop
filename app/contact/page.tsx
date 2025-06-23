import Directions from "../pages/directions";
import Footer from "../pages/footer";
import Header from "../pages/header";

export default function Home() {
  return (
    <div>
      <Header title="Contact" />
      <div className="py-20 bg-neutral-100">
        <Directions />
      </div>
      <Footer />
    </div>
  );
}
