import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import RegisterKampus from "./components/RegisterKampus";
import Detail from "./pages/Detail";
import EditProfile from "./pages/EditProfile";
import InfoDetail from "./pages/InfoDetail";
import Profile from "./pages/Profile";
// import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/daftar/kampus" element={<RegisterKampus />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* private router */}
        <Route path="/detail" element={<Detail />} />
        <Route path="/detail/:id" element={<InfoDetail />} />
        <Route path="/profil" element={<Profile />} />
        <Route path="/editprofil" element={<EditProfile />} />
      </Routes>
    </>
  );
}

export default App;
