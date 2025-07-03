import { useState } from "react";
import data from "./data.json";

export default function ListKeys() {
  const [listUser, getListUser] = useState(data);
  const renDerListUser = () => {
    const newArr = listUser.map((user) => {
      return (
        <li key={user.id}>
          {user.id} - {user.name} - {user.age}
        </li>
      );
    });
    return newArr;
  };
  return (
    <div>
      <h1>ListKeys</h1>
      <ul>{renDerListUser()}</ul>
    </div>
  );
}
