import React from "react";
import { NavLink } from "react-router-dom";

const news = [
  {
    id: 1,
    title: "hello world",
    desc: "lorem lorem lorem hllo heloo",
    date: "10/10/2024",
    img: "https://cdn.pixabay.com/photo/2017/10/10/07/48/hills-2836301_640.jpg",
  },
  {
    id: 2,
    title: "hello world",
    desc: "lorem lorem lorem hllo heloo",
    date: "10/10/2024",
    img: "https://cdn.pixabay.com/photo/2017/10/10/07/48/hills-2836301_640.jpg",
  },
  {
    id: 3,
    title: "hello world",
    desc: "lorem lorem lorem hllo heloo",
    date: "10/10/2024",
    img: "https://cdn.pixabay.com/photo/2017/10/10/07/48/hills-2836301_640.jpg",
  },
  {
    id: 4,
    title: "hello world",
    desc: "lorem lorem lorem hllo heloo",
    date: "10/10/2024",
    img: "https://cdn.pixabay.com/photo/2017/10/10/07/48/hills-2836301_640.jpg",
  },
  {
    id: 5,
    title: "hello world",
    desc: "lorem lorem lorem hllo heloo",
    date: "10/10/2024",
    img: "https://cdn.pixabay.com/photo/2017/10/10/07/48/hills-2836301_640.jpg",
  },
];

function StudentsAdmin() {
  return (
    <div>
      <div>
        <h2 className="text-2xl">Список всех студентов</h2>

        <NavLink
          to="/dashboard/students/add"
          className="bg-green-700 py-3 px-12 text-lg text-white mt-6 inline-block rounded hover:bg-green-600"
        >
          Добавить
        </NavLink>
      </div>

      <div className="mt-10 flex grid mt-10 auto-cols-auto grid-cols-3">
        {news.map((e) => {
          return (
            <div className="my-5 mx-5 px-10 py-5 bg-white " key={e.id}>
              <img
                src={e.img}
                alt=" img"
                className="w-100 rounded mb-6"
                width="500"
              />
              <h2 className="text-2xl mb-2">{e.title}</h2>
              <h4>{e.date}</h4>
              <NavLink
                to={`/dashboard/news/1`}
                className="bg-blue-700 hover:bg-blue-500 text-white py-2 px-6 mt-5 inline-block rounded"
              >
                более
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default StudentsAdmin;
