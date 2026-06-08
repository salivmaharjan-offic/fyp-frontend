import { useAuth } from "../../context/AuthContext";

const Home = () => {
  const { userDTO } = useAuth();

  const token = localStorage.getItem("token");

  return (
    <div>
      <h1>Home Screen</h1>

      {userDTO && <p>Welcome, {userDTO.username}!</p>}
    </div>
  );
};

export default Home;
