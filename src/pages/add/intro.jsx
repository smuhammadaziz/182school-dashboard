import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import backurl from "@/links";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddIntros() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState(null);

  const token = localStorage.getItem("TOKEN");

  const handleCancel = () => {
    // Clear all form data
    setName("");
    setDescription("");
    setPhoto(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a form data object
    const formData = new FormData();
    formData.append("title", name);
    formData.append("descr", "default");
    if (photo) {
      formData.append("image", photo);
    }

    // console.log(formData);

    try {
      const response = await fetch(`${backurl}api/admin/add/side`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (response.ok) {
        toast.success("Side successfully added", {
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
      <h2 className="text-3xl">Добавить новые картина</h2>
      <form action="" className="w-1/2 mt-10" onSubmit={handleSubmit}>
        <div className="my-5">
          <label htmlFor="" className="me-5">
            Заголовок
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Заголовок"
            className="py-4 bg-indigo-100 block ps-5 pe-5 mt-2 outline-none w-full"
          />
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
              to="/dashboard/intro"
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

export default AddIntros;
