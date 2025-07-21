import React, { useState, useEffect, useMemo, useCallback } from "react";
import Child from "./child";
import Child2 from "./child2";
import CustomHook from "./custom-hooks";

export default function Hooks() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // chỉ chạy 1 lần duy nhất vì array [] rỗng
    // console.log("respon");
  }, []);

  useEffect(() => {
    // chạy lại nhiều lần phụ thuộc vào dependencie
    //
    // console.log("useEffect - update");
  }, [count]);

  //giúp cho detroy compoennt nếu nó không còn tôn tại nữa
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("hello");
    }, 1000);
    return () => {
      //treydoy
      clearInterval(interval);
    };
  }, []);

  const numberCountUp = () => {
    let i = 0;
    while (i < 1000) {
      i++;
      //   console.log(i);
    }

    return i;
  };

  const numberCountUpMemo = useMemo(() => numberCountUp(), []);

  const renderNote = () => {
    return `ban đã line 0 lần`;
  };
  const renderNoteCallback = useCallback(renderNote, []);

  return (
    <div>
      <div>{count}</div>
      <button
        disabled={count === 0}
        onClick={() => setCount(count - 1)}
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Giam
      </button>
      <button
        onClick={() => setCount(count + 1)}
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Tang
      </button>
      <p>Number Up {numberCountUp()}</p>
      <p>{numberCountUpMemo}</p>
      <Child number={count} />
      <Child2 renderNote={renderNoteCallback} />
      <CustomHook/>
    </div>
  );
}
