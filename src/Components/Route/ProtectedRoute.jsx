import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

function ProtectedRoute({ component: Component, ...restOfProps }) {
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  return (
    <Routes>
      <Route
        {...restOfProps}
        render={(props) =>
          isAuthenticated ? <Component {...props} /> : <Navigate to="/login" />
        }
      />
    </Routes>
  );
}

export default ProtectedRoute;
