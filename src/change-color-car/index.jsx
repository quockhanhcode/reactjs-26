import { useState } from "react";

// const redenImg = (setImg) =>{

// }

export default function ChangeColorCar() {
  const [img, setImg] = useState("./images/red-car.jpg");

  const changeClor = (path) => {
    setImg(path);
  };

  return (
    <div className="text-center container">
      <h1>Change Color Car</h1>
      <div
        className="btn-group d-flex justify-content-center"
        role="group"
        aria-label="Basic example"
      >
        <button className="btn border" onClick={() => changeClor("./images/red-car.jpg")}>
          RED
        </button>
        <button className="btn border" onClick={() => changeClor("./images/silver-car.jpg")}>
          GRAY
        </button>
        <button className="btn border" onClick={() => changeClor("./images/black-car.jpg")}>
          BLACK
        </button>
      </div>
      <h1>Images</h1>
      <div>
        <img src={img} className="img-fluid" alt="Responsive image" />
      </div>
    </div>
  );
}
