import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import LogIn from "../pages/Login/LogIn";
import SignUp from "../pages/SignUp/SignUp";
import ErrorPage from "../pages/Error/ErrorPage";
import DoctorDetails from "../pages/DoctorDetails/DoctorDetails";
import Appointment from "../pages/Appointment/Appointment/Appointment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <LogIn></LogIn>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "details/:id",
        element: <DoctorDetails></DoctorDetails>,
        loader: ({ params }) =>
          fetch(
            `https://doc-house-server-five.vercel.app/doctors/${params.id}`
          ),
      },
      {
        path: "appointment",
        element: <Appointment></Appointment>,
      },
    ],
    errorElement: <ErrorPage></ErrorPage>,
  },
]);

export default router;
