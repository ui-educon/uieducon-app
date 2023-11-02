import React from "react";
import certificate from "../../Images/svgs/Certificate.svg";
import Image from "next/image";

const Certificates = () => {
  return (
    <div className="text-center">
      <h1 className="lg:text-4xl md:text-3xl text-2xl mt-8 font-bold">
        Gain <span className="text-purple-600">Industry-Recognised</span>{" "}
        Certificates
      </h1>
      <div className="block px-2 py-2 justify-around md:flex md:py-10 md:px-20 ">
        <Image src={certificate} className="w-full  md:w-1/2 md:m-4" alt="" />
        <div className="w-full py-10 px-5 md:w-2/5 md:py-20">
          <p className="text-justify pb-4">
            Our courses offer the opportunity to earn industry-recognized
            certificates upon completion. These certificates demonstrate to
            employers and peers alike that you possess the skills and knowledge
            necessary to succeed in your chosen field. With our courses and
            certificates, you&apos;ll be well on your way to achieving your
            career goals.
          </p>
          <button className="font-bold text-purple-600 text-lg">
            Learn More!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
