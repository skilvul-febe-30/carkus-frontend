import React from "react";
import { useNavigate } from "react-router";

export default function CardList({ namaKampus, lokasi, urlImg, id }) {
  const navigate = useNavigate();
  const handleId = (id) => {
    navigate(`/detail/${id}`);
  };
  return (
    <div className="card mx-auto h-100" style={{ width: "18rem" }}>
      <img
        src={urlImg}
        className="card-img-top"
        alt="Universitas Gadjah Mada"
        style={{ width: "auto", height: "250px" }}
      />
      <div className="card-body">
        <h5 className="card-title">{namaKampus}</h5>
        <p className="card-text">{lokasi}</p>
      </div>
      <div className="card-footer">
        <a onClick={() => handleId(id)} className="btn btn-primary">
          Kunjungi 
        </a>
      </div>
    </div>
  );
}
