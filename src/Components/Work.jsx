import React from "react";
import WasteCollect from "../Assets/waste-collection-image.png";
import WasteProcess from "../Assets/waste-process-image.png";
import WasteSustainable from "../Assets/waste-sustainable-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: WasteCollect,
      title: "Waste Collection",
      text: "Collect, sort and disassemble e-waste and li-batteries.",
    },
    {
      image: WasteProcess,
      title: "Processing",
      text: "Recycling facilities process metals and plastics for reuse. Non-recyclable materials are disposed safely.",
    },
    {
      image: WasteSustainable,
      title: "Recycle",
      text: "The goal is to minimize waste and pollution while extracting valuable materials for reuse in a sustainable economy.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
        We collect, sort, disassemble, and pre-process e-waste and li-batteries.
        The materials are then sent to recycling facilities for processing, with
        metals melted down and reused and plastics ground up for reuse in other products.
        Hazardous or non-recyclable materials are disposed off safely, and components in
        good condition are refurbished and sold. The goal is to minimize waste and pollution
        while extracting valuable materials for reuse in a sustainable economy.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
