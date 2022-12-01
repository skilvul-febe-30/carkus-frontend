import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import Nav from "../../components/Nav";

export default function Home() {
  return (
    <Layout>
      <Nav />
      <div className="container-fluid pt-5 pb-5">
        <div className="container">
          <div className="clearfix pt-5">
            <img src="/campus.png" className="col-md-6 float-md-end mb-3 crop-img" width="400" height="450" />
            <h1>
              <strong>CARI KAMPUS</strong>
            </h1>
            <p className="fs-4">
              Cari dan temukan perguruan tinggi dan jurusan yang ideal sesuai dengan keinginan kamu disini secara gratis
            </p>
            <Link className="btn btn-primary" to="/kampus">
              Jelajahi
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
