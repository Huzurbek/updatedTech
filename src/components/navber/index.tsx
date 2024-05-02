import { useWindowWidth } from "../../hooks/screenSize";
import { BurgerMenu } from "../burgerMenu";
import "./style.sass";

const Navbar = () => {
  const screenWidth = useWindowWidth();

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        backdropFilter: "blur(30px)",
        WebkitBackdropFilter: "blur(30px)",
        zIndex: 500,
      }}
    >
      <div className="navbar">
        {screenWidth >= 950 ? (
          <div className="navbar__inner">
            <a href="" className="logo">
              <img src="../assets/Logo.png" />
            </a>
            <nav className="menu">
              <ul className="menu__list">
                <li className="menu__item">
                  <a href="" className="menu__link">
                    Home
                  </a>
                </li>
                <li className="menu__item">
                  <a href="" className="menu__link">
                    Courses
                  </a>
                </li>
                <li className="menu__item">
                  <a href="" className="menu__link">
                    Contact
                  </a>
                </li>
                <li className="menu__item">
                  <a href="" className="menu__link">
                    F.A.Q
                  </a>
                </li>
              </ul>
            </nav>
            <button style={{ padding: "18px 30px" }}>Register</button>
          </div>
        ) : (
          <BurgerMenu />
        )}
      </div>
    </div>
  );
};

export default Navbar;
