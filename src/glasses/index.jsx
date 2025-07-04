import { useState } from "react";
import data from "./data.json";

export default function Glasses() {
  const [select, setSeLect] = useState(data[0]);

  const renDerCar = () => {
    return (
      <div className="card m-auto my-5" style={{ width: "18rem" }}>
        <img src={select.url} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">{select.desc}</p>
        </div>
      </div>
    );
  };

  const getListGlasses = () => {
    return (
      <ul
        className="d-flex justify-content-start flex-wrap p-2"
        style={{ backgroundColor: "cadetblue" }}
      >
        {data.map((item) => {
          return (
            <li
              key={item.id}
              style={{ listStyle: "none", width: "200px" }}
              className="m-1"
              onClick={() => setSeLect(item)}
            >
              <img
                src={item.url}
                className="img-fluid img-thumbnail"
                alt={item.name}
              />
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div className="container">
      {renDerCar()}
      {getListGlasses()}
    </div>
  );
}
