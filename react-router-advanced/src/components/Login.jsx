import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./ProtectedRoute";
function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    useAuth.login();
    navigate("/profile");
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
