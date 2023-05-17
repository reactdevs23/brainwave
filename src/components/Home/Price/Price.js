import styles from "./Price.module.css";
import GradientBtn from "../../GradientButton/GradientBtn";

const Price = () => {
  return (
    <div className={`wrapper ${styles.priceWrapp}`}>
      <div className="contain">
        <div className={styles.heading}>
          <img src="/price-stars.png" className={styles.stars} alt="" />
          <img src="/price-ball.png" className={styles.ball} alt="" />
          <p>
            {" "}
            <span>{"["}</span> Get started with Brainwave <span>{"]"}</span>
          </p>
          <h2>Pay once, use forever</h2>
        </div>
        <div className={styles.priceRow}>
          <img src="/left-connect.png" style={{ right: "100%" }} alt="" />
          <img src="/right-connect.png" style={{ left: "100%" }} alt="" />
          <PriceCard
            title="Basic"
            desc="AI chatbot, personalized recommendations"
            price="0"
            options={[
              "An AI chatbot that can understand your queries",
              "Personalized recommendations based on your preferences",
              "Ability to explore the app and its features without any cost",
            ]}
          />
          <PriceCard
            title="Premium"
            desc="Advanced AI chatbot, priority support, analytics dashboard"
            price="9.99"
            options={[
              "An advanced AI chatbot that can understand complex queries",
              "An analytics dashboard to track your conversations",
              "Priority support to solve issues quickly",
            ]}
          />
          <PriceCard
            title="Enterprise"
            desc="Custom AI chatbot, advanced analytics, dedicated account"
            reco
            price="99"
            options={[
              "An AI chatbot that can understand your queries",
              "Personalized recommendations based on your preferences",
              "Ability to explore the app and its features without any cost",
            ]}
          />
        </div>
        <a href="#/" className={`source ${styles.see}`}>
          see the full details
        </a>
      </div>
    </div>
  );
};

export default Price;

const PriceCard = ({ title, desc, price, reco, options }) => {
  return (
    <div className={styles.priceCard}>
      <h4>{title}</h4>
      <p>{desc}</p>
      <h2 style={{ opacity: price === "99" ? "0" : "1" }}>
        <span>$</span>
        {price}
      </h2>
      {reco ? (
        <GradientBtn big width="100%" height="44px" text="Contact Us" />
      ) : (
        <button className={`source ${styles.whiteBorderBtn}`}>
          Get Started
        </button>
      )}
      <div className={styles.options}>
        {options.map((elem, idx) => {
          return (
            <div key={elem + idx + title} className={styles.option}>
              <img src="/check-ico.png" alt="" />
              <p>{elem}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
