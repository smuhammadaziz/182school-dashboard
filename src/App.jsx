import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import AddNews from "./pages/add/news";
import GetOneNews from "./pages/one/news";
import AddAdmins from "./pages/add/admins";

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import AddStudents from "./pages/add/student";
import AddIntros from "./pages/add/intro";
import GetOneintro from "./pages/one/side";
import GetOneStudent from "./pages/one/student";
import GetOneAdmin from "./pages/one/admin";

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
      <Route path="*" element={<Navigate to="/auth/sign-in" replace />} />

      {/* //Adding */}
      {/* ========================================================= */}
      <Route path="/dashboard/news/add" element={<AddNews />} />
      <Route path="/dashboard/admins/add" element={<AddAdmins />} />
      <Route path="/dashboard/students/add" element={<AddStudents />} />
      <Route path="/dashboard/intro/add" element={<AddIntros />} />

      {/* //Getting one */}
      {/* ========================================================= */}
      <Route path="/dashboard/news/:blog_id" element={<GetOneNews />} />
      <Route path="/dashboard/admins/:id" element={<GetOneAdmin />} />
      <Route path="/dashboard/students/:id" element={<GetOneStudent />} />
      <Route path="/dashboard/intro/:side_id" element={<GetOneintro />} />
    </Routes>
  );
}

export default App;
