import React from "react";
import Layout from "../components/Layout";
import Nav from "../components/Nav";


function fitur() {
return (
<Layout>
    <Nav />
    <div class="content text-center mt-5">
        <p class="h3">Fitur Carcus</p>
        <p class="h6">Kami menawarkan beberapa fitur yang nantinya akan memudahkan kamu dalam melakukan pencarian perguruan tinggi yang sesuai dengan keinginanmu.</p>
    </div>

    <section id="team" class="padding mt-4">
      <div class="container">
        <div class="row justify-content-md-center">
          <div class="col-lg-3 col-md-4 col-sm-6 mt-5">

            <div class="card">
                <img src="ballot.png" alt="Responsive image" class="mt-3 mx-5 height: auto;" />
                <div class="card-body">
                    <h2 class="card-title">300+ Kampus</h2>
                    <p class="card-text">Lebih dari 300 perguruan tinggi terdaftar pada situs kami </p>
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 mt-5">
            <div class="card">
                <img src="comments.png" alt="Responsive image" class="mt-3 mx-5 height: auto;" />
                <div class="card-body">
                    <h2 class="card-title">Forum</h2>
                    <p class="card-text">Tanyakan apa saja yang kamu ingin tanyakan</p>
                </div>
            </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 mt-5">
            <div class="card">
                <img src="arrows-repeat.png" alt="Responsive image" class="mt-3 mx-5 height: auto;" />
                <div class="card-body">
                    <h2 class="card-title">Bandingkan</h2>
                    <p class="card-text">Bandingkan perguruan tinggi yang kamu inginkan</p>
                </div>
            </div>
        </div>
        </div>
      </div>
       
    </section>
</Layout>


);
}

export default fitur;