import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center text-indigo-600">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-pink py-4 px-8 text-indigo-600 mx-5">
      Hi, I'm <span className="font-semibold">Pavithra</span>
      <br />
      Embedded Software Engineer from Blr.
    </h1>
  ),
  2: (
    <InfoBox
      text="Learnt from Emertex & groww up many skills"
      link="/about"
      btnText="More About Me"
    />
  ),
  3: (
    <InfoBox
      text="Worked on many projects using C, C++, arduino, raspberry pi & more. Wanna see?"
      link="/projects"
      btnText="Visit my Projects"
    />
  ),
  4: (
    <InfoBox
      text="Need C/C++/Embedded Software Engineer? I'm here to help you."
      link="/contact"
      btnText="Let's Connect"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
