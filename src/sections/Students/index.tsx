import { Subtitle } from "../../components/subtitle";
import "./style.sass";
const Students = () => {
  const companyList = [
    "google.png",
    "rakuten.png",
    "facebook.png",
    "nike.png",
    "american.png",
    "sony.png",
    "johns.png",
    "kaiser.png",
    "inova.png",
  ];
  return (
    <div className="student">
      <Subtitle style={{ marginTop: 0 }}>
        Our Students Are Hired By Top Influential Companies
      </Subtitle>
      <div className="student__companylist">
        {companyList.map((el) => (
          <div className="student__company-log">
            <img src={`../assets/companies/${el}`} alt="User Image" />
          </div>
        ))}
      </div>
      {/* <CompanySlider /> */}
      <div className="student__content">
        <div className="report-card">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              position: "relative",
              width: "fit-content",
            }}
          >
            <div className="report-card__header">5K+</div>
            <div className="report-card__avatar">
              <img src="../assets/studentAvatar/avatar1.png" alt="User Image" />
            </div>
            <div className="report-card__avatar">
              <img src="../assets/studentAvatar/avatar3.png" alt="User Image" />
            </div>
            <div className="report-card__avatar">
              <img src="../assets/studentAvatar/avatar2.png" alt="User Image" />
            </div>
          </div>
          <h5 className="report-card__title">Students</h5>
          <p className="report-card__text">
            Lorem Ipsumis simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>

        <div className="report-card">
          <div className="report-card__header">1K+</div>
          <h5 className="report-card__title">Joined Job</h5>
          <p className="report-card__text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="report-card">
          <div className="report-card__header">6+</div>
          <h5 className="report-card__title">Courses</h5>
          <p className="report-card__text">
            Lorem Ipsumis simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Students;
