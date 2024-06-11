import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import AddNews from "./pages/add/news";
import GetOneNews from "./pages/one/news";
import AddAdmins from "./pages/add/admins";

function App() {
  return (
    <Routes>
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/auth/*" element={<Auth />} />
      <Route path="*" element={<Navigate to="/dashboard/home" replace />} />

      {/* //Adding */}
      {/* ========================================================= */}
      <Route path="/dashboard/news/add" element={<AddNews />} />
      <Route path="/dashboard/admins/add" element={<AddAdmins />} />

      {/* //Getting one */}
      {/* ========================================================= */}
      <Route path="/dashboard/news/1" element={<GetOneNews />} />
    </Routes>
  );
}

export default App;
