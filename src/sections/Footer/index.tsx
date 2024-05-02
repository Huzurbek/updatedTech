import "./style.sass";

const FooterSection = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer">
        <div style={{ maxWidth: 306 }}>
          {" "}
          <a href="" className="logo">
            <img src="../assets/Logo.png" />
          </a>
          <p className="footer__text">
            Lorem Ipsumis simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>
        <div>
          <p className="footer__column-title">Links</p>
          <ul className="footer__list">
            <li className="footer__item">
              <a href="">Home</a>
            </li>
            <li className="footer__item">
              <a href="">Courses</a>
            </li>
            <li className="footer__item">
              <a href="">Contact</a>
            </li>
            <li className="footer__item">
              <a href="">F.A.Q</a>
            </li>
          </ul>
        </div>
        <div>
          <p className="footer__column-title">Courses</p>
          <ul className="footer__list">
            <li className="footer__item">
              <a href="">Java Automation</a>{" "}
            </li>
            <li className="footer__item">
              <a href="">Python Automation</a>
            </li>
            <li className="footer__item">
              <a href="">Cypress Automation</a>
            </li>
            <li className="footer__item">
              <a href="">Data Analytics</a>
            </li>
            <li className="footer__item">
              <a href="">Nursing Informatics</a>
            </li>
          </ul>
        </div>
        <div>
          <p className="footer__column-title">Contact</p>
          <ul className="footer__list">
            <li className="footer__item">info@techcenture.com</li>
            <li className="footer__item">(703) 389-5354</li>
            <li className="footer__item">
              1660 International Dr,630 <br></br>McLean VA 22102
            </li>
          </ul>
        </div>
        <div>
          <p className="footer__column-title"> Social Media</p>
          <ul className="footer__list">
            <li className="footer__item">
              <a href="">Facebook</a>
            </li>
            <li className="footer__item">
              <a href="">Instagram</a>
            </li>
            <li className="footer__item">
              <a href="">What’s app</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__divider" style={{}}></div>
      <p className="copyright">
        Copyright © TechCenture . All Rights Reserved 2019
      </p>
    </div>
  );
};
export default FooterSection;
