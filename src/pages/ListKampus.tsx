import { useEffect, useState } from "react";
import { getCampus } from "../api/campus";
import KampusCard from "../components/KampusCard";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import type { Campus } from "../types/Campus";

export default function ListKampus() {
  const [search, setSearch] = useState("");
  const [campus, setCampus] = useState<Campus[]>([]);

  const searchResult = campus.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  });

  useEffect(() => {
    getCampus().then((res) => {
      setCampus(res.data);
    });
  }, []);

  return (
    <Layout>
      <Nav />
      <div className="row">
        <div className="col-md-5 mx-auto my-5">
          <form className="d-flex" onSubmit={(e) => e.preventDefault()}>
            <label className="visually-hidden">Kampus</label>
            <input
              type="text"
              className="form-control"
              id="specificSizeInputName"
              placeholder="Cari Kampus"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <a className="btn btn-primary ms-2" href="#" role="button">
              Cari
            </a>
          </form>
        </div>
      </div>
      <section id="content">
        <div className="container">
          <div className="row" id="listCard">
            {searchResult.map((campus) => (
              <KampusCard key={campus._id} {...campus} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
