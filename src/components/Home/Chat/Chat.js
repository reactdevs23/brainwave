import styles from "./Chat.module.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Chat = () => {
  return (
    <div className={`wrapper chat ${styles.chatWrapp}`}>
      <h2>
        Chat Smarter, Not Harder <br /> with Brainwave
      </h2>
      <div className={styles.sliderWrapper}>
        <Splide
          options={{
            width: "100%",
            autoWidth: true,
            perPage: 1,
            perMove: 1,
            drag: true,
            pagination: true,
            arrows: false,
            type: "loop",
            gap: "20px",
            breakpoints: {
              450: {
                autoWidth: false,
              },
            },
          }}
        >
          <SplideSlide>
            <ChatBox
              title="Ask anything"
              desc="Lets users quickly find answers to their questions without having to search through multiple sources."
              bg="/sliderbg1.png"
              ico="/chat-ico.png"
              gr
            />
          </SplideSlide>
          <SplideSlide>
            <ChatBox
              title="Improve everyday"
              color="white"
              desc="The app uses natural language processing to understand user queries and provide accurate and relevant responses."
              bg="/sliderbg2.png"
              ico="/expand-ico.png"
            />
          </SplideSlide>
          <SplideSlide>
            <ChatBox
              title="Connect everywhere"
              desc="Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient."
              bg="/sliderbg3.png"
              ico="/plug-ico.png"
            />
          </SplideSlide>
          <SplideSlide>
            <ChatBox
              title="Fast responding"
              desc="Lets users quickly find answers to their questions without having to search through multiple sources."
              bg="/sliderbg4.png"
              ico="/plug-red-ico.png"
              gr
            />
          </SplideSlide>
          <SplideSlide>
            <ChatBox
              title="Connect everywhere"
              desc="Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient."
              bg="/sliderbg3.png"
              ico="/plug-ico.png"
            />
          </SplideSlide>
          <SplideSlide>
            <ChatBox
              title="Fast responding"
              desc="Lets users quickly find answers to their questions without having to search through multiple sources."
              bg="/sliderbg4.png"
              ico="/plug-red-ico.png"
              gr
            />
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
};

export default Chat;

const ChatBox = ({ bg, gr, title, desc, ico, color = "#ADA8C3" }) => {
  return (
    <div style={{ backgroundImage: `url(${bg})` }} className={styles.slideBox}>
      {gr && <div className={styles.gr}></div>}

      <div className={styles.boxTop}>
        <h4>{title}</h4>
        <p style={{ color: color }}>{desc}</p>
      </div>
      <div className={styles.bottomBox}>
        <img src={ico} alt="" />
        <a href="#/" target="blank">
          Explore more{" "}
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
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};
