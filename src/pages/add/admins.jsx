import React from "react";
import { NavLink } from "react-router-dom";

function AddAdmins() {
  return (
    <div className="news bg-slate-400 block p-10">
      <h2 className="text-3xl">Добавить новые администрация</h2>
      <form action="" className="w-1/2 mt-10">
        <div className="my-5">
          <label htmlFor="" className="me-5">
            Заголовок
          </label>
          <input
            type="text"
            placeholder="Заголовок"
            className="py-4 bg-indigo-100  block ps-5 pe-5 mt-2 outline-none w-full"
          />
        </div>
        <div className="my-5">
          <label htmlFor="" className="me-5">
            Заголовок
          </label>
          <input
            type="text"
            placeholder="Заголовок"
            className="py-4 bg-indigo-100  block ps-5 pe-5 mt-2 outline-none w-full"
          />
        </div>
        <div className="my-5">
          <label htmlFor="" className="me-5">
            Заголовок
          </label>
          <input
            type="text"
            placeholder="Заголовок"
            className="py-4 bg-indigo-100  block ps-5 pe-5 mt-2 outline-none w-full"
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
            className="w-4/4 mt-5 bg-indigo-100 p-5"
          ></textarea>
        </div>
        <div className="my-5">
          <label htmlFor="" className="me-5">
            Загрузка изображения
          </label>
          <input
            type="file"
            placeholder="загрузка изображения"
            className="py-4 bg-indigo-100 ps-5 pe-5 mt-2 outline-none w-full"
          />
          <div className="flex">
            <NavLink
              to="/dashboard/news"
              className="bg-orange-700 hover:bg-orange-500 text-white py-3 px-12 text-lg rounded mt-10 mx-auto block"
            >
              Назад
            </NavLink>
            <button className="bg-green-700 hover:bg-green-500 text-white py-3 px-12 text-lg rounded mt-10 mx-auto block">
              Добавить
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddAdmins;
