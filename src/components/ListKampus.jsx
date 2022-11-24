import React, { Children } from "react";

export default function ListKampus({children}) {
  return (
    <div>
      <section id="content">
        <div className="container">
          <div className="row">
            <div className="col-md-5 mx-auto my-5">
              <form className="d-flex">
                <label className="visually-hidden">
                  Kampus
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="specificSizeInputName"
                  placeholder="Cari Kampus"
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
          <div className="row" id="listCard">
            {children}
          </div>
        </div>
      </section>
    </div>
  );
}
