import styles from "./Community.module.css";
import GradientBtn from "../../GradientButton/GradientBtn";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";

const Community = () => {
  return (
    <div className={`wrapper ${styles.commWrapp}`}>
      <div className="contain">
        <div className={styles.heading}>
          <p>
            {" "}
            <span>{"["}</span> ready to get started <span>{"]"}</span>
          </p>
          <h2>What the community is saying</h2>
        </div>
        <div className={styles.reviewsDiv}>
          <Splide
            className="padding-bottom"
            options={{
              width: "100%",
              perPage: 2,
              perMove: 1,
              drag: true,
              pagination: false,
              arrows: true,
              type: "loop",
              gap: "20px",
              breakpoints: {
                1277: {
                  perPage: 1,
                },
              },
            }}
            hasTrack={false}
          >
            <SplideTrack>
              <SplideSlide>
                <CommunityBox
                  desc="I was blown away by the accuracy and speed of the AI chatbot on
        Brainwave. It was able to understand my queries and provide
        relevant recommendations in seconds."
                  role="UX Designer"
                  name="Jane Smith"
                  bg="/review1.png"
                  logo="/logo-hero (1).png"
                />
              </SplideSlide>
              <SplideSlide>
                <CommunityBox
                  desc="Brainwave has revolutionized the way I interact with digital assistants. The AI chatbot is able to understand my preferences and provide customized suggestions that are tailored to my needs. The app is user-friendly and intuitive, making it a joy to use."
                  role="UX Designer"
                  name="John Doe"
                  bg="/review2.png"
                  logo="/logo-hero (1).png"
                />
              </SplideSlide>
            </SplideTrack>
            <div className={`splide__arrows ${styles.arrowDiv}`}>
              <button
                className={`${styles.arrowLeft} splide__arrow splide__arrow--prev`}
              >
                <img src="/left-arrow.png" alt="" />
              </button>
              <button
                className={`splide__arrow splide__arrow--next ${styles.arrowRight}`}
              >
                <img src="/right-arrow.png" alt="" />
              </button>
            </div>
          </Splide>
        </div>
      </div>
    </div>
  );
};

export default Community;

const CommunityBox = ({ logo, name, role, desc, url = "#", bg }) => {
  return (
    <div className={styles.reviewBox}>
      <img src={bg} className={styles.bgImage} alt="" />
      <img className={styles.logo} src={logo} alt="" />
      <div className={styles.nameDiv}>
        <h3>{name}</h3>
        <p>{role}</p>
      </div>
      <div className={styles.rightReview}>
        <div className={styles.border}></div>
        <div className={styles.inner}>
          <p className="source">{desc}</p>
          <GradientBtn text="Visit Link" width="120px" height="44px" />
        </div>
      </div>
    </div>
  );
};
