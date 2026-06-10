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
      console.log(error);
    }
  };

  const handleResend = async () => {
    try {
      const response = await api.post("/auth/resend-otp", {
        email,
      });

      alert(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center p-4">
      <div className="flex flex-col justify-center p-4 gap-4 w-lg">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            <span className="text-primary">VERIFY</span> OTP
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            We've sent a verification code to
          </p>

          <p className="font-medium text-primary break-all">{email}</p>
        </div>

        <form onSubmit={handleVerify} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Enter Verification Code
            </label>

            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              maxLength={6}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none text-center text-lg font-semibold"
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
