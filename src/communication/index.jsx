import { useState } from "react";
import Child from "./child";

export default function Commmunication() {
  const [word, setWord] = useState("Huỳnh Quốc Khánh");
  const changeUser = () => {
    setWord("Khaánh");
  };
  // nhận data từ component con
  const handleGetUserReset = (data) => {
    setWord(data);
  };
  return (
    <div>
      <h1>Xin chao {word}</h1>
      <button
        onClick={changeUser}
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Default
      </button>

      <Child user={word} handldGetUser={handleGetUserReset} />
    </div>
  );
}
