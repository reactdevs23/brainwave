import styles from "./Generate.module.css";

const Generate = () => {
  return (
    <div className={`wrapper ${styles.generateWrapp}`}>
      <div className="contain">
        <div className={styles.gr}></div>
        <div className={styles.heading}>
          <h2>Generative AI made for creators.</h2>
          <p>Brainwave unlocks the potential of AI-powered applications</p>
        </div>
        <div className={styles.generateDiv}>
          <div className={`${styles.generate1}`}>
            <img src="/generate1.png" alt="" />
            <div className={styles.generateDesc}>
              <h4>Smartest AI</h4>
              <p>Brainwave unlocks the potential of AI-powered applications</p>
              <div className={styles.features}>
                <div className={styles.feature}>
                  <img src="/check-ico.png" alt="" />
                  <p>Photo generating</p>
                </div>
                <div className={styles.feature}>
                  <img src="/check-ico.png" alt="" />
                  <p>Photo enhance</p>
                </div>
                <div className={styles.feature}>
                  <img src="/check-ico.png" alt="" />
                  <p>Seamless Integration</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.generateRow}>
            <div className={styles.generate2}>
              <img src="/generate2.png" alt="" />
              <div className={styles.generateDesc}>
                <h4>Photo editing</h4>
                <p>
                  Automatically enhance your photos using our AI app's photo
                  editing feature. Try it now!
                </p>
              </div>
            </div>
            <div className={styles.generate3}>
              <div className={styles.generateDesc}>
                <h4>Video generation</h4>
                <p>
                  The world’s most powerful AI photo and video art generation
                  engine.What will you create?
                </p>
                <div className={styles.generateIcos}>
                  <img src="/gen_ico1.png" alt="" />
                  <img src="/gen_ico2.png" alt="" />
                  <img src="/gen_ico3.png" alt="" />
                  <img src="/gen_ico4.png" alt="" />
                  <img src="/gen_ico5.png" alt="" />
                </div>
              </div>
              <video
                src="/test.mp4"
                playsInline
                loop
                muted
                autoPlay
                controls
              ></video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Generate;
