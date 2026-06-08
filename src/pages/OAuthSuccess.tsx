import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import api from "../api/axios";

function OAuthSuccess() {
  const navigate = useNavigate();
  const { login } = useAuth();

  useEffect(() => {
    const handleOAuth = async () => {
      const params = new URLSearchParams(window.location.search);

      const token = params.get("token");

      if (!token) {
        navigate("/login");
        return;
      }

      try {
        const response = await api.get("/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("Before login");

        login(token, response.data);
        console.log("After login");

        setTimeout(() => {
          navigate("/");
        }, 100);
        console.log("After navigate");
      } catch (error) {
        console.error(error);
        navigate("/login");
      }
    };

    handleOAuth();
  }, [login, navigate]);

  return <div>Loading...</div>;
}

export default OAuthSuccess;
