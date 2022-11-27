import React from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";

function EditProfile() {
  return (
    <Layout>
      <Nav />
      <div className="container d-block">
        <div className="container">
          <Link
            className="text-decoration-none text-black py-3 d-flex"
            to="/profil"
          >
            <i class="fas fa-chevron-left text-decoration-none my-auto me-2"></i>
            <h5 className="text-decoration-none my-auto">
              {" "}
              Edit Profile
            </h5>
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default EditProfile;
