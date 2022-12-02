import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { updateCampus } from "../api/campus";
import { handleAuthError } from "../api/handleAuthError";
import EditKampusForm from "../components/EditKampusForm";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import { useAppDispatch, useAppSelector } from "../hooks";
import { fetchCampus } from "../redux/reducers/campus";
import type { Campus } from "../types/Campus";

export default function EditKampus() {
  const { campusId = "" } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userId = useAppSelector((state) => state.authState.userId);
  const campus = useAppSelector((state) => state.campusState.campus);
  useEffect(() => {
    dispatch(fetchCampus(campusId))
      .then((res) => {
        if (!userId || res.payload.admin !== userId) {
          navigate(`/kampus/${campusId}`);
        }
      })
      .catch(() => {
        navigate("/kampus");
      });
  }, []);
  const submitForm = async (campus: Partial<Campus>) => {
    try {
      await updateCampus(campusId, campus);
      navigate(`/kampus/${campusId}`);
    } catch (err) {
      handleAuthError(err);
    }
  };
  return (
    <Layout>
      <Nav />
      {campus && <EditKampusForm campus={campus} submitForm={submitForm} />}
    </Layout>
  );
}
