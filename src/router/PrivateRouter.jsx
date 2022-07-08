import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));

  return userInfo ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRouter;
