import React from "react";

export default function ({namaKampus, sosialMedia, image}) {
  return (
    <div className="detail text-center">
      <img src={image} style={{ height: "200px" }} />
      <p className="h4 mt-3">{namaKampus}</p>
      <p>1888 Pengikut</p>
      <a className="btn btn-primary col-4" role="button">
        <i className="fa-solid fa-plus"></i> ikuti
      </a>
      <p className="h5 mt-4">Sosial Media</p>
      <a href={sosialMedia.situs}>
        <i className="fa-solid fa-earth-americas fa-2xl m-3"></i>
      </a>
      <a href={sosialMedia.instagram}>
        <i className="fa-brands fa-instagram fa-2xl m-3"></i>
      </a>
    </div>
  );
}
