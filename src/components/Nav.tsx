import { Link, NavLink } from "react-router-dom";
import { useAppSelector } from "../hooks";

export default function Nav() {
  const user = useAppSelector((state) => state.authState.userId);

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="text-decoration-none py-3 fw-bold" to="/kampus">
          CARKUS
        </Link>
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
              <NavLink className="nav-link" to="/">
                Beranda
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/fitur">
                Fitur
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/tentang">
                Tentang
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/bantuan">
                Bantuan
              </NavLink>
            </li>
          </ul>
          <div>
            {user ? (
              <NavLink to="/profile">
                <i className="far fa-circle-user fa-2x"></i>
              </NavLink>
            ) : (
              <div className="d-flex">
                <NavLink className="nav-link me-3" to="/login">
                  Login
                </NavLink>
                <NavLink className="nav-link" to="/register">
                  Register
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
