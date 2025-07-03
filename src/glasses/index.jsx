import { useState } from "react";
import data from "./data.json";

export default function Glasses() {
  const [glasses, getSlasses] = useState(data);
  const [imgPath, getImgPath] = useState(glasses[0].url);
  const [listDesc, getDesc] = useState(glasses[0].desc);

  const changeState = (imges, text) => {
    getImgPath(imges);
    getDesc(text);
  };

  const renDerCar = () => {
    return (
      <div className="card m-auto my-5" style={{ width: "18rem" }}>
        <img src={imgPath} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">{listDesc}</p>
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
        {glasses.map((item) => {
          return (
            <li
              key={item.id}
              style={{ listStyle: "none", width: "200px" }}
              className="m-1" onClick={() => changeState(item.url, item.desc)}>
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
