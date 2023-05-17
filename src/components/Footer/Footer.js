import styles from "./Footer.module.css";

const Footer = () => {
  const navItems = [
    { navItem: "Features", to: "/" },
    { navItem: "Pricing", to: "/" },
    { navItem: "How to use", to: "/" },
    { navItem: "Roadmap", to: "/" },
  ];
  const socials = [
    { icon: "/discord.png", to: "#" },
    { icon: "/twitter.png", to: "#" },
    { icon: "/insta.png", to: "#" },
    { icon: "/telegram.png", to: "#" },
    { icon: "/fb.png", to: "#" },
  ];
  return (
    <footer className="wrapper">
      <div>
        <div className={styles.top}>
          <img src="/logo.png" alt="" />
          <div className={styles.links}>
            {navItems.map((el, i) => (
              <a className="source" href={el.to} key={i}>
                {el.navItem}
              </a>
            ))}
          </div>
        </div>
        <div className={styles.bottom}>
          <p>© 2023 UI8</p>
          <div className={styles.socials}>
            {socials.map((el, i) => (
              <a href={el.to} target="blank" key={i}>
                <img src={el.icon} alt="" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
