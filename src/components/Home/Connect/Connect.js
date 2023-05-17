import GradientBtn from "../../GradientButton/GradientBtn";
import styles from "./Connect.module.css";

const Connect = () => {
  return (
    <div className={`wrapper ${styles.connect}`}>
      <div className={`contain ${styles.contain}`}>
        <div className={styles.top}>
          <div className={styles.imgWrap}>
            <img src="/connect.png" alt="" />
          </div>
          <div className={styles.connectDesc}>
            <h5>
              <span>{"["}</span> how it work: 02. <span>{"]"}</span>
            </h5>
            <h2>
              Connect with AI chat <br /> bot
            </h2>
            <p>
              Connect with the AI chatbot to start the conversation. The chatbot
              uses natural language processing to understand your queries and
              provide relevant responses.
            </p>
            <GradientBtn height="44px" width="140px" text="Connect Now" />
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.stepBox}>
            <div className={styles.progress}></div>
            <h5>01.</h5>
            <h3>Sign up</h3>
          </div>
          <div className={`${styles.stepBox} ${styles.activeBox}`}>
            <div className={styles.progress}></div>
            <h5>02.</h5>
            <h3>Connect with AI Chatbot</h3>
            <p>
              Create an account with Brainwave - AI chat app by providing your
              name, email
            </p>
          </div>
          <div className={styles.stepBox}>
            <div className={styles.progress}></div>
            <h5>03.</h5>
            <h3>Get Personalized Recommendations</h3>
          </div>
          <div className={styles.stepBox}>
            <div className={styles.progress}></div>
            <h5>04.</h5>
            <h3>Explore and Engage</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
