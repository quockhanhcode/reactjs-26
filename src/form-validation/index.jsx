import React, { useState } from "react";

export default function Form() {
  const [state, setState] = useState({
    values: {
      email: "",
      password: "",
    },
    error: {
      email: "",
      password: "",
    },
  });
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    console.log(value, name);

    // luu email vao state
    setState({
      ...state, //giu nguyên các giá trị khác trong state
      //   [name]: value, // cập nhật giá trị
      values: {
        ...state.values,
        [name]: value,
      },
    });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(state);
  };
  const handleError = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    let mess = value.trim() === "" ? `${name} không được để trống` : "";

    if (value.trim()) {
      switch (name) {
        case "email": {
          const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
          if (!value.match(regexEmail)) {
            mess = "Email không đúng định dạng";
          }
          break;
        }

        case "password": {
          const regexEmail =
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/;
          if (!value.match(regexEmail)) {
            mess =
              "Mật khẩu phải chứa ít nhất một chữ in hoa, một chữ thường, một kí tự đặc biệt";
          }
          break;
        }

        default:
          break;
      }
    }
    //cap nhat state
    setState({
      ...state,
      error: {
        ...state.error,
        [name]: mess, //cap nhật thông báo lỗi cho trường tương ứng
      },
    });
  };
  console.log(state);
  return (
    <div>
      <h1 className="text-center">Form</h1>
      <form className="max-w-sm mx-auto" onSubmit={handleOnSubmit}>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            onChange={handleOnChange}
            onBlur={handleError}
            type="email"
            name="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
          {state.error.email && (
            <div
              className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
              role="alert"
            >
              {state.error.email}
            </div>
          )}
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your password
          </label>
          <input
            onChange={handleOnChange}
            onBlur={handleError}
            type="password"
            name="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
          {state.error.password && (
            <div
              className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
              role="alert"
            >
              {state.error.password}
            </div>
          )}
        </div>
        <div className="flex items-start mb-5">
          <div className="flex items-center h-5"></div>
          <label
            htmlFor="remember"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Remember me
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
