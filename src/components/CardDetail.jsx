import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getThread, uploadThread } from "../redux/action/listThreadAction";
import DiskusiKampus from "./DiskusiKampus";
import FakultasKampus from "./FakultasKampus";
import KampusSosmed from "./KampusSosmed";
import ProfileKampus from "./ProfileKampus";

export default function CardDetail({ data }) {
  const state = useSelector((state) => state.listThread);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [teksDiskusi, setTeksDiskusi] = useState("")

  useEffect(() => {
    dispatch(getThread(`${id}`));
  }, []);

  const handleInput = (e) => {
    setTeksDiskusi(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const date = new Date().toLocaleDateString('ind-ID', { year: 'numeric', month: 'long', day: 'numeric'})
    const data = {
      name: localStorage.getItem("name"),
      diskusi: teksDiskusi,
      createdAt: date,
      kampuId: id
    }

    dispatch(uploadThread(data, id))
    setTeksDiskusi("")
  }

  console.log(state);

  return (
    <>
      <div className="row g-4">
        <div className="col-lg-4 border border-1 p-3">
          <KampusSosmed
            namaKampus={data.namaKampus}
            sosialMedia={data.sosialMedia}
            image={data.image}
          />
        </div>
        <div className="col-lg-8" id="main">
          <div className="row border border-1">
            <div className="col p-3">
              <ul
                className="nav nav-tabs justify-content-center"
                id="myTab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#profile-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="profile-tab-pane"
                    aria-selected="false"
                  >
                    <i className="fa-solid fa-building-user fa-xl me-2"></i>
                    Profile
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="fakultas-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#fakultas-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="fakultas-tab-pane"
                    aria-selected="true"
                  >
                    <i className="fa-solid fa-graduation-cap fa-xl me-2"></i>
                    Fakultas
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="forum-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#forum-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="forum-tab-pane"
                    aria-selected="false"
                  >
                    <i className="fa-solid fa-comments fa-xl me-2"></i>Diskusi
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="profile-tab-pane"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div className="row m-2">
                    <ProfileKampus
                      namaKampus={data.namaKampus}
                      lokasi={data.lokasi}
                      status={data.status}
                      akreditasi={data.akreditasi}
                      informasi={data.informasi}
                    />
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="fakultas-tab-pane"
                  role="tabpanel"
                  aria-labelledby="fakultas-tab"
                >
                  <div className="row m-2">
                    {data.fakultas.map(
                      ({ akreditasi, namaFakultas, programStudi }, key) => (
                        <div className="col-lg-6" key={key}>
                          <FakultasKampus
                            akreditasi={akreditasi}
                            namaFakultas={namaFakultas}
                            programStudi={programStudi}
                          />
                        </div>
                      )
                    )}
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="forum-tab-pane"
                  role="tabpanel"
                  aria-labelledby="forum-tab"
                >
                  <div className="row m-3" id="navbar-example2">
                    <div className="col">
                      <textarea
                        className="form-control"
                        aria-label="With textarea"
                        placeholder="Apa yang anda pikirkan?"
                        value={teksDiskusi}
                        onChange={handleInput}
                      ></textarea>
                      <div className="d-flex justify-content-end align-items-center mt-3">
                        <i className="fa-solid fa-camera fa-2xl me-2"></i>
                        <button type="button" className="btn btn-primary" onClick={handleSubmit}>
                          Unggah
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    data-bs-spy="scroll"
                    data-bs-target="#navbar-example2"
                    data-bs-root-margin="0px 0px -40%"
                    data-bs-smooth-scroll="true"
                    className="scrollspy-example bg-light p-3 rounded-2"
                  >
                    <div id="status">
                      {state.list.map((el) => (
                        <div className="row border bg-white mb-2" key={el.id}>
                          <DiskusiKampus
                            name={el.name}
                            diskusi={el.diskusi}
                            createdAt={el.createdAt}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
