import type { ChangeEventHandler } from "react";
import type { Faculty } from "../types/Campus";

interface Props {
  faculty: Faculty;
  handleDelete: () => void;
  handleChange: ChangeEventHandler;
}
export default function InputFakultas({ faculty, handleDelete, handleChange }: Props) {
  return (
    <div className="row mt-2 border-bottom">
      <div className="col-md-8">
        <label htmlFor="name" className="form-label">
          Nama Fakultas
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          placeholder="Fakultas Pertanian"
          value={faculty.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="col-md-3">
        <label htmlFor="accreditation" className="form-label">
          Akreditasi Fakultas
        </label>
        <select
          className="form-select"
          aria-label="Default select example"
          id="accreditation"
          name="accreditation"
          value={faculty.accreditation}
          onChange={handleChange}
          required
        >
          <option value="">Pilih Akreditasi</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="Belum Terakreditasi">Belum Terakreditasi</option>
        </select>
      </div>
      <div className="col-md-1">
        <button type="button" className="btn btn-danger mt-4" onClick={handleDelete}>
          Hapus
        </button>
      </div>
    </div>
  );
}
