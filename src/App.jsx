import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import AddNews from "./pages/add/news";
import GetOneNews from "./pages/one/news";
import AddAdmins from "./pages/add/admins";

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  // const navigateTo = useNavigate();
  // useEffect(() => {
  //   // Check if token exists in local storage
  //   const token = localStorage.getItem("TOKEN");

  //   if (!token) {
  //     navigateTo("/auth/sign-in");
  //   }
  // }, []);

  // const restrictedRoutes = [
  //   "/dashboard/admin",
  //   "/dashboard/student",
  //   "/dashboard/teacher",
  // ];

  // useEffect(() => {
  //   const currentPath = window.location.pathname;
  //   const token = localStorage.getItem("TOKEN");

  //   if (!token && restrictedRoutes.includes(currentPath)) {
  //     navigateTo("/");
  //   }
  // }, []);
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
