import { Route, Routes } from "react-router";
import UserLayout from "./layouts/UserLayout";
import Shop from "./pages/User/Shop";
import Login from "./pages/Auth/Login";
import Home from "./pages/User/Home";
import Register from "./pages/Auth/Register";
import About from "./pages/User/About";
import Color from "./pages/User/Color";
import ProtectedRoute from "./components/ProtectedRoute";
import OAuthSuccess from "./pages/OAuthSuccess";
import VerifyOtp from "./pages/Auth/VerifyOtp";

function App() {
  return (
    <>
      {/* User */}
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index={true} element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route
            path="/product"
            element={
              <ProtectedRoute>
                <Shop />
              </ProtectedRoute>
            }
          />
          <Route path="/color" element={<Color />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verify" element={<VerifyOtp />} />
        </Route>

        <Route path="/oauth-success" element={<OAuthSuccess />} />
      </Routes>
    </>
  );
}

export default App;
