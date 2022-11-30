import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CardList from "../components/CardList";
import Layout from "../components/Layout";
import ListKampus from "../components/ListKampus";
import Nav from "../components/Nav";
import { getKampus } from "../redux/action/listKampusAction";

function Detail() {
  const state = useSelector((state) => state.listKampus);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [dataFilter, setDataFilter] = useState([]);


  const handleInput = (e) => {
    setSearch(e.target.value);
    let updatedList = [...state.list];

    updatedList = updatedList.filter((item) => {
      return item.namaKampus.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

    setDataFilter(updatedList);
  };

  useEffect(() => {
    dispatch(getKampus());
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
              onChange={handleInput}
            />
            <a
              name=""
              id=""
              className="btn btn-primary ms-2"
              href="#"
              role="button"
            >
              Cari
            </a>
          </form>
        </div>
      </div>

      <ListKampus>
        {search == "" &&
          state.list.map((el) => (
            <div key={el.id} className="col-lg-3 mb-4">
              <CardList
                key={el.id}
                namaKampus={el.namaKampus}
                lokasi={el.lokasi}
                urlImg={el.image}
                id={el.id}
              />
            </div>
          ))}

        {dataFilter != 0 &&
          dataFilter.map((el) => (
            <>
              <div key={el.id} className="col-lg-3 mb-4">
                <CardList
                  key={el.id}
                  namaKampus={el.namaKampus}
                  lokasi={el.lokasi}
                  urlImg={el.image}
                  id={el.id}
                />
              </div>
            </>
          ))}
      </ListKampus>
    </Layout>
  );
}

export default Detail;
