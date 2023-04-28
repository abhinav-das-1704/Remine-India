import React from "react";
import RecycleImage from "../Assets/home-image-recycle.gif";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-text-section">
          <h1 className="primary-heading">Remine India.</h1>
          <p className="primary-text">
            Recyling Indian Technology and Li-Batteries for a greener tomorrow.
          </p>
          <button className="secondary-button">
            Know More <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
        <div className="home-image-recycle">
          <img src={RecycleImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
