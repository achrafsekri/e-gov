import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import axios from "axios";

const signin = () => {
  const notSent = 0;
  const sent = 1;
  const invalid = -1;
  const [valid, setValid] = useState(notSent);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    //post request to the backend to auth a user
    axios.post("http://localhost:3000/login", data).then((res) => {
      console.log(res);
      setValid(sent);
    });
  };
  return (
    <section className="bg-gray-50 ">
      {(valid == notSent || valid == invalid) && (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 "
          >
            <img
              className="w-12 h-8 mr-2"
              src="https://scontent.xx.fbcdn.net/v/t1.15752-9/255991970_1511228355931021_4654695282420791975_n.png?_nc_cat=104&ccb=1-7&_nc_sid=aee45a&_nc_ohc=w0u5sVpGj04AX-i2Qf4&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQKoXBnSN7YR2ZPmSadevPkuKdXI1nfXfWeGctvC87DuQ&oe=63AC44A2"
              alt="logo"
            />
            E-auth
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                Sign in to your account
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                action="#"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div>
                  <label
                    for="cin"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    CIN
                  </label>
                  <input
                    type="text"
                    name="cin"
                    id="cin"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="15216520"
                    required
                    {...register("cin", { required: true })}
                  />
                </div>
                <div>
                  <label
                    for="password"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    required
                    {...register("password", { required: true })}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 "
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label for="remember" className="text-gray-500 ">
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline "
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                >
                  Sign in
                </button>
                <p className="text-sm font-light text-gray-500 ">
                  Don’t have an account yet?
                  <Link
                    href="/signup"
                    className="font-medium text-primary-600 hover:underline "
                  >
                    Sign up
                  </Link>
                </p>
                {valid == invalid && (
                  <p className=" text-red-700 $" role="alert">
                    Something went wrong please retry
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      )}
      {valid == 1 && <div>success</div>}
    </section>
  );
};

export default signin;
