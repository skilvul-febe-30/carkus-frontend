import React from "react";

export default function DiskusiKampus({ name, diskusi, createdAt }) {
  return (
    <>
      <div className="col">
        <div className="row my-2">
          <div className="col d-flex justify-content-between">
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              style={{ height: "70px" }}
              className="p-2"
            />
            <p id="name" className="h4 p-2">
              {name}
            </p>
            <p id="date" className="text-muted p-2 ms-auto">
              {createdAt}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col ms-2">
            <p>{diskusi}</p>
            <div className="d-flex justify-content-end pb-2 mb-2 me-3">
              <i className="fa-solid fa-thumbs-up fa-xl me-2"></i>
              <i className="fa-solid fa-reply fa-xl"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
