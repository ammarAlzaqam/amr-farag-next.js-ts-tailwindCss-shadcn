import About from "@/components/pages/about";
import Contact from "@/components/pages/contact";
import Footer from "@/components/pages/footer";
import Home from "@/components/pages/Home";
import Opinions from "@/components/pages/Opinions";
import Portfolio from "@/components/pages/Portfolio";
import Services from "@/components/pages/Services";

export default function HomePage() {
  return (
    <section className="bg-[linear-gradient(to_bottom,#D3E2F8,#CFE9FC)]">
      <Home />
      <About className="pt-[30px] sm:pt-[139px]" />
      <Services />
      <Portfolio />
      <Opinions />
      <Contact />
      <Footer />
    </section>
  );
}
