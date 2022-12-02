import Layout from "../../components/Layout";
import Nav from "../../components/Nav";

export default function Bantuan() {
  return (
    <Layout>
      <Nav />
      <div className="container">
        <div className="row mt-5 mx-5">
          <div className="col-md-6" data-aos="fade-right">
            <h4 className="fw-bolder mt-5 about-us-subtitle">BUTUH BANTUAN?</h4>
            <img src="/help.png" width="500" height="400" />
          </div>
          <div className="col-md-6" data-aos="fade-left">
            <h1>FAQ</h1>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <i className="fa fa-check-double primary"></i>
                Kenapa saya tidak menemukan kampus yang saya inginkan?
              </li>
              <li className="list-group-item list-group-flush">
                Jika kamu tidak bisa menemukan kampus yang sedang kamu cari, berarti kampus tersebut belum terdaftar
                pada website kami.
              </li>
            </ul>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <i className="fa fa-check-double primary"></i>
                Bagaimana cara mengetahui keketatan jurusan?
              </li>
              <li className="list-group-item list-group-flush">Kamu bisa pergi ke detail kampus yang kamu inginkan.</li>
            </ul>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <i className="fa fa-check-double primary"></i>
                Bagaimana cara memulai diskusi di kampus yang saya ingin?
              </li>
              <li className="list-group-item list-group-flush">
                Kamu bisa pergi ke kampus yang kamu inginkan, di sana terdesedia tab untuk ruang diskusi.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
