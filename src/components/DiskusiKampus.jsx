import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { deleteThread } from "../redux/action/listThreadAction";

export default function DiskusiKampus({ name, diskusi, createdAt, idThread }) {

  let authName = localStorage.getItem("name").toLowerCase();
  const { id } = useParams();
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleDelete = (idKampus, idThread) => {
    let confirmDelete = confirm("Hapus thread?")
    confirmDelete && dispatch(deleteThread(idKampus, idThread))
  }
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
              <i className="fa-solid fa-trash p-2 ms-auto" onClick={() => handleDelete(id, idThread)}></i>
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
      </div>
    </>
  );
}
