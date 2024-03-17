import { Hero, AboutUs, Goal, Contact, Footer } from "../sections";
import Why from "../sections/Why";

const HomePage = () => {
  return (
    <div>
      <main className="relative w-full ">
        <Hero />
        <section>
          <Why />
        </section>
        <section className="max-sm:mt-[700px] max-md:mt-40">
          <AboutUs />
        </section>
        <section className="max-sm:mt-10 ">
          <Goal />
        </section>

        <section>
          <Footer />
        </section>
      </main>
    </div>
  );
};
export default HomePage;
