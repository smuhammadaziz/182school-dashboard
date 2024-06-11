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

function ContactsAdmin() {
  return (
    <div>
      <div>
        <h2 className="text-2xl">Список всех контакты</h2>
      </div>

      <div className="mt-10 flex grid mt-10 auto-cols-auto grid-cols-3">
        {news.map((e) => {
          return (
            <div
              className="my-5 mx-5 px-10 py-5 bg-white shadow-lg "
              key={e.id}
            >
              <h2 className="text-2xl mb-2">{e.title}</h2>
              <h2 className="text-2xl mb-2">{e.title}</h2>
              <h2 className="text-2xl mb-2">{e.title}</h2>
              <h2 className="text-2xl mb-2">{e.title}</h2>
              <h2 className="text-2xl mb-2">{e.title}</h2>
              <h4>{e.date}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ContactsAdmin;
