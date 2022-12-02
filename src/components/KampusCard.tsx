import { useNavigate } from "react-router";
import type { Campus } from "../types/Campus";

export default function KampusCard({ _id, name, address, imageUrl }: Campus) {
  const navigate = useNavigate();

  function onClick(id: string) {
    navigate(`/kampus/${id}`);
  }

  return (
    <div className="col-lg-3 mb-4">
      <div className="card mx-auto h-100" style={{ width: "18rem" }}>
        <img
          src={imageUrl}
          className="card-img-top"
          alt="Universitas Gadjah Mada"
          style={{ width: "auto", height: "250px" }}
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{address}</p>
        </div>
        <div className="card-footer">
          <a onClick={() => onClick(_id)} className="btn btn-primary">
            Kunjungi
          </a>
        </div>
      </div>
    </div>
  );
}
