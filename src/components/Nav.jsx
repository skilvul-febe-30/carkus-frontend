import React from "react";
import { Navigate, useNavigate } from "react-router";

export default function Nav() {
  const navigate = useNavigate();

  const signOut = () => {
    navigate("/");
    localStorage.clear();
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            CARKUS
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 mx-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Beranda
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Fitur
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Tentang
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Bantuan
                </a>
              </li>
            </ul>
            <div className="profil dropdown d-flex">
              <i className="fa-solid fa-circle-user fa-2x"></i>
              <a
                className="nav-link dropdown-toggle my-auto ms-3"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Profil
              </a>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li>
                  <a className="dropdown-item">Profil</a>
                </li>
                <li>
                  <a className="dropdown-item">Setting</a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" onClick={signOut}>Sign Out</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
