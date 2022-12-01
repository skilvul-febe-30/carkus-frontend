import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUserById } from "../api/user";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import { useAppSelector } from "../hooks";
import { User } from "../types/User";

export default function Profile() {
  const userId = useAppSelector((state) => state.authState.userId) ?? "";
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    getUserById(userId).then((res) => {
      setUser(res.data);
    });
  });
  return (
    user && (
      <Layout>
        <Nav />
        <section className="container py-5">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <div className="row">
                <div className="col-2">
                  <h1 className="mb-0 text-primary profile-icon">
                    <i className="far fa-user-circle"></i>
                  </h1>
                </div>
                <div className="col-10">
                  <div className="row">
                    <div className="col-12 col-lg-4">
                      <div className="row">
                        <div className="col-12">
                          <h2>{user.username}</h2>
                        </div>
                        {/* <div className="col-12">
                          <div className="row">
                            <div className="col-6 col-lg-10">
                              <p className="text-muted fw-semi-bold">
                                GMAIL USER
                              </p>
                            </div>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container">
          <div className="row gy-5 align-items-center">
            {/* <Link
              className="col-12 text-decoration-none text-dark"
              to="/editprofil"
            >
              <div className="row align-items-center">
                <div className="col-10">
                  <h5>
                    {" "}
                    <span className="bg-profile-icon py-2 px-3 rounded-08 text-white me-3">
                      <i className="far fa-user-edit"></i>
                    </span>{" "}
                    Edit Profil
                  </h5>
                </div>
                <div className="col-2 text-end">
                  <h5 className="mb-0">
                    <i className="fas fa-chevron-right"></i>
                  </h5>
                </div>
              </div>
            </Link> */}
            <Link
              className="col-12 text-decoration-none text-dark"
              to="/logout"
            >
              <div className="row align-items-center">
                <div className="col-10">
                  <h5>
                    {" "}
                    <span className="bg-profile-icon py-2 px-3 rounded-08 text-white me-3">
                      <i className="far fa-sign-out-alt"></i>
                    </span>{" "}
                    Keluar
                  </h5>
                </div>
                <div className="col-2 text-end">
                  <h5>
                    <i className="fas fa-chevron-right"></i>
                  </h5>
                </div>
              </div>
            </Link>
          </div>
        </section>
      </Layout>
    )
  );
}
