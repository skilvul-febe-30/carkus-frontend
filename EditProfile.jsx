import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import { putUser } from "../redux/action/listUserAction";
import { useDispatch } from "react-redux";

export default function EditProfile() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch()
  // useEffect(() => {
  //   putUser();
  // }, []);

  function updateUser() {
    let data={firstName, lastName, email, password}
      console.log("data", data)
     }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      putUser({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
      })
    );
  };

  return (
    <Layout>
      <Nav />
      <div className="container d-block">
        <div className="container mb-4">
          <Link
            className="text-decoration-none text-black py-3 d-flex"
            to="/profil"
          >
            <i className="fas fa-chevron-left text-decoration-none my-auto me-2"></i>
            <h5 className="text-decoration-none my-auto"> Edit Profile</h5>
          </Link>
        </div>
        <form onSubmit={(e) => handleSubmit(e)} className="form-edit-profile">
          <div className="mb-3">
            <label className="form-label">Nama Depan</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder="Nama Depan"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Nama Belakang</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              placeholder="Nama Belakang"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Ubah Email</label>
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="jhondoe@gmail.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Ubah Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Kata Sandi"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="text-end">
            <button className="btn btn-primary mt-4 mb-5" onClick={updateUser}>
              Simpan
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
