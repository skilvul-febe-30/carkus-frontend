import type { Faculty } from "../../../types/Campus";

export default function FakultasKampus({ name, accreditation }: Faculty) {
  return (
    <div className="short-detail border p-3 mb-3">
      <p className="h3">{name}</p>
      <div className="info d-flex justify-content-start">
        <p id="akreditas" className="text-muted me-3">
          Akreditas: <span className="text-black">{accreditation}</span>{" "}
        </p>
      </div>
    </div>
  );
}
