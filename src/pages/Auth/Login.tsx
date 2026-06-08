import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import api from "../../api/axios";

type LoginForm = {
  email: string;
  password: string;
};

type User = {
  id: number;
  username: string;
  email: string;
  role: string;
};

type LoginResponse = {
  token: string;
  userDTO: User;
};

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState<LoginForm>({
    email: "",
    password: "",
  });
  const { login } = useAuth();

  const googleLogin = () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/google";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await api.post<LoginResponse>("/auth/login", form);
      login(response.data.token, response.data.userDTO);
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen gap-4">
      <h1 className="text-2xl font-bold">Login</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter email"
            className="p-2 border border-black outline-none"
            autoComplete="off"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter password"
            className="p-2 border border-black outline-none"
          />
        </div>
        <div className="flex justify-end">
          <span className="text-primary text-sm hover:underline cursor-pointer">
            Forgot Password?
          </span>
        </div>
        <input
          type="submit"
          value="Login"
          className="bg-primary py-2 text-white font-semibold rounded"
        />
        <button onClick={googleLogin}>Login with Google</button>
      </form>

      <NavLink to="/register">Register</NavLink>
    </div>
  );
};

export default Login;
