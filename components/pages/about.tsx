import strengthCards from "@/constants/strengthCards";
import AboutCard from "../shared/AboutCard";

export default function About({ className = "" }) {
  return (
    <section id="about" className={`${className} z-10 about-bg_victor sm:pb-48`}>
      <div className="main-container space-y-14">
        {/*//! Text */}
        <div className="flex flex-col items-center text-center gap-6">
          <h1 className="head-text">Our Core Strengths</h1>
          <h2 className="title">
            Empowering Global Partnerships Through Trust and Expertise
          </h2>
          <p className="sub-title">
            Discover the unique features that set Self-Discovery with Amr Farag
            apart. We combine authenticity, integrity, and deep market expertise
            to deliver outstanding value in commercial trading, brokerage, and
            digital marketing. Our commitment to long-term relationships ensures
            mutual growth and exceptional results for every client.
          </p>
        </div>

        {/*//! Cards */}
        <div className="z-2 flex gap-4 justify-center flex-wrap">
            {strengthCards().map(({icon, title, des}) => (
                <AboutCard key={title} icon={icon} title={title} des={des} />
            ))}
        </div>
      </div>
    </section>
  );
}
