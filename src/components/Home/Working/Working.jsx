import styles from "./Working.module.css";
import GradientBtn from "../../GradientButton/GradientBtn";
const Working = () => {
  return (
    <div className={`wrapper ${styles.workingWrapp}`}>
      <img src="/work-gr.png" className={styles.workGr} alt="" />
      <div className="contain">
        <div className={styles.heading}>
          <p>
            {" "}
            <span>{"["}</span> ready to get started <span>{"]"}</span>
          </p>
          <h2>What we’re working on</h2>
        </div>
        <div className={styles.workingDiv}>
          <div className={styles.workingCol}>
            <Card
              img="/working.png"
              time="May 2023"
              title="Voice Recognition"
              desc="Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free."
            />
            <Card
              img="/working2.png"
              time="May 2023"
              title="Chatbot customization"
              desc="Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with."
            />
          </div>
          <div className={styles.workingCol}>
            <Card
              img="/working3.png"
              time="May 2023"
              progress
              title="Gamification"
              desc="Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently."
            />
            <Card
              img="/working4.png"
              time="May 2023"
              progress
              title="Integration with APIs"
              desc="Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations."
            />
          </div>
        </div>
        <GradientBtn text="Our Roadmap" width="150px" height="44px" />
      </div>
    </div>
  );
};

export default Working;

const Card = ({ time, progress, img, title, desc }) => {
  return (
    <div className={styles.workingCardWrapp}>
      <div className={styles.border}></div>
      <div className={styles.workingCard}>
        <div className={styles.workingTime}>
          <p>
            <span>{"["}</span> {time} <span>{"]"}</span>
          </p>
          {progress ? (
            <button>
              <img src="/loading.png" alt="" /> PROGRESS
            </button>
          ) : (
            <button>
              <img src="/check.png" alt="" /> DONE
            </button>
          )}
        </div>
        <img src={img} alt="" />
        <div className={styles.cardContent}>
          <h4>{title}</h4>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};
