import React, { useEffect, useState } from "react";
// import DefaultLayoutAdmin from "../../../../layout/DefaultAdmin";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import backurl from "@/links";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import moment from "moment";

function GetOneintro() {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const { side_id } = useParams();
  const token = localStorage.getItem("TOKEN");

  useEffect(() => {
    async function fetchBlog() {
      try {
        const response = await fetch(
          `${backurl}/api/admin/get/side/${side_id}`,
        );
        if (!response.ok) {
          throw new Error("Failed to fetch blog");
        }
        const data = await response.json();

        console.log(data);
        setBlog(data.sides);
      } catch (error) {
        console.error("Error fetching blog:", error);
        toast.error("Failed to fetch blog", {
          position: "top-right",
        });
      } finally {
        setLoading(false);
      }
    }
    fetchBlog();
  }, []);

  async function deleteItem() {
    try {
      const response = await fetch(
        `${backurl}/api/admin/delete/side/${side_id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (!response.ok) {
        throw new Error("Failed to delete blog");
      }
      // console.log(response);
      toast.success("Successfully deleted blog", {
        position: "top-right",
      });
      navigate("/dashboard/intro");
    } catch (error) {
      console.error("Error deleting blog:", error);
      toast.error("Failed to delete blog", {
        position: "top-right",
      });
    }
  }

  if (loading) {
    return (
      <>
        <div className="bg-white dark:bg-black p-4 py-5 w-full max-w-4xl mx-auto">
          <p className="text-center">Loading blog details...</p>
        </div>
      </>
    );
  }

  if (!blog) {
    return (
      <>
        <div className="bg-white dark:bg-black p-4 py-5 w-full max-w-4xl mx-auto">
          <p className="text-center">No blog details found.</p>
        </div>
      </>
    );
  }
  return (
    <div className="p-10 ">
      <h2 className="text-3xl mb-10">информации об одной новости</h2>

      <div className="w-2/3">
        <img
          src={`${backurl}upload/${blog.photo}`}
          alt=""
          width={400}
          className="w-full h-full object-contain "
        />
        <h2 className="text-2xl my-5">{blog.title}</h2>
        <p>{blog.descr}</p>
        <p className="my-5 text-lg">{moment(blog.created_at).format("lll")}</p>

        <div className="mt-10">
          {" "}
          <NavLink
            to="/dashboard/intro"
            className="bg-orange-600 py-3 px-10 text-white hover:bg-orange-400 rounded"
          >
            ⬅️ Назад
          </NavLink>
          <button
            onClick={deleteItem}
            // to="/dashboard/news"
            className="ms-5 bg-red-600 py-3 px-10 text-white hover:bg-red-400 rounded"
          >
            ✖️ Удалить{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default GetOneintro;
