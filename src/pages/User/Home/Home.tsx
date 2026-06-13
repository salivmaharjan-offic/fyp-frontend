// import { useAuth } from "../../context/AuthContext";
import Hero from "./sub-pages/Hero";
import Values from "./sub-pages/Values";

const Home = () => {
  // const { userDTO } = useAuth();
  // const token = localStorage.getItem("token");

  return (
    <div>
      {/* hero section */}
      <Hero />
      <Values />
    </div>
  );
};

export default Home;
