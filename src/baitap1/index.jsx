import Header from "./header";
import Content from "./content";
import Navbar from "./navbar";
import Footer from "./footer";
function Baitap1() {
  return (
    <>
      <Header></Header>
      <div style={{ display: "flex" }}>
        <Navbar></Navbar>
        <Content></Content>
      </div>
      <Footer></Footer>
    </>
  );
}
export default Baitap1;
