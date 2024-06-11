import React from "react";
import { NavLink } from "react-router-dom";
import "../../home.css"; // Import a CSS file for styling

export function Home() {
  return (
    <div className="mt-12 container mx-auto px-4">
      <h2 className="text-3xl text-center">
        Добро пожаловать в Панель управления!
      </h2>

      <div className="grid mt-10 gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        <div className="card">
          <p className="text-2xl">Новости</p>
          <NavLink to="/dashboard/news" className="link">
            Перейти на страницу
          </NavLink>
        </div>
        <div className="card">
          <p className="text-2xl">Администрация школы</p>
          <NavLink to="/dashboard/admins" className="link">
            Перейти на страницу
          </NavLink>
        </div>
        <div className="card">
          <p className="text-2xl">Активные студенты</p>
          <NavLink to="/dashboard/students" className="link">
            Перейти на страницу
          </NavLink>
        </div>
        <div className="card">
          <p className="text-2xl">Фотографии на главной странице</p>
          <NavLink to="/dashboard/intro" className="link">
            Перейти на страницу
          </NavLink>
        </div>
        <div className="card">
          <p className="text-2xl">Весь список контактов</p>
          <NavLink to="/dashboard/contacts" className="link">
            Перейти на страницу
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Home;
