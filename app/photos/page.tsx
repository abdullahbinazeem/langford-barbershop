import Footer from "../pages/footer";
import Gallery from "../pages/gallery";
import Header from "../pages/header";

export default function Home() {
  return (
    <div>
      <Header title="Photos" />
      <div className="py-20 bg-neutral-900">
        <Gallery />
      </div>
      <Footer />
    </div>
  );
}
