import React, { useState } from "react";
import InputFakultas from "./InputFakultas";

export default function FormEditKampus() {
  const [countFakultas, setCountFakultas] = useState(0);
  const [listFakultas, setlistFakultas] = useState([]);
  const [linkGambar, setlinkGambar] = useState("");
  const [namaUniversitas, setnamaUniversitas] = useState("");
  const [akreditasi, setakreditasi] = useState("");
  const [status, setstatus] = useState("");
  const [lokasi, setlokasi] = useState("");
  const [informasi, setinformasi] = useState("");

  const indeksFakultas = () => {
    let arr = []

    for (let index = 0; index < countFakultas; index++) {
      arr.push(index)
    }

    return arr
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataKampus = {
      linkGambar,
      namaUniversitas,
      akreditasi,
      status,
      lokasi,
      informasi,
    };

    console.log(dataKampus);
    console.log(listFakultas);
  };

  console.log(listFakultas)
  return (
    <>
      <div className="card">
        <h5 className="card-header text-center">Edit Data Universitas</h5>
        <div className="card-body px-5">
          <h5 className="card-title">Foto Logo Universitas</h5>
          <div className="row mt-3 border-bottom">
            <div className="col-xl-2 pb-3 text-center">
              <img
                src={
                  linkGambar == ""
                    ? "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                    : linkGambar
                }
                alt=""
                style={{ height: "185px" }}
                className="rounded-3"
              />
            </div>
            <div className="col-xl-10 my-auto">
              <div className="mb-3">
                <label htmlFor="linkImage" className="form-label">
                  Link Image
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="linkImage"
                  placeholder="https://cdn.pixabay.com/blank-profile-picture.png"
                  value={linkGambar}
                  onChange={(e) => setlinkGambar(e.target.value)}
                />
              </div>
            </div>
          </div>

          <h5 className="card-title mt-3">Profile Kampus</h5>
          <div className="row mt-3 border-bottom">
            <div className="col-md-6">
              <label htmlFor="namaUniversitas" className="form-label">
                Nama Universitas
              </label>
              <input
                type="text"
                className="form-control"
                id="namaUniversitas"
                placeholder="Universitas Indonesia"
                value={namaUniversitas}
                onChange={(e) => setnamaUniversitas(e.target.value)}
              />
            </div>
            <div className="col-md-3">
              <label htmlFor="akreditasi" className="form-label">
                Akreditasi
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                id="akreditasi"
                value={akreditasi}
                onChange={(e) => setakreditasi(e.target.value)}
              >
                <option defaultValue>Pilih Akreditasi</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="Belum Terakreditasi">Belum Terakreditasi</option>
              </select>
            </div>
            <div className="col-md-3">
              <label htmlFor="status" className="form-label">
                Status
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                id="status"
                value={status}
                onChange={(e) => setstatus(e.target.value)}
              >
                <option defaultValue>Pilih Status</option>
                <option value="PTN">PTN</option>
                <option value="PTS">PTS</option>
                <option value="Politeknik">Politeknik</option>
              </select>
            </div>
            <div className="col-12 mt-2">
              <label htmlFor="lokasiUniversitas" className="form-label">
                Lokasi Universitas
              </label>
              <input
                type="text"
                className="form-control"
                id="lokasiUniversitas"
                placeholder="Depok, Indonesia"
                value={lokasi}
                onChange={(e) => setlokasi(e.target.value)}
              />
            </div>
            <div className="col-12 mt-2">
              <label htmlFor="informasiUmum" className="form-label">
                Informasi Umum
              </label>
              <textarea
                className="form-control mb-3"
                id="informasiUmum"
                placeholder="Deskripsi Universitas"
                rows="3"
                value={informasi}
                onChange={(e) => setinformasi(e.target.value)}
              ></textarea>
            </div>
          </div>

          <h5 className="card-title mt-3">Fakultas</h5>
          {indeksFakultas().map((item, index) => (
            <InputFakultas indeks={index} listFakultas = {listFakultas} setlistFakultas = {setlistFakultas} />
          ))}
          <div className="row mt-2 border-bottom">
            <div className="col-12 mt-3 mb-3 text-end">
              <button
                type="button"
                className="btn btn-danger me-2"
                onClick={() =>
                  setCountFakultas(countFakultas == 0 ? 0 : countFakultas - 1)
                }
              >
                Hapus
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setCountFakultas(countFakultas + 1)}
              >
                Tambah
              </button>
            </div>
          </div>
          <div className="row mt-3 text-center">
            <div className="col-12">
              <button
                type="button"
                className="btn btn-primary col-4"
                onClick={handleSubmit}
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
