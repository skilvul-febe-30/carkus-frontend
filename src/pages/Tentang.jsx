import React from "react";
import Layout from "../components/Layout";
import Nav from "../components/Nav";


function tentang() {
    return (
        <Layout>
            <Nav />
            <div class="container-fluid pt-5 pb-5">
        <div class="container">
            <div class="clearfix pt-5">
                <img src="/public/tentang.png" class="col-md-6 float-md-end mb-3 crop-img" width="500" height="500" />
                <font size="10"><p class="trf"><strong>TENTANG CARI KAMPUS</strong></p></font>
                <font size="5"><p>Cari kampus merupakan sebuah solusi dari permasalahan para remaja yang saat ini masih mengalami kebingungan dalam menentukan kampus yang ingin dipilih. Dengan adanya cari kampus, diharapkan para remaja dapat mengetahui tentang informasi perguruan tinggi yang ingin mereka pilih nantinya.</p></font>
            </div>
        </div>
    </div>
        </Layout>
    );
}
export default tentang;