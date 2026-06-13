import { Route, Routes } from "react-router";
import UserLayout from "./layouts/UserLayout";
import Shop from "./pages/User/Shop";
import Login from "./pages/Auth/Login";
import Home from "./pages/User/Home/Home";
import Register from "./pages/Auth/Register";
import About from "./pages/User/About/About";
import Color from "./pages/User/Color";
import ProtectedRoute from "./components/ProtectedRoute";
import OAuthSuccess from "./pages/OAuthSuccess";
import VerifyOtp from "./pages/Auth/VerifyOtp";
import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./pages/Admin/Dashboard/Dashboard";
import Products from "./pages/Admin/Products/Products";
import Profile from "./pages/User/Profile/Profile";
import AccountDetail from "./pages/User/Profile/sub-pages/AccountDetail";

function App() {
  return (
    <>
      {/* User */}
      <Routes>
        <Route path="/" element={<UserLayout />}>
          {/* Default Page */}
          <Route index={true} element={<Home />} />
          <Route path="/" element={<Home />} />

          {/* Pages */}
          <Route path="/product" element={<Shop />} />
          <Route path="/color" element={<Color />} />
          <Route path="/about" element={<About />} />

          {/* Profile */}
          <Route path="/profile" element={<Profile />}>
            <Route path="/profile/detail" element={<AccountDetail />} />
          </Route>

          {/* Auth */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verify" element={<VerifyOtp />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route index={true} element={<Dashboard />} />
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/admin/products" element={<Products />} />
        </Route>

        <Route path="/oauth-success" element={<OAuthSuccess />} />
      </Routes>
    </>
  );
}

export default App;
