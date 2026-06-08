import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import api from "../../api/axios";

type RegisterForm = {
  username: string;
  email: string;
  password: string;
  role: string;
};

const Register = () => {
  const navigate = useNavigate();
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
      alert("Registration successful");
      navigate("/login");
    } catch (error) {
      console.error(error);
      alert("Registration failed");
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen gap-4">
      <h1 className="text-2xl font-bold">Register</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            placeholder="Enter username"
            className="p-2 border border-black outline-none"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter email"
            className="p-2 border border-black outline-none"
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
        <div className="flex flex-col gap-1">
          <label>Role</label>
          <select
            name="role"
            value={form.role}
            onChange={handleSelectChange}
            className="p-2 border border-black outline-none"
          >
            <option value="">Select role</option>
            <option value="CUSTOMER">User</option>
            <option value="PAINTER">Painter</option>
          </select>
        </div>
        <input
          type="submit"
          value="Register"
          className="bg-primary py-2 text-white font-semibold rounded"
        />
        <button onClick={googleLogin}>Login with Google</button>
      </form>

      <NavLink to="/login">Login</NavLink>
    </div>
  );
};

export default Register;
