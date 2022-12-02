import { ChangeEventHandler, FormEventHandler, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../api/auth";
import Layout from "../components/Layout";
import Nav from "../components/Nav";

export default function Register() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, []);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit: FormEventHandler = async (e) => {
    e.preventDefault();
    const { username, password, confirmPassword } = formData;
    setFormData({ ...formData, password: "", confirmPassword: "" });
    if (password !== confirmPassword) {
      return alert("Password and confirm password must be the same");
    }
    try {
      await register(username, password);
      alert("Register success");
      navigate("/");
    } catch {
      alert("Username already taken");
    }
  };

  return (
    <Layout>
      <Nav />
      <form className="container" onSubmit={onSubmit}>
        <div className="row vh-100">
          <div className="col my-auto">
            <div className="card mx-auto" style={{ maxWidth: "1500px" }}>
              <div className="row g-0 ">
                <div className="col-md-6 my-auto">
                  <img
                    src="https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1484901815/nr8hx938nv4rhp3jflgf.jpg"
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <h1 className="card-title">Daftar sekarang secara gratis!</h1>
                    <div className="card-text">
                      <div className="row">
                        <div className="col-12 my-2">
                          <label className="form-label">Username</label>
                          <input
                            type="text"
                            className="form-control"
                            id="username"
                            name="username"
                            placeholder="Username"
                            required
                            value={formData.username}
                            onChange={onChange}
                          />
                        </div>
                        <div className="col-12 my-2">
                          <label className="form-label">Password</label>
                          <input
                            type="password"
                            autoComplete="newPassword"
                            className="form-control"
                            id="password"
                            name="password"
                            placeholder="Password"
                            required
                            value={formData.password}
                            onChange={onChange}
                          />
                        </div>
                        <div className="col-12 my-2">
                          <label className="form-label">Confirm Password</label>
                          <input
                            type="password"
                            autoComplete="confirmPassword"
                            className="form-control"
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            required
                            value={formData.confirmPassword}
                            onChange={onChange}
                          />
                        </div>
                        <div className="col-12 mt-1">
                          <button className="btn btn-primary col-12" type="submit">
                            Daftar
                          </button>
                          <p className="text-center text-muted mt-2">
                            Sudah punya akun? Masuk{" "}
                            <span>
                              <Link to={"/login"}>disini.</Link>
                            </span>
                          </p>
                        </div>
                      </div>
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
