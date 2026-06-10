import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import api from "../../api/axios";
import { FcGoogle } from "react-icons/fc";

type RegisterForm = {
  username: string;
  email: string;
  password: string;
  role: string;
};

const Register = () => {
  const navigate = useNavigate();

  const [error, setError] = useState();

  const [form, setForm] = useState<RegisterForm>({
    username: "",
    email: "",
    password: "",
    role: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setForm({
      ...form,
      role: e.target.value,
    });
  };

  const googleLogin = () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/google";
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await api.post("/auth/register", form);
      navigate("/verify", {
        state: {
          email: form.email,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center p-12">
      {/* Form */}
      <div className="flex flex-col justify-center p-4 gap-4 w-lg">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">
          <span className="text-primary">REGISTER</span> FORM
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              placeholder="Enter username"
              className="px-2 py-4 border border-black outline-none rounded"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter email"
              className="px-2 py-4 border border-black outline-none rounded"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter password"
              className="px-2 py-4 border border-black outline-none rounded"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Role:</label>
            <select
              name="role"
              value={form.role}
              onChange={handleSelectChange}
              className="px-2 py-4 border border-black outline-none rounded"
            >
              <option value="">Select role</option>
              <option value="CUSTOMER">User</option>
              <option value="PAINTER">Painter</option>
            </select>
          </div>
          <input
            type="submit"
            value="Register"
            className="bg-primary py-4 text-white font-semibold rounded cursor-pointer"
          />
          <button
            onClick={googleLogin}
            className="border border-black py-4 rounded cursor-pointer flex gap-2 items-center justify-center"
          >
            <FcGoogle size={24} />
            Continue with Google
          </button>
        </form>

        <NavLink to="/login">
          <div className="flex gap-2 items-center">
            Already Registered?
            <span className="text-primary text-sm hover:underline cursor-pointer">
              Login Now
            </span>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Register;
