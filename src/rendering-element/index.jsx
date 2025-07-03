export default function RenderingElements() {
  let mess = "hello world";
  let user = "khanh";
  let age = 20;

  const news = () => {
    return (
      <div>
        <h1>aaaaaaaaaaaaaa</h1>
        <p>bbbbbbbbbbbbbbb</p>
      </div>
    );
  };
  return (
    <div>
      <h1>RenderingElements</h1>
      <div>{mess}</div>
      <p>{user}</p>
      <p>{age}</p>
      {news()}
    </div>
  );
}
