import { Hero, AboutUs, Goal, Contact, Footer } from "../sections";

const HomePage = () => {
  return (
    <div>
      <main className="relative w-full ">
        <Hero />
        <section className="mt-20">
          <AboutUs />
        </section>
        <section>
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
