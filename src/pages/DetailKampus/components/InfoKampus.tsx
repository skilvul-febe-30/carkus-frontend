import type { Campus } from "../../../types/Campus";

export default function InfoKampus({ name, imageUrl, links }: Campus) {
  return (
    <div className="detail text-center">
      <img src={imageUrl} style={{ height: "200px" }} />
      <p className="h4 mt-3">{name}</p>
      <p className="h5 mt-4">Sosial Media</p>
      <a href={links.website}>
        <i className="fa-solid fa-earth-americas fa-2xl m-3"></i>
      </a>
      <a href={links.instagram}>
        <i className="fa-brands fa-instagram fa-2xl m-3"></i>
      </a>
    </div>
  );
}
