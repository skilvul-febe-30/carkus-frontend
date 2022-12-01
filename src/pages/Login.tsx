import { ChangeEventHandler, FormEventHandler, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { login } from "../api/auth";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import { useAppDispatch } from "../hooks";
import { setCredentials } from "../redux/reducers/auth";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, []);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit: FormEventHandler = async (e) => {
    e.preventDefault();
    const { username, password } = formData;
    setFormData({ ...formData, password: "" });
    try {
      const res = await login(username, password);
      const { userId, token } = res.data;
      dispatch(setCredentials({ userId, token }));
      navigate("/");
    } catch {
      alert("Invalid username or password");
    }
  };

  return (
    <Layout>
      <Nav />
      <form className="container" onSubmit={onSubmit}>
        <div className="row vh-100">
          <div className="col my-auto">
            <div className="card mb-3 mx-auto" style={{ maxWidth: "1500px" }}>
              <div className="row g-0">
                <div className="col-md-6">
                  <img
                    src="https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1484901815/nr8hx938nv4rhp3jflgf.jpg"
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-6 my-auto">
                  <div className="card-body">
                    <h1 className="card-title">Masuk</h1>
                    <div className="card-text mt-2">
                      <div className="mb-3">
                        <label className="form-label">Username</label>
                        <input
                          type="text"
                          className="form-control"
                          id="username"
                          name="username"
                          placeholder="Username"
                          value={formData.username}
                          onChange={onChange}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                          type="password"
                          autoComplete="currentPassword"
                          className="form-control"
                          id="password"
                          name="password"
                          placeholder="Kata Sandi"
                          value={formData.password}
                          onChange={onChange}
                        />
                      </div>
                      <button className="btn btn-primary col-12" type="submit">
                        Masuk
                      </button>
                      <p className="text-center text-muted mt-2">
                        Belum punya akun? Daftar{" "}
                        <span>
                          <Link to={"/register"}>disini.</Link>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Layout>
  );
}
