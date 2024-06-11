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

import backurl from "@/links";
import { useState, useEffect } from "react";
import moment from "moment";

function NewsPage() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`${backurl}/api/get/all/blog`, {
          method: "get",
        });
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }

        const data = await response.json();
        // console.log(data);

        const reversedData = data.reverse();
        setBlogs(reversedData);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);
  return (
    <div>
      <div>
        <h2 className="text-2xl">Список всех новостей</h2>

        <NavLink
          to="/dashboard/news/add"
          className="bg-green-700 py-3 px-12 text-lg text-white mt-6 inline-block rounded hover:bg-green-600"
        >
          Добавить
        </NavLink>
      </div>

      <div className="mt-10 flex grid mt-10 auto-cols-auto grid-cols-3">
        {blogs
          ? blogs.map((e) => {
              return (
                <div className="my-5 mx-5 px-10 py-5 bg-white " key={e.blog_id}>
                  <img
                    src={`${backurl}upload/${e.img}`}
                    alt=" img"
                    className="w-100 rounded mb-6"
                    width="500"
                  />
                  <h2 className="text-2xl mb-2">{e.title}</h2>
                  <h4>{moment(e.created_at).format("lll")}</h4>
                  <NavLink
                    to={`/dashboard/news/${e.blog_id}`}
                    className="bg-blue-700 hover:bg-blue-500 text-white py-2 px-6 mt-5 inline-block rounded"
                  >
                    более
                  </NavLink>
                </div>
              );
            })
          : "null"}
      </div>
    </div>
  );
}

export default NewsPage;
