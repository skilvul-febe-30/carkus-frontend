import { useEffect } from "react";
import { useNavigate } from "react-router";
import { createCampus } from "../api/campus";
import { handleAuthError } from "../api/handleAuthError";
import EditKampusForm from "../components/EditKampusForm";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import { useAppSelector } from "../hooks";
import type { Campus } from "../types/Campus";

export default function BuatKampus() {
  const navigate = useNavigate();
  const userId = useAppSelector((state) => state.authState.userId);
  const campus: Omit<Campus, "_id" | "admin" | "threads"> = {
    name: "",
    address: "",
    description: "",
    accreditation: "",
    status: "",
    faculties: [],
    links: {
      instagram: "",
      website: "",
    },
    imageUrl: "",
  };
  useEffect(() => {
    if (!userId) {
      navigate("/");
    }
  }, []);
  const submitForm = async (campus: Partial<Campus>) => {
    try {
      const res = await createCampus(campus);
      navigate(`/kampus/${res.data._id}`);
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
