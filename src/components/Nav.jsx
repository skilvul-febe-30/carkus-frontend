import React from "react";
import { Navigate, useNavigate } from "react-router";
import { Link } from "react-router-dom";

export default function Nav() {
  const navigate = useNavigate();

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link
            className="text-decoration-none py-3 fw-bold"
            to="/detail"
          >
            CARKUS
          </Link>
          {/* <a className="navbar-brand fw-bold" onClick={brand}>
            CARKUS
          </a> */}
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
            <div>
              <Link to="/profil">
                <i className="far fa-circle-user fa-2x"></i>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
