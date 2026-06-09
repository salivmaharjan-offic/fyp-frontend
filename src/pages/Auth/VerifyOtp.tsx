import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../../api/axios";
import { useAuth } from "../../context/AuthContext";

const VerifyOtp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const email = location.state?.email;

  const [otp, setOtp] = useState("");

  const handleVerify = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await api.post("/auth/verify", {
        email,
        otp,
      });

      login(response.data.token, response.data.userDTO);

      navigate("/");
    } catch (error) {
      alert("Error");
    }
  };

  const handleResend = async () => {
    try {
      const response = await api.post("/auth/resend-otp", {
        email,
      });

      alert(response.data);
    } catch (error: any) {
      alert("Error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Verify OTP</h1>

          <p className="mt-2 text-sm text-gray-500">
            We've sent a verification code to
          </p>

          <p className="font-medium text-primary break-all">{email}</p>
        </div>

        <form onSubmit={handleVerify} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Verification Code
            </label>

            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter 6-digit OTP"
              maxLength={6}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all tracking-[0.4em] text-center text-lg font-semibold"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:opacity-90 transition cursor-pointer"
          >
            Verify Account
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Didn't receive the code?{" "}
          <button
            type="button"
            onClick={handleResend}
            className="text-primary font-medium hover:underline"
          >
            Resend OTP
          </button>
        </p>
      </div>
    </div>
  );
};

export default VerifyOtp;
