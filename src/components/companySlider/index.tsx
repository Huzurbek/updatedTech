import "./style.sass";
export const CompanySlider = () => {
  const logos = [
    {
      id: 1,
      logo: "google.png",
      title: "google.png",
    },
    {
      id: 2,
      logo: "rakuten.png",
      title: "BlueShield",
    },
    {
      id: 3,
      logo: "nike.png",
      title: "nike",
    },
    {
      id: 4,
      logo: "american.png",
      title: "american",
    },
    {
      id: 5,
      logo: "sony.png",
      title: "sony",
    },
    {
      id: 6,
      logo: "johns.png",
      title: "johns",
    },
    {
      id: 7,
      logo: "kaiser.png",
      title: "kaiser",
    },
    {
      id: 8,
      logo: "inova.png",
      title: "WellsFargo",
    },
    {
      id: 9,
      logo: "inova.png",
      title: "Capital",
    },
  ];

  const slider = [];

  for (let index = 0; index < 2; index++) {
    slider.push(
      <div className={`slide-track-${"right"}`} key={index}>
        {logos
          .sort(() => 0.5 - Math.random())
          .map((logo) => (
            <div className="slide" key={logo.id + index * logos.length}>
              <img src={`../assets/companies/${logo.logo}`} alt={logo.title} />
            </div>
          ))}
      </div>
    );
  }

  return (
    <div className="slider">
      {slider.map((el, index) => (
        <div key={index}>{el}</div>
      ))}
    </div>
  );
};
