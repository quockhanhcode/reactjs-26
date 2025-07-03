export default function EvenClick() {
  const handleOnClick = () => {
    console.log(123);
  };

  const handleOnClickParams = (user, role) => {
    console.log(user, role);
  };

  return (
    <>
      <div>EvenClick</div>
      <button onClick={handleOnClick}>onclick</button>
      <button onClick={() => handleOnClickParams("Khánh", "ADMIN")}>
        On click Params
      </button>
    </>
  );
}
