import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAppDispatch } from "../hooks";
import { logout } from "../redux/reducers/auth";

export default function Logout() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(logout());
    navigate("/login");
  }, []);
  return <div></div>;
}
