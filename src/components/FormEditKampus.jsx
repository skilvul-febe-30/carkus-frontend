import React from "react";

export default function FormEditKampus() {
  return (
    <>
      <div className="card">
        <h5 className="card-header text-center">Edit Data Universitas</h5>
        <div className="card-body px-5">
          <h5 className="card-title">Foto Logo Universitas</h5>
          <div className="row mt-3 border-bottom">
            <div className="col-xl-2 pb-3 text-center">
              <img
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
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
                />
              </div>
            </div>
          </div>

          <h5 className="card-title mt-3">Profile Kampus</h5>
          <div className="row mt-3 border-bottom">
            <div className="col-md-6">
              <label for="namaUniversitas" className="form-label">
                Nama Universitas
              </label>
              <input
                type="text"
                className="form-control"
                id="namaUniversitas"
                placeholder="Universitas Indonesia"
              />
            </div>
            <div className="col-md-3">
              <label for="akreditasi" className="form-label">
                Akreditasi
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                id="akreditasi"
              >
                <option selected>Pilih Akreditasi</option>
                <option value="1">A</option>
                <option value="2">B</option>
                <option value="3">C</option>
                <option value="4">Belum Terakreditasi</option>
              </select>
            </div>
            <div className="col-md-3">
              <label for="status" className="form-label">
                Status
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                id="status"
              >
                <option selected>Pilih Status</option>
                <option value="1">PTN</option>
                <option value="2">PTS</option>
                <option value="3">Politeknik</option>
              </select>
            </div>
            <div className="col-12 mt-2">
              <label for="lokasiUniversitas" className="form-label">
                Lokasi Universitas
              </label>
              <input
                type="text"
                className="form-control"
                id="lokasiUniversitas"
                placeholder="Depok, Indonesia"
              />
            </div>
            <div className="col-12 mt-2">
              <label for="informasiUmum" className="form-label">
                Informasi Umum
              </label>
              <textarea
                className="form-control mb-3"
                id="informasiUmum"
                placeholder="Deskripsi Universitas"
                rows="3"
              ></textarea>
            </div>
          </div>

          <h5 className="card-title mt-3">Fakultas</h5>
          <div className="row mt-2">
            <div className="col-md-7">
              <label for="namaFakultas" className="form-label">
                Nama Fakultas
              </label>
              <input
                type="text"
                className="form-control"
                id="namaFakultas"
                placeholder="Fakultas Pertanian"
              />
            </div>
            <div className="col-md-3">
              <label for="akreditasiFakultas" className="form-label">
                Akreditasi Fakultas
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                id="akreditasiFakultas"
              >
                <option selected>Pilih Akreditasi</option>
                <option value="1">A</option>
                <option value="2">B</option>
                <option value="3">C</option>
                <option value="4">Belum Terakreditasi</option>
              </select>
            </div>
            <div className="col-md-2">
              <label for="jumlahProdi" className="form-label">
                Jumlah Prodi
              </label>
              <input
                type="text"
                className="form-control"
                id="jumlahProdi"
                placeholder="5"
              />
            </div>
          </div>
          <div className="row mt-2 border-bottom">
            <div className="col-12 mt-3 mb-3 text-end">
              <button type="button" class="btn btn-danger me-2">
                Hapus
              </button>
              <button type="button" class="btn btn-primary">
                Tambah
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
