import Layout from "../../components/Layout";
import Nav from "../../components/Nav";

export default function Tentang() {
  return (
    <Layout>
      <Nav />
      <div className="container-fluid pt-5 pb-5">
        <div className="container">
          <div className="clearfix pt-5">
            <img src="/tentang.png" className="col-md-6 float-md-end mb-3 crop-img" width="500" height="500" />
            <h1 className="trf">
              <strong>TENTANG CARI KAMPUS</strong>
            </h1>
            <p className="fs-4">
              Cari kampus merupakan sebuah solusi dari permasalahan para remaja yang saat ini masih mengalami
              kebingungan dalam menentukan kampus yang ingin dipilih. Dengan adanya cari kampus, diharapkan para remaja
              dapat mengetahui tentang informasi perguruan tinggi yang ingin mereka pilih nantinya.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
