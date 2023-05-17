import styles from "./Hero.module.css";
import HeroImg from "./HeroImg/HeroImg";

const Hero = () => {
  return (
    <div className={`wrapper ${styles.hero}`}>
      <img src="/corners-hero.png" className={styles.corners} alt="" />
      <div className={styles.bg}>
        <img src="/hero-gr.png" className={styles.gr} alt="" />
        <img src="/hero-bg.png" className={styles.img} alt="" />
      </div>
      <div className={`contain ${styles.contain}`}>
        <div className={styles.content}>
          <h3>
            Explore the Possibilities <br /> of AI Chatting with{" "}
            <span>Brainwave</span>
          </h3>
          <p>
            Unleash the power of AI within Brainwave. Upgrade your productivity
            with Brainwave, the open AI chat app.
          </p>
          <button className="source">Get Started</button>
        </div>
        {/* <img src="/hero-img.png" alt="" /> */}
        <HeroImg />
        <div className={styles.bottomHero}>
          <p>Helping people create beautiful content at</p>
          <div className={styles.logos}>
            <img src="/logo-hero (1).png" alt="" />
            <img src="/logo-hero (2).png" alt="" />
            <img src="/logo-hero (3).png" alt="" />
            <img src="/logo-hero (4).png" alt="" />
            <img src="/logo-hero (5).png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
