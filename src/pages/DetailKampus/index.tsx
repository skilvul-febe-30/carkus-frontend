import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { deleteCampus } from "../../api/campus";
import { handleAuthError } from "../../api/handleAuthError";
import { createThread } from "../../api/threads";
import Layout from "../../components/Layout";
import Nav from "../../components/Nav";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchCampus } from "../../redux/reducers/campus";
import FakultasKampus from "./components/FakultasKampus";
import InfoKampus from "./components/InfoKampus";
import ProfilKampus from "./components/ProfilKampus";
import ThreadKampus from "./components/ThreadKampus";

export default function DetailKampus() {
  const { campusId = "" } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const campus = useAppSelector((state) => state.campusState.campus);
  const userId = useAppSelector((state) => state.authState.userId);
  const [threadContent, setThreadContent] = useState("");

  useEffect(() => {
    dispatch(fetchCampus(campusId));
  }, []);

  async function onSubmitThread() {
    setThreadContent("");
    try {
      await createThread(campusId, {
        title: "Title",
        content: threadContent,
      });
      dispatch(fetchCampus(campusId));
    } catch (err) {
      handleAuthError(err);
    }
  }

  function editKampus() {
    navigate(`/edit/kampus/${campusId}`);
  }

  async function deleteKampus() {
    if (!confirm("Yakin mau hapus kampus ini?")) return;
    try {
      await deleteCampus(campusId);
      navigate("/kampus");
    } catch (err) {
      handleAuthError(err);
    }
  }

  return (
    <Layout>
      <Nav />
      {campus && (
        <div className="row g-4">
          <div className="col-lg-4 border border-1 p-3">
            {campus.admin === userId && (
              <div className="d-flex justify-content-end">
                <a className="fa-solid fa-edit ms-auto" onClick={editKampus}></a>
                <a className="fa-solid fa-trash ms-2" style={{ color: "red" }} onClick={deleteKampus}></a>
              </div>
            )}
            <InfoKampus {...campus} />
          </div>
          <div className="col-lg-8" id="main">
            <div className="row border border-1">
              <div className="col p-3">
                <ul className="nav nav-tabs justify-content-center" id="myTab" role="tablist">
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
                      <ProfilKampus {...campus} />
                    </div>
                  </div>
                  <div className="tab-pane fade" id="fakultas-tab-pane" role="tabpanel" aria-labelledby="fakultas-tab">
                    <div className="row m-2">
                      {campus.faculties.map((faculty, key) => (
                        <div className="col-lg-6" key={key}>
                          <FakultasKampus {...faculty} />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="tab-pane fade" id="forum-tab-pane" role="tabpanel" aria-labelledby="forum-tab">
                    <div className="row m-3" id="navbar-example2">
                      <div className="col">
                        <textarea
                          className="form-control"
                          aria-label="With textarea"
                          placeholder="Apa yang anda pikirkan?"
                          value={threadContent}
                          onChange={(e) => setThreadContent(e.target.value)}
                        ></textarea>
                        <div className="d-flex justify-content-end align-items-center mt-3">
                          <button type="button" className="btn btn-primary" onClick={onSubmitThread}>
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
                        {campus.threads.map((thread) => (
                          <div className="row border bg-white mb-2" key={thread._id}>
                            <ThreadKampus {...thread} />
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
      )}
    </Layout>
  );
}
