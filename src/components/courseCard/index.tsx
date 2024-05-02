import "./style.sass";

interface ICourseProps {
  id: number;
  img: string;
  title: string;
  body: string;
}
export const CourseCard = ({ course }: { course: ICourseProps }) => {
  return (
    <div className="course-card">
      <div
        className="course-card__header"
        style={{
          backgroundImage: `url('../assets/course/${course.img}')`,
        }}
      ></div>
      <div className="course-card__content course-content">
        <h5 className="course-content__title">{course.title}</h5>
        <p className="course-content__text">{course.body}</p>
        <div className="course-content__footer">
          <div>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.10835 15.389L3.44885 14.7207L3.10835 15.389ZM1.28745 13.5681L1.95571 13.2276L1.28745 13.5681ZM18.7125 13.5681L18.0443 13.2276L18.7125 13.5681ZM16.8916 15.389L16.5511 14.7207L16.8916 15.389ZM16.8916 2.96391L16.5511 3.63216L16.8916 2.96391ZM18.7125 4.78481L18.0443 5.1253L18.7125 4.78481ZM3.10835 2.96391L3.44885 3.63216L3.10835 2.96391ZM1.28745 4.78481L1.95571 5.1253L1.28745 4.78481ZM6.48475 18.4488C6.0829 18.5493 5.83858 18.9565 5.93904 19.3583C6.0395 19.7602 6.4467 20.0045 6.84855 19.904L6.48475 18.4488ZM7.97885 18.8484L7.79695 18.1208L7.79695 18.1208L7.97885 18.8484ZM12.0211 18.8484L12.203 18.1208L12.203 18.1208L12.0211 18.8484ZM13.1514 19.904C13.5533 20.0045 13.9605 19.7602 14.0609 19.3583C14.1614 18.9565 13.9171 18.5493 13.5152 18.4488L13.1514 19.904ZM10.75 15.8431C10.75 15.4289 10.4142 15.0931 9.99998 15.0931C9.58577 15.0931 9.24998 15.4289 9.24998 15.8431H10.75ZM9.99998 12.5931C9.58577 12.5931 9.24998 12.9289 9.24998 13.3431C9.24998 13.7573 9.58577 14.0931 9.99998 14.0931V12.5931ZM15 14.0931C15.4142 14.0931 15.75 13.7573 15.75 13.3431C15.75 12.9289 15.4142 12.5931 15 12.5931V14.0931ZM9.99998 18.5996V19.3496V18.5996ZM7.49998 3.25977H12.5V1.75977H7.49998V3.25977ZM12.5 15.0931H7.49998V16.5931H12.5V15.0931ZM7.49998 15.0931C6.32083 15.0931 5.48157 15.0925 4.8244 15.0388C4.17598 14.9858 3.77114 14.8849 3.44885 14.7207L2.76786 16.0572C3.33686 16.3471 3.96107 16.4733 4.70225 16.5338C5.43467 16.5937 6.34558 16.5931 7.49998 16.5931V15.0931ZM0.083313 9.17643C0.083313 10.3308 0.0827297 11.2417 0.142571 11.9742C0.203128 12.7153 0.329277 13.3396 0.619198 13.9086L1.95571 13.2276C1.79149 12.9053 1.69057 12.5004 1.63759 11.852C1.5839 11.1948 1.58331 10.3556 1.58331 9.17643H0.083313ZM3.44885 14.7207C2.80596 14.3931 2.28327 13.8705 1.95571 13.2276L0.619198 13.9086C1.09058 14.8337 1.84273 15.5858 2.76786 16.0572L3.44885 14.7207ZM18.4166 9.17643C18.4166 10.3556 18.4161 11.1948 18.3624 11.852C18.3094 12.5004 18.2085 12.9053 18.0443 13.2276L19.3808 13.9086C19.6707 13.3396 19.7968 12.7153 19.8574 11.9742C19.9172 11.2417 19.9166 10.3308 19.9166 9.17643H18.4166ZM12.5 16.5931C13.6544 16.5931 14.5653 16.5937 15.2977 16.5338C16.0389 16.4733 16.6631 16.3471 17.2321 16.0572L16.5511 14.7207C16.2288 14.8849 15.824 14.9858 15.1756 15.0388C14.5184 15.0925 13.6791 15.0931 12.5 15.0931V16.5931ZM18.0443 13.2276C17.7167 13.8705 17.194 14.3931 16.5511 14.7207L17.2321 16.0572C18.1572 15.5858 18.9094 14.8337 19.3808 13.9086L18.0443 13.2276ZM12.5 3.25977C13.6791 3.25977 14.5184 3.26035 15.1756 3.31404C15.824 3.36702 16.2288 3.46794 16.5511 3.63216L17.2321 2.29565C16.6631 2.00573 16.0389 1.87958 15.2977 1.81902C14.5653 1.75918 13.6544 1.75977 12.5 1.75977V3.25977ZM19.9166 9.17643C19.9166 8.02203 19.9172 7.11113 19.8574 6.3787C19.7968 5.63752 19.6707 5.01331 19.3808 4.44431L18.0443 5.1253C18.2085 5.4476 18.3094 5.85243 18.3624 6.50085C18.4161 7.15802 18.4166 7.99728 18.4166 9.17643H19.9166ZM16.5511 3.63216C17.194 3.95973 17.7167 4.48241 18.0443 5.1253L19.3808 4.44431C18.9094 3.51918 18.1572 2.76703 17.2321 2.29565L16.5511 3.63216ZM7.49998 1.75977C6.34558 1.75977 5.43467 1.75918 4.70225 1.81902C3.96107 1.87958 3.33686 2.00573 2.76786 2.29565L3.44885 3.63216C3.77114 3.46794 4.17598 3.36702 4.8244 3.31404C5.48157 3.26035 6.32083 3.25977 7.49998 3.25977V1.75977ZM1.58331 9.17643C1.58331 7.99728 1.5839 7.15802 1.63759 6.50085C1.69057 5.85243 1.79149 5.4476 1.95571 5.1253L0.619198 4.44431C0.329277 5.01331 0.203128 5.63752 0.142571 6.3787C0.0827297 7.11113 0.083313 8.02203 0.083313 9.17643H1.58331ZM2.76786 2.29565C1.84273 2.76703 1.09058 3.51918 0.619198 4.44431L1.95571 5.1253C2.28327 4.48241 2.80596 3.95973 3.44885 3.63216L2.76786 2.29565ZM6.84855 19.904L8.16075 19.576L7.79695 18.1208L6.48475 18.4488L6.84855 19.904ZM11.8392 19.576L13.1514 19.904L13.5152 18.4488L12.203 18.1208L11.8392 19.576ZM10.75 18.3431V15.8431H9.24998V18.3431H10.75ZM9.99998 14.0931L15 14.0931V12.5931L9.99998 12.5931V14.0931ZM8.16075 19.576C8.76454 19.425 9.38226 19.3496 9.99998 19.3496V17.8496C9.26008 17.8496 8.52016 17.94 7.79695 18.1208L8.16075 19.576ZM9.99998 19.3496C10.6177 19.3496 11.2354 19.425 11.8392 19.576L12.203 18.1208C11.4798 17.94 10.7399 17.8496 9.99998 17.8496V19.3496ZM9.24998 18.3431V18.5996H10.75V18.3431H9.24998Z"
                fill="#76F88B"
              />
              <path
                d="M8 16.0098C8 16.5621 7.55228 17.0098 7 17.0098C6.44772 17.0098 6 16.5621 6 16.0098C6 15.4575 6.44772 15.0098 7 15.0098C7.55228 15.0098 8 15.4575 8 16.0098Z"
                fill="#76F88B"
              />
            </svg>
            Onsite Class
          </div>
          <div>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.9939 6.43565C14.1667 7.24044 14.1667 8.31876 14.1667 10.0098C14.1667 11.7004 14.1667 12.7786 13.994 13.5833M13.9939 6.43565C13.9282 6.12987 13.8376 5.86358 13.7126 5.61818C13.3131 4.83417 12.6757 4.19675 11.8917 3.79728C11.0004 3.34314 9.83359 3.34314 7.50004 3.34314C5.16649 3.34314 3.99971 3.34314 3.10841 3.79728C2.3244 4.19675 1.68699 4.83417 1.28751 5.61818C0.833374 6.50948 0.833374 7.67625 0.833374 10.0098C0.833374 12.3434 0.833374 13.5101 1.28751 14.4014C1.68699 15.1854 2.3244 15.8229 3.10841 16.2223C3.99971 16.6765 5.16649 16.6765 7.50004 16.6765C9.83359 16.6765 11.0004 16.6765 11.8917 16.2223C12.6757 15.8229 13.3131 15.1854 13.7126 14.4014C13.8377 14.1558 13.9284 13.8894 13.994 13.5833M13.9939 6.43565L14.1667 6.36127L14.4987 6.21621C16.6052 5.29574 17.6585 4.8355 18.4126 5.32894C19.1667 5.82238 19.1667 6.97181 19.1667 9.27067V10.7489C19.1667 13.0478 19.1667 14.1972 18.4126 14.6907C17.6585 15.1841 16.6052 14.7239 14.4987 13.8034L14.1667 13.6583L13.994 13.5833M5.00004 10.0098C5.00004 8.52167 5.00004 7.7776 5.29322 7.34746C5.54894 6.97228 5.94199 6.73038 6.37467 6.68191C6.87072 6.62633 7.47523 6.99836 8.68425 7.74243C9.89327 8.4865 10.4978 8.85854 10.7007 9.34425C10.8776 9.76791 10.8776 10.2517 10.7007 10.6754C10.4978 11.1611 9.89327 11.5331 8.68425 12.2772C7.47523 13.0212 6.87072 13.3933 6.37467 13.3377C5.94199 13.2892 5.54894 13.0473 5.29322 12.6721C5.00004 12.242 5.00004 11.4979 5.00004 10.0098Z"
                stroke="#FF473E"
                stroke-width="1.5"
              />
            </svg>
            Live Class
          </div>
        </div>
      </div>
    </div>
  );
};
