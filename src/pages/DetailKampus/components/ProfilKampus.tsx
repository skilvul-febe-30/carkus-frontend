import type { Campus } from "../../../types/Campus";

export default function ProfilKampus({ name, address, description, status, accreditation }: Campus) {
  return (
    <div className="col-12">
      <div className="short-detail border p-3 mb-3">
        <p className="h3">{name}</p>
        <p className="text-muted">{address}</p>
        <div className="info d-flex justify-content-evenly">
          <p id="akreditas" className="text-muted">
            Akreditas: <span className="text-black">{accreditation}</span>{" "}
          </p>
          <p id="akreditas" className="text-muted">
            Tipe: <span className="text-black">{status}</span>{" "}
          </p>
        </div>
      </div>
      <div className="content p-3 border">
        <p className="h2">Informasi Umum</p>
        <p id="detail" className="lh-2">
          {description}
        </p>
      </div>
    </div>
  );
}
