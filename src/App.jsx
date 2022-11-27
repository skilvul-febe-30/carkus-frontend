import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import RegisterKampus from "./components/RegisterKampus";
import Detail from "./pages/Detail";
import EditKampus from "./pages/EditKampus";
import InfoDetail from "./pages/InfoDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/daftar/kampus" element={<RegisterKampus />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/detail" element={<Detail/>} />
        <Route path="/detail/:id" element={<InfoDetail/>} />
        <Route path="/edit-kampus" element={<EditKampus/>} />
      </Routes>
    </>
  );
}

export default App;
