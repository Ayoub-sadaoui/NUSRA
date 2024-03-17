import { Outlet } from "react-router-dom";
import { Header } from "../sections";
const HomeLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
export default HomeLayout;
