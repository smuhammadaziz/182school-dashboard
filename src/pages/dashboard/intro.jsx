import React from "react";
import { NavLink } from "react-router-dom";

import backurl from "@/links";
import { useState, useEffect } from "react";
import moment from "moment";

function IntrosAdmin() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`${backurl}api/admin/get/sides`, {
          method: "get",
        });
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }

        const data = await response.json();
        // console.log(data);

        const reversedData = data.message.reverse();
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
        <h2 className="text-2xl">Список всех картинок</h2>

        <NavLink
          to="/dashboard/intro/add"
          className="bg-green-700 py-3 px-12 text-lg text-white mt-6 inline-block rounded hover:bg-green-600"
        >
          Добавить
        </NavLink>
      </div>

      <div className="mt-10 flex grid auto-cols-auto grid-cols-3 gap-5">
        {blogs.map((e) => {
          return (
            <div className="my-5 mx-5 px-10 py-5 bg-white " key={e.id}>
              <img
                src={`${backurl}upload/${e.photo}`}
                alt=" img"
                className="w-full h-64 object-cover rounded mb-6"
                width="256"
                height="256"
              />
              <h2 className="text-2xl mb-2">{e.title}</h2>
              <h4>
                {/* {e.date} */}

                {moment(e.created_at).format("lll")}
              </h4>
              <NavLink
                to={`/dashboard/intro/${e.side_id}`}
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

export default IntrosAdmin;
