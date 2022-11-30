import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { deleteThread } from "../redux/action/listThreadAction";

export default function DiskusiKampus({ name, diskusi, createdAt, idThread }) {
  let authName = localStorage.getItem("name").toLowerCase();
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = (idKampus, idThread) => {
    let confirmDelete = confirm("Hapus thread?");
    confirmDelete && dispatch(deleteThread(idKampus, idThread));
  };
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
            <p id="name" className="p-2">
              <span className="h4">{name}</span>{" "}
              <span className="text-muted">
                <br />
                {createdAt}
              </span>
            </p>
            {authName == name.toLowerCase() ? (
              <i
                className="fa-solid fa-trash p-2 ms-auto"
                onClick={() => handleDelete(id, idThread)}
              ></i>
            ) : (
              <p className="p-2 ms-auto"> </p>
            )}
          </div>
        </div>
        <div className="row">
          <div className="col ms-2">
            <p>{diskusi}</p>
          </div>
        </div>
        <div className="row p-2">
          <div className="col-12">
            <p className="text-muted ms-2">Komentar</p>
          </div>
          <div className="col-12 d-flex">
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              style={{ height: "50px" }}
              className="rounded-circle"
            />
            <div className="row ms-1 mb-2 w-100">
              <div className="col bg-secondary bg-opacity-10 rounded-3">
                <div className="d-flex">
                  <p className="my-auto">
                    <strong>Baim</strong>
                  </p>
                  <p className="ms-auto my-auto text-muted"> 29 Januari</p>
                </div>
                <p className="my-auto mb-2">Coba Komentar</p>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Tambah Komentar"
              />
              <button
                class="btn btn-primary"
                type="button"
                id="button-addon2"
              >
                Komentar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
