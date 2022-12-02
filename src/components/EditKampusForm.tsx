import { ChangeEventHandler, FormEventHandler, useState } from "react";
import type { Campus } from "../types/Campus";
import InputFakultas from "./InputFakultas";

interface Props {
  campus: Omit<Campus, "_id" | "admin" | "threads">;
  submitForm: (data: Partial<Campus>) => void;
}

export default function EditKampusForm({ campus, submitForm }: Props) {
  const [btnDisabled, setBtnDisabled] = useState(false);
  const { links, ...rest } = campus;
  const [formData, setFormData] = useState({
    ...rest,
    instagram: links.instagram,
    website: links.website,
  });
  const onChange: ChangeEventHandler<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement> = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleFacultyDelete = (index: number) => {
    return () => {
      const faculties = formData.faculties.filter((_, i) => i !== index);
      setFormData({ ...formData, faculties });
    };
  };
  const handleFacultyChange = (index: number) => {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      const faculties = formData.faculties.map((faculty, i) => {
        if (i === index) {
          return { ...faculty, [event.target.name]: event.target.value };
        }
        return faculty;
      });
      setFormData({ ...formData, faculties });
    };
  };
  const onSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    setBtnDisabled(true);
    const { instagram, website, ...campus } = formData;
    submitForm({
      ...campus,
      links: { instagram, website },
    });
  };
  return (
    <form className="card" onSubmit={onSubmit}>
      <h5 className="card-header text-center">Edit Data Universitas</h5>
      <div className="card-body px-5">
        <h5 className="card-title">Foto Logo Universitas</h5>
        <div className="row mt-3 border-bottom">
          <div className="col-xl-2 pb-3 text-center">
            <img
              src={
                formData.imageUrl ??
                "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              }
              alt={formData.name}
              style={{ height: "185px" }}
              className="rounded-3"
            />
          </div>
          <div className="col-xl-10 my-auto">
            <div className="mb-3">
              <label htmlFor="imageUrl" className="form-label">
                Link Image
              </label>
              <input
                className="form-control"
                id="imageUrl"
                name="imageUrl"
                placeholder="https://cdn.pixabay.com/blank-profile-picture.png"
                value={formData.imageUrl}
                onChange={onChange}
                required
              />
            </div>
          </div>
        </div>

        <h5 className="card-title mt-3">Profile Kampus</h5>
        <div className="row mt-3 border-bottom">
          <div className="col-md-6">
            <label htmlFor="name" className="form-label">
              Nama Universitas
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Nama Universitas"
              value={formData.name}
              onChange={onChange}
              required
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="accreditation" className="form-label">
              Akreditasi
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              id="accreditation"
              name="accreditation"
              value={formData.accreditation}
              onChange={onChange}
              required
            >
              <option value="">Pilih Akreditasi</option>
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
              name="status"
              value={formData.status}
              onChange={onChange}
              required
            >
              <option value="">Pilih Status</option>
              <option value="PTN">PTN</option>
              <option value="PTS">PTS</option>
              <option value="Politeknik">Politeknik</option>
            </select>
          </div>
          <div className="col-12 mt-2">
            <label htmlFor="address" className="form-label">
              Lokasi Universitas
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              name="address"
              placeholder="Depok, Indonesia"
              value={formData.address}
              onChange={onChange}
              required
            />
          </div>
          <div className="col-12 mt-2">
            <label htmlFor="description" className="form-label">
              Informasi Umum
            </label>
            <textarea
              className="form-control mb-3"
              id="description"
              name="description"
              placeholder="Deskripsi Universitas"
              rows={3}
              value={formData.description}
              onChange={onChange}
              required
            ></textarea>
          </div>
        </div>

        <h5 className="card-title mt-3">Fakultas</h5>

        {formData.faculties.map((faculty, index) => (
          <InputFakultas
            key={index}
            faculty={faculty}
            handleDelete={handleFacultyDelete(index)}
            handleChange={handleFacultyChange(index)}
          />
        ))}
        <div className="row mt-2 border-bottom">
          <div className="col-12 mt-3 mb-3 text-end">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                setFormData((prev) => ({ ...prev, faculties: [...prev.faculties, { name: "", accreditation: "" }] }));
              }}
            >
              Tambah
            </button>
          </div>
        </div>
        <div className="row mt-3 text-center">
          <div className="col-12">
            <button type="submit" className="btn btn-primary col-4" disabled={btnDisabled}>
              Simpan
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
