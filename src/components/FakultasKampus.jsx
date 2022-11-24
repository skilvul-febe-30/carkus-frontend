import React from "react";

export default function FakultasKampus({
  akreditasi,
  namaFakultas,
  programStudi,
}) {
  return (
    <div className="short-detail border p-3 mb-3">
      <p className="h3">{namaFakultas}</p>
      <div className="info d-flex justify-content-start">
        <p id="akreditas" className="text-muted me-3">
          Akreditas: <span className="text-black">{akreditasi}</span>{" "}
        </p>
        <p id="akreditas" className="text-muted">
          Program Studi: <span className="text-black">{programStudi}</span>{" "}
        </p>
      </div>
    </div>
  );
}
