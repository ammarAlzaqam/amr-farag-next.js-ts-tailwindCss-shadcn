import About from "@/components/pages/about";
import Contact from "@/components/pages/contact";
import Footer from "@/components/pages/footer";
import Home from "@/components/pages/Home";
import Opinions from "@/components/pages/Opinions";
import Portfolio from "@/components/pages/Portfolio";
import Services from "@/components/pages/Services";

export default function HomePage() {
  return (
    <section className="">
      <Home />
      <About className="pt-[30px] sm:pt-[139px]" />
      <Services />
      <Portfolio />
      <div className="overflow-hidden">
        <Opinions />
        <Contact />
        <Footer />
      </div>
    </section>
  );
}
