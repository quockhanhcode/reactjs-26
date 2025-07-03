import { useState } from "react";
export default function State() {
  let userName = "Khánh";
  const [isLogin, setLogin] = useState(false);
  const handleLogin = () => {
    setLogin(true);
  };
  const handleLogout = () => {
    setLogin(false);
  };

  const renDerInfo = () => {
    if (isLogin) {
      return (
        <div>
          <h1>Hello {userName}</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Vui lòng đăng nhập</h1>
          <button onClick={handleLogin}>Login</button>
        </div>
      );
    }
  };
  return <div>{renDerInfo()}</div>;
}
