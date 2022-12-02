import { createBrowserRouter } from "react-router-dom";
import BuatKampus from "./pages/BuatKampus";
import DetailKampus from "./pages/DetailKampus";
import EditKampus from "./pages/EditKampus";
import Home from "./pages/Home";
import Bantuan from "./pages/Home/Bantuan";
import Fitur from "./pages/Home/Fitur";
import Tentang from "./pages/Home/Tentang";
import ListKampus from "./pages/ListKampus";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Register from "./pages/Register";
import UserProfile from "./pages/UserProfile";

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
    element: <UserProfile />,
  },
  {
    path: "/kampus",
    element: <ListKampus />,
  },
  {
    path: "/kampus/:campusId",
    element: <DetailKampus />,
  },
  {
    path: "/create/kampus/",
    element: <BuatKampus />,
  },
  {
    path: "/edit/kampus/:campusId",
    element: <EditKampus />,
  },
]);
