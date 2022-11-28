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
            <i className="fas fa-chevron-left text-decoration-none my-auto me-2"></i>
            <h5 className="text-decoration-none my-auto">
              {" "}
              Edit Profile
            </h5>
          </Link>
        </div>
        <div className="mb-3">
						<label className="form-label">
							Nama Depan
						</label>
						<input
							type="text"
							className="form-control"
							id="namaDepan"
							placeholder="Nama Depan"
						/>
					</div>
          <div className="mb-3">
						<label className="form-label">
							Nama Belakang
						</label>
						<input
							type="text"
							className="form-control"
							id="namaBelakang"
							placeholder="Nama Belakang"
						/>
					</div>
          <div className="mb-3">
						<label className="form-label">
							Ubah Email
						</label>
						<input
							type="text"
							className="form-control"
							id="email"
							placeholder="jhondoe@gmail.com"
						/>
					</div>
          <div className="mb-3">
						<label className="form-label">
							Ubah Password
						</label>
						<input
							type="password"
							className="form-control"
							id="password"
							placeholder="Kata Sandi"
						/>
					</div>
          <div className="text-end">
						<button className="btn btn-primary mt-4 mb-5">
							Simpan
						</button>
					</div>
      </div>
    </Layout>
  );
}

export default EditProfile;
