import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import TitleCards from "../../components/TitleCards/TitleCards";
import Footer from "../../components/Footer/Footer";
import heroBanner from "../../assets/images/hero_banner.jpg";
import heroTitle from "../../assets/images/hero_title.png";
import playIcon from "../../assets/images/play_icon.png";
import infoIcon from "../../assets/images/info_icon.png";

export const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={heroBanner} alt="" className="banner-img" />
        <div className="hero-caption">
          <img src={heroTitle} alt="" className="caption-img" />
          <p>
            Discovering his ties to an acient secret order, a young man livivng
            in mordern instabul embarks on a quest to save the city from an
            imortal enemy
          </p>

          <div className="hero-btns">
            <button className="btn ">
              <img src={playIcon} alt="" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={infoIcon} alt="" />
              More Info
            </button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"} />
        <TitleCards title={"Only on Netflix"} />
        <TitleCards title={"Upcoming"} />
        <TitleCards title={"Top Picks For You"} />
      </div>
      <Footer />
    </div>
  );
};
