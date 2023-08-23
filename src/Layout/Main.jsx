import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";
import Footer from "../Shared/Footer/Footer";

const Main = () => {
  const location = useLocation();
  const doShow =
    location.pathname == "/login" || location.pathname == "/signup";
  return (
    <>
      {doShow || <NavBar></NavBar>}
      <Outlet></Outlet>
      {doShow || <Footer></Footer>}
    </>
  );
};

export default Main;
