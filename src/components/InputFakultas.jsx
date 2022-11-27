import React from "react";

export default function InputFakultas(indeks) {
    
  return (
    <>
      <div className="row mt-2" key={indeks}>
        <div className="col-md-7">
          <label htmlFor="namaFakultas" className="form-label">
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
          <label htmlFor="akreditasiFakultas" className="form-label">
            Akreditasi Fakultas
          </label>
          <select
            className="form-select"
            aria-label="Default select example"
            id="akreditasiFakultas"
          >
            <option defaultValue>Pilih Akreditasi</option>
            <option value="1">A</option>
            <option value="2">B</option>
            <option value="3">C</option>
            <option value="4">Belum Terakreditasi</option>
          </select>
        </div>
        <div className="col-md-2">
          <label htmlFor="jumlahProdi" className="form-label">
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
    </>
  );
}
