import Chat from "../components/Home/Chat/Chat";
import Collaborate from "../components/Home/Collaborate/Collaborate";
import Community from "../components/Home/Community/Community";
import Connect from "../components/Home/Connect/Connect";
import Final from "../components/Home/Final/Final";
import Generate from "../components/Home/Generate/Generate";
import Hero from "../components/Home/Hero/Hero";
import Power from "../components/Home/Power/Power";
import Price from "../components/Home/Price/Price";
import Working from "../components/Home/Working/Working";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="inlineBorder">
        <Chat />
        <Power />
        <Collaborate />
        <Connect />
        <Generate />
        <Price />
        <Community />
        <Working />
      </div>
      <Final />
    </>
  );
};

export default Home;
