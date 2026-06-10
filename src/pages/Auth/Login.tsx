import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import api from "../../api/axios";
import { FcGoogle } from "react-icons/fc";

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
  const { login } = useAuth();

  const [form, setForm] = useState<LoginForm>({
    email: "",
    password: "",
  });

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
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center p-12">
      {/* Form */}
      <div className="flex flex-col justify-center p-4 gap-4 w-lg">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">
          <span className="text-primary">LOGIN</span> FORM
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="px-2 py-4 border border-black outline-none rounded"
              autoComplete="off"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="px-2 py-4 border border-black outline-none rounded"
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
            className="bg-primary py-4 text-white font-semibold rounded cursor-pointer"
          />
          <button
            onClick={googleLogin}
            className="border border-black py-4 rounded cursor-pointer flex gap-2 items-center justify-center"
          >
            <FcGoogle size={24} />
            Login with Google
          </button>
        </form>

        <NavLink to="/register">
          <div className="flex gap-2 items-center">
            New Here?
            <span className="text-primary text-sm hover:underline cursor-pointer">
              Register Now
            </span>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Login;
