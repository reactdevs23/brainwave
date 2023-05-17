import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import GradientBtn from "../GradientButton/GradientBtn";

import styles from "./Header.module.css";

const Header = () => {
  const [headerBg, setHeaderBg] = useState(false);
  const [headerToggle, setHeaderToggle] = useState(false);
  const navItems = [
    { navItem: "Features", to: "/" },
    { navItem: "Pricing", to: "/" },
    { navItem: "How to use", to: "/" },
    { navItem: "Roadmap", to: "/" },
  ];
  useEffect(() => {
    const headerBgFunc = () => {
      if (window.scrollY > 0) {
        setHeaderBg(true);
      } else {
        setHeaderBg(false);
      }
    };
    window.addEventListener("scroll", headerBgFunc);
    return () => {
      window.removeEventListener("scroll", headerBgFunc);
    };
  }, []);

  return (
    <header
      style={{ backgroundColor: headerBg ? "#0e0c15" : "transparent" }}
      className={`wrapper ${styles.header}`}
    >
      <div className={`${styles.header__inner}`}>
        <img src="/logo.png" alt="" />
        <nav style={{ right: headerToggle ? "0" : "-100%" }}>
          {navItems.map((el, i) => (
            <NavLink to={el.to} className="source" key={i}>
              {el.navItem}
            </NavLink>
          ))}

          <div className={`${styles.mobile} ${styles.header__btns}`}>
            <NavLink to="/" className="source">
              New account
            </NavLink>
            <GradientBtn width="110px" height="44px" text="SIGN IN" />
          </div>
        </nav>
        <div className={`${styles.desktop} ${styles.header__btns}`}>
          <a href="#/" className="source">
            New account
          </a>
          <GradientBtn width="110px" height="44px" text="SIGN IN" />
        </div>
        <button
          onClick={() => setHeaderToggle((prev) => !prev)}
          className={`${styles.mobile} ${styles.toggleHeader}`}
        >
          {headerToggle ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
              />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
