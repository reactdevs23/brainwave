import styles from "./GradientBtn.module.css";

const GradientBtn = ({ width, height, text, big }) => {
  return (
    <button
      style={{
        width: width,
        height: height,
      }}
      className={`${styles.grBtn} ${big ? styles.bigBtn : ""}`}
    >
      {text}
    </button>
  );
};

export default GradientBtn;
