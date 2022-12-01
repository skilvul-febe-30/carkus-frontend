import { createBrowserRouter } from "react-router-dom";
import DetailKampus from "./pages/DetailKampus";
import Home from "./pages/Home";
import Bantuan from "./pages/Home/Bantuan";
import Fitur from "./pages/Home/Fitur";
import Tentang from "./pages/Home/Tentang";
import ListKampus from "./pages/ListKampus";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Profile from "./pages/Profile";
import Register from "./pages/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/logout",
    element: <Logout />,
  },
  {
    path: "/fitur",
    element: <Fitur />,
  },
  {
    path: "/tentang",
    element: <Tentang />,
  },
  {
    path: "/bantuan",
    element: <Bantuan />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/kampus",
    element: <ListKampus />,
  },
  {
    path: "/kampus/:campusId",
    element: <DetailKampus />,
  },
]);