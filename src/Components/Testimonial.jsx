import React from "react";
import ProfilePic from "../Assets/oshij.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading" id="testimonials">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
          Here is a review of our service by one of our beloved customers.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
        I had a positive experience using Remine India's services.
        As someone who cares about the environment, I appreciate the
        company's responsible recycling methods and data security protocols.
        The company made it easy for me to dispose off my e-waste and
        batteries by collecting them from my doorstep and transporting
        them to their recycling center. I highly recommend Remine India
        to others who are looking for an eco-friendly solution for e-waste
        disposal needs.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Oshij Trivedi</h2>
      </div>
    </div>
  );
};

export default Testimonial;
