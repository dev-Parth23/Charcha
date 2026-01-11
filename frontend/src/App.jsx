import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

export default function App() {
  return (
    <div className="min-h-screen text-white flex overflow-hidden">
     
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
    </div>
  );
}
