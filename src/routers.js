import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import Pessoas from "./pages/pessoas/Pessoas";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pessoas" element={<Pessoas />} />
      </Routes>
    </BrowserRouter>
  )
}
export default Routers