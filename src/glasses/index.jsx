import { useState } from "react";
import data from "./data.json";

export default function Glasses() {
  const [glasses, getSlasses] = useState(data);
  const [imgPath, getImgPath] = useState(glasses[0].url);

  const getListGlasses = () => {
    return <div className="container"></div>;
  };

  return <div>{getListGlasses()}</div>;
}
