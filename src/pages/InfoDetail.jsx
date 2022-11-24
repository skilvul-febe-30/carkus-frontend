import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import CardDetail from "../components/CardDetail";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import { getKampus } from "../redux/action/listKampusAction";

export default function InfoDetail() {
  const { id } = useParams();
  const state = useSelector((state) => state.listKampus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getKampus());
  }, []);
  
  return (
    <>
      <Layout>
        <Nav />
        {state.list.filter((el) => el.id == +id).map((el, key) => (
          <div className="container mt-5" key={key}>
            <CardDetail data={el}/>
          </div>
        )) }
      </Layout>
    </>
  );
}
