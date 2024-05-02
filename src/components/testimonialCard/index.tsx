import "./style.sass";

export type TTestimonial = {
  id: number;
  img: string;
  comment: string;
  profile: string;
  name: string;
  position: string;
};
interface ITestimonialCardProps {
  info: TTestimonial;
}
export const TestimonialCard = ({ info }: ITestimonialCardProps) => {
  const { comment, name, position, img, profile } = info;
  return (
    <div
      className="testimonial"
      style={{
        background:
          "linear-gradient(225.00deg, rgba(183, 118, 248, 0.01),rgba(0, 0, 0, 0.01) 99.972%),linear-gradient(-45.00deg, rgba(0, 38, 112, 0.08) 0.028%,rgba(183, 118, 248, 0.08) 100%)",
      }}
    >
      <div className="testimonial__componay-logo">
        <img src={`../assets/companies/${img}`} alt="Company Logo" />
      </div>
      <p className="testimonial__comment">{comment}</p>
      <div className="testimonial__member">
        <div className="avatar">
          <img
            src={`../assets/testimonialProfile/${profile}`}
            alt="User Image"
          />
        </div>
        <div className="member">
          <div className="member__name">{name}</div>
          <div className="member__position">{position}</div>
        </div>
      </div>
    </div>
  );
};
