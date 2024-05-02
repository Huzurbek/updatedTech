import Navbar from "../../components/navber";
import "./style.sass";

const Header = () => {
  return (
    <div className="main-header">
      <Navbar />

      <div className="header">
        <div className="header__top-title">
          The top tech academy to start your journey
        </div>
        <div className="header__title">
          Craft a Successful Future with Industry Leaders at{" "}
        </div>
        <div className="header__title">
          <span style={{ color: "#5F45F2" }}>TechCenture</span> Academy{" "}
          <div style={{}} className="header__img-container">
            <img src={`../assets/header-bg.png`} alt="Up Image" />
          </div>
        </div>
        <p className="header__text">
          Lorem Ipsumis simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
        <div className="header__action">
          <button style={{ background: "#5F45F2", color: "#fff" }}>
            Courses
          </button>
          <button>LEARN MORE</button>
        </div>
      </div>
    </div>
  );
};
export default Header;
