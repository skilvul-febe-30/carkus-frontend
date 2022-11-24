import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardList from "../components/CardList";
import Layout from "../components/Layout";
import ListKampus from "../components/ListKampus";
import Nav from "../components/Nav";
import { getKampus } from "../redux/action/listKampusAction";

function Detail() {
  const state = useSelector((state) => state.listKampus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getKampus());
  }, []);
  
  return (
    <Layout>
      <Nav />
      <ListKampus>
        {state.list.map((el) => (
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
      </ListKampus>
    </Layout>
  );
}

export default Detail;
