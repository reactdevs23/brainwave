import styles from "./Collaborate.module.css";
import GradientBtn from "../../GradientButton/GradientBtn";
const Collaborate = () => {
  return (
    <div className={`wrapper ${styles.collaborate}`}>
      <div className={`contain ${styles.contain}`}>
        <div className={styles.left}>
          <h2>
            AI chat app for <br /> seamless <br /> collaboration
          </h2>
          <div className={styles.features}>
            <FeatureRow
              title="Seamless Integration"
              desc="With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter."
            />
            <FeatureRow title="Smart Automation" />
            <FeatureRow title="Top-notch Security" />
          </div>
          <GradientBtn height="44px" width="120px" text="Try It Now" />
        </div>
        <div className={styles.right}>
          <p>
            With smart automation and top-notch security, it's the perfect
            solution for teams looking to work smarter.
          </p>
          <img src="/col.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Collaborate;

const FeatureRow = ({ title, desc }) => {
  return (
    <div className={styles.feature}>
      <div className={styles.featureHead}>
        <img src="/check-ico.png" alt="" />
        <p>{title}</p>
      </div>
      {desc && <p>{desc}</p>}
    </div>
  );
};
