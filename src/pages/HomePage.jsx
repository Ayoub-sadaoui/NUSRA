import { ToastContainer } from "react-toastify";
import { Hero, AboutUs, Goal, Footer } from "../sections";
import Why from "../sections/Why";
import GoalPhone from "../sections/GoalPhone";
import Where from "../sections/Where";

const HomePage = () => {
  return (
    <div>
      <ToastContainer position="top-center" />
      <main className="relative w-full ">
        <Hero />
        <section id="why">
          <Why />
        </section>
        <section
          className="max-xs:mt-[154vw] max-sm:mt-[700px] max-md:mt-40"
          id="AboutUs"
        >
          <AboutUs />
        </section>
        <section className="max-sm:mt-10 max-md:mt-20 " id="goalPhone">
          <GoalPhone />
        </section>
        <section className="max-sm:mt-10  md:mt-16 " id="how">
          <Goal />
        </section>
        <section className="max-md:hidden">
          <Where />
        </section>
        <section>
          <Footer />
        </section>
      </main>
    </div>
  );
};
export default HomePage;
