import React, { useState } from "react";
import styles from "./HeroImg.module.css";
import Loader from "./Loader/Loader";

const HeroImg = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 5000);
    }
  };
  return (
    <div className={styles.imageContainer}>
      <img src="/tabBar.png" alt="#" className={styles.tabBar} />
      <div className={styles.border}></div>
      <img
        src="/codeGeneration.png"
        alt="#"
        className={styles.codeGeneration}
      />
      <img src="/BrainwaveHeroApp.png" alt="#" className={styles.image} />
      <div className={styles.inputContainer}>
        {isLoading && <Loader />}

        {isLoading ? (
          <p className={[styles.input, styles.loadingText].join(" ")}>
            AI is generating
          </p>
        ) : (
          <input
            type="text"
            placeholder="Enter your request"
            value={value}
            onChange={handleChange}
            className={styles.input}
            onKeyDown={handleKeyPress}
          />
        )}
      </div>
    </div>
  );
};

export default HeroImg;
