import React from "react";
import { useParams, NavLink } from "react-router-dom";

function GetOneNews() {
  return (
    <div className="p-10 ">
      <h2 className="text-3xl mb-10">Получение информации об одной новости</h2>

      <div className="w-2/3">
        <img
          src="https://cdn.pixabay.com/photo/2017/10/10/07/48/hills-2836301_640.jpg"
          alt=""
        />
        <h2 className="text-2xl my-5">Hello hello hello</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque neque
          eligendi, quisquam, fugit, accusantium ducimus eius enim atque esse ex
          est cum iste iusto distinctio. Necessitatibus neque aut voluptatibus
          quia omnis iste reiciendis aspernatur, dignissimos adipisci ut sunt,
          recusandae tempore obcaecati consequatur amet eum cum cupiditate ea
          nisi maiores optio!
        </p>
        <p className="my-5 text-lg">10/10/2024</p>

        <div className="mt-10">
          {" "}
          <NavLink
            to="/dashboard/news"
            className="bg-orange-600 py-3 px-10 text-white hover:bg-orange-400 rounded"
          >
            ⬅️ Назад
          </NavLink>
          <NavLink
            to="/dashboard/news"
            className="ms-5 bg-red-600 py-3 px-10 text-white hover:bg-red-400 rounded"
          >
            ✖️ Удалить{" "}
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default GetOneNews;
