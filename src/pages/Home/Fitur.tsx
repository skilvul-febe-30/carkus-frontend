import Layout from "../../components/Layout";
import Nav from "../../components/Nav";

export default function Fitur() {
  return (
    <Layout>
      <Nav />
      <div className="content text-center mt-5">
        <p className="h3">Fitur Carkus</p>
        <p className="h6">
          Kami menawarkan beberapa fitur yang nantinya akan memudahkan kamu dalam melakukan pencarian perguruan tinggi
          yang sesuai dengan keinginanmu.
        </p>
      </div>

      <section id="team" className="padding mt-4">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-lg-3 col-md-4 col-sm-6 mt-5">
              <div className="card">
                <img src="ballot.png" alt="Responsive image" className="mt-3 mx-5 height: auto;" />
                <div className="card-body">
                  <h2 className="card-title">300+ Kampus</h2>
                  <p className="card-text">Lebih dari 300 perguruan tinggi terdaftar pada situs kami </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mt-5">
              <div className="card">
                <img src="comments.png" alt="Responsive image" className="mt-3 mx-5 height: auto;" />
                <div className="card-body">
                  <h2 className="card-title">Forum</h2>
                  <p className="card-text">Tanyakan apa saja yang kamu ingin tanyakan</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mt-5">
              <div className="card">
                <img src="arrows-repeat.png" alt="Responsive image" className="mt-3 mx-5 height: auto;" />
                <div className="card-body">
                  <h2 className="card-title">Bandingkan</h2>
                  <p className="card-text">Bandingkan perguruan tinggi yang kamu inginkan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
