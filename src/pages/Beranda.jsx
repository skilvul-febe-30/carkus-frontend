import React from "react";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";

function beranda() {
  return (
    <Layout>
      <Nav />
      <div class="container-fluid pt-5 pb-5">
        <div class="container">
          <div class="clearfix pt-5">
            <img
              src="/public/campus.png"
              class="col-md-6 float-md-end mb-3 crop-img"
              width="400"
              height="450"
            />
            <font size="10">
              <p class="trf">
                <strong>CARI KAMPUS</strong>
              </p>
            </font>
            <font size="5">
              <p>
                Cari dan temukan perguruan tinggi dan jurusan yang ideal sesuai
                dengan keinginan kamu disini secara gratis
              </p>
            </font>
            <Link className="btn btn-primary" to="/detail">
              Jelajahi
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
export default beranda;
