import { useState } from "react";
import "./style.sass";
// import { CustomButton } from "../customButton";
interface IProps {
  //   openTripForm: () => void;
  //   payRideForm: () => void;
}
export const BurgerMenu: React.FC<IProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div
      className={`burger ${isMenuOpen ? "open" : ""}`}
      // style={{ height: isMenuOpen ? "auto" : 100 }}
    >
      <div className="burger__header">
        <div className="burger_logo_wrapper">
          <a href="" className="logo">
            <img src="../assets/Logo.png" />
          </a>
        </div>
        <div
          onClick={toggleMenu}
          style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
        >
          {isMenuOpen ? (
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="24px"
              width="24px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                stroke="#fff"
                strokeWidth="2"
                d="M3,3 L21,21 M3,21 L21,3"
              ></path>
            </svg>
          ) : (
            <svg
              width="39"
              height="19"
              viewBox="0 0 39 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M37.0016 1.47217H1.99805"
                stroke="white"
                stroke-width="2.5"
                stroke-linecap="round"
              />
              <path
                d="M37.0017 9.47217H12.0017"
                stroke="white"
                stroke-width="2.5"
                stroke-linecap="round"
              />
              <path
                d="M37.0017 17.4722H22.0017"
                stroke="white"
                stroke-width="2.5"
                stroke-linecap="round"
              />
            </svg>
          )}
        </div>
      </div>
      <div className={`burger__menu`}>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Courses</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            {" "}
            <a href="">F.A.Q</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
