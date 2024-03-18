import { ToastContainer } from "react-toastify";
import { Hero, AboutUs, Goal, Footer } from "../sections";
import Why from "../sections/Why";
import GoalPhone from "../sections/GoalPhone";

const HomePage = () => {
  return (
    <div>
      <ToastContainer position="top-center" />
      <main className="relative w-full ">
        <Hero />
        <section id="why">
          <Why />
        </section>
        <section className="max-sm:mt-[700px] max-md:mt-40">
          <AboutUs />
        </section>
        <section className="max-sm:mt-10 max-md:mt-20">
          <GoalPhone />
        </section>
        <section className="max-sm:mt-10 " id="how">
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
