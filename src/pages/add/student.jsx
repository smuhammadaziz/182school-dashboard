import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

import backurl from "@/links";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddStudents() {
  const [name, setName] = useState("");
  const [lname, setLName] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState(null);

  const [sinf, setSinf] = useState("");

  const token = localStorage.getItem("TOKEN");

  const handleCancel = () => {
    // Clear all form data
    setName("");
    setLName("");
    setDescription("");
    setPhoto(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a form data object
    const formData = new FormData();
    formData.append("name", name);
    formData.append("l_name", lname);
    formData.append("clas", lname);
    formData.append("teacher_fulln", "Default");
    formData.append("descr", description);
    if (photo) {
      formData.append("image", photo);
    }

    try {
      const response = await fetch(`${backurl}api/admin/add/student`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        toast.success("Student successfully added", {
          position: "top-right",
        });
        handleCancel();
      }
    } catch (error) {
      console.error("Error submitting the form", error);
      toast.warning(error.message, {
        position: "top-right",
      });
    }
  };

  return (
    <div className="news bg-slate-400 block p-10">
      <ToastContainer></ToastContainer>
      <h2 className="text-3xl">Добавить нового студента</h2>
      <form action="" className="w-1/2 mt-10" onSubmit={handleSubmit}>
        <div className="my-5">
          <label htmlFor="" className="me-5">
            имя
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Имя"
            className="py-4 bg-indigo-100 block ps-5 pe-5 mt-2 outline-none w-full"
          />
        </div>
        <div className="my-5">
          <label htmlFor="" className="me-5">
            фамилия
          </label>
          <input
            type="text"
            value={lname}
            onChange={(e) => setLName(e.target.value)}
            placeholder="Фамилия"
            className="py-4 bg-indigo-100 block ps-5 pe-5 mt-2 outline-none w-full"
          />
        </div>
        <div className="my-5">
          <label htmlFor="" className="me-5">
            класс
          </label>
          <input
            type="text"
            value={sinf}
            onChange={(e) => setSinf(e.target.value)}
            placeholder="Фамилия"
            className="py-4 bg-indigo-100 block ps-5 pe-5 mt-2 outline-none w-full"
          />
        </div>
        <div className="my-5 flex flex-col">
          <label htmlFor="" className="me-5">
            Oписание
          </label>
          <textarea
            name=""
            id=""
            rows="10"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-4/4 mt-5 bg-indigo-100 p-5"
          ></textarea>
        </div>
        <div className="my-5">
          <label htmlFor="" className="me-5">
            Загрузка изображения
          </label>
          <input
            type="file"
            onChange={(e) => setPhoto(e.target.files[0])}
            placeholder="загрузка изображения"
            className="py-4 bg-indigo-100 ps-5 pe-5 mt-2 outline-none w-full"
          />
          <div className="flex">
            <NavLink
              to="/dashboard/students"
              className="bg-orange-700 hover:bg-orange-500 text-white py-3 px-12 text-lg rounded mt-10 mx-auto block"
            >
              Назад
            </NavLink>
            <button
              type="submit"
              className="bg-green-700 hover:bg-green-500 text-white py-3 px-12 text-lg rounded mt-10 mx-auto block"
            >
              Добавить
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddStudents;
