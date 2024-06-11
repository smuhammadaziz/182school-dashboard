import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";

import backurl from "@/links";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigateTo = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);

      const response = await fetch(`${backurl}/api/login`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        toast.success("Login successful!", {
          position: "top-right",
        });
        navigateTo("/dashboard/home");
      }

      if (!response.ok) {
        const responseData = await response.json();
        throw new Error(responseData.message);
      }

      const data = await response.json();

      // console.log(data);
      const token = data.token;

      localStorage.setItem("TOKEN", token);
    } catch (error) {
      setError(error.message);

      toast.error(error.message, {
        position: "top-right",
      });
    }
  };
  return (
    <section className="m-8 flex gap-4">
      <ToastContainer></ToastContainer>
      <div className="w-full  mt-24">
        <div className="text-center">
          <Typography variant="h2" className="font-bold mb-4">
            Войти
          </Typography>
          <Typography
            variant="paragraph"
            color="blue-gray"
            className="text-lg font-normal"
          >
            Введите свое имя пользователя и пароль для входа.
          </Typography>
        </div>
        <form
          className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2"
          onSubmit={handleSignIn}
        >
          <div className="mb-1 flex flex-col gap-6">
            <Typography
              variant="small"
              color="blue-gray"
              className="-mb-3 font-medium"
            >
              ваш электронная почта
            </Typography>
            <Input
              size="lg"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ваш электронная почта"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography
              variant="small"
              color="blue-gray"
              className="-mb-3 font-medium"
            >
              Пароль
            </Typography>
            <Input
              type="password"
              size="lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <Button className="mt-6" fullWidth type="submit">
            Войти
          </Button>
        </form>
      </div>
    </section>
  );
}

export default SignIn;
