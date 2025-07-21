import Baitap1 from "./baitap1/";
import Baitap2 from "./baitap2";
import RenderingElements from "./rendering-element";
import EvenClick from "./even-click";
import State from "./state";
import ChangeColorCar from "./change-color-car";
import ListKeys from "./list-keys";
import Glasses from "./glasses";
import Commmunication from "./communication";
import ShoppingPhone from "./shopping-phone";
import ShoesStore from "./shoesstore";
// import ShoppingPhone from "./shopping-phone-redux";
import Hooks from "./hooks";
import Form from "./form-validation";
import { useState } from "react";
function App() {
  const [isShow, setIsShow] = useState(true);
  return (
    <>
      {isShow && <Hooks />}
      <button
        onClick={() => setIsShow(false)}
        type="button"
        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
      >
        Kil hooks
      </button>
    </>
  );
}

export default App;
