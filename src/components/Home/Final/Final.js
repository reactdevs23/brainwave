import styles from "./Final.module.css";

const Final = () => {
  return (
    <div className={`wrapper ${styles.finalWrapp}`}>
      <img src="/corners-hero.png" className={styles.corners} alt="" />
      <img src="/pattern1.png" className={styles.pattern1} alt="" />
      <img src="/pattern2.png" className={styles.pattern2} alt="" />
      <div className="contain">
        <div className={styles.content}>
          <img src="/final.png" className={styles.bg} alt="" />
          <h3>
            Be part of the future of <br />
            <span>Brainwave</span>
          </h3>
          <p>
            Unleash the power of AI within Brainwave. Upgrade your productivity
            with Brainwave, the open AI chat app.
          </p>
          <button className="source">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Final;
