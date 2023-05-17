import { Splide, SplideSlide } from "@splidejs/react-splide";
import GradientBtn from "../../GradientButton/GradientBtn";
import styles from "./Power.module.css";
import { useRef } from "react";

const Power = () => {
  const sliderRef = useRef();
  const PrevArrow = () => {
    if (sliderRef.current) {
      const index = sliderRef.current.splide.Components.Controller.getPrev();
      sliderRef.current.splide.Components.Controller.go(index);
    }
  };
  const NextArrow = () => {
    if (sliderRef.current) {
      const index = sliderRef.current.splide.Components.Controller.getNext();
      sliderRef.current.splide.Components.Controller.go(index);
    }
  };
  return (
    <div className={`wrapper ${styles.powerWrapp}`}>
      <div className={`contain ${styles.contain}`}>
        <div className={styles.heading}>
          <h2>
            Unlock the <br /> power of AI
          </h2>
          <p>Brainwave unlocks the potential of AI-powered applications</p>
          <GradientBtn text="See how it works" width="180px" height="44px" />
          <div className={` ${styles.arrowDiv}`}>
            <button onClick={PrevArrow} className={`${styles.arrowLeft}`}>
              <img src="/left-arrow.png" alt="" />
            </button>
            <button onClick={NextArrow} className={` ${styles.arrowRight}`}>
              <img src="/right-arrow.png" alt="" />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.sliderDiv}>
        <Splide
          ref={sliderRef}
          options={{
            pagination: false,
            arrows: false,
            width: "100%",
            autoWidth: true,
            perMove: 1,
            drag: true,
            type: "loop",
            gap: "40px",
          }}
        >
          <SplideSlide>
            <div className={styles.imgWrapp}>
              <img src="/power1.png" alt="" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className={styles.imgWrapp}>
              <img src="/power1.png" alt="" />
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
};

export default Power;
