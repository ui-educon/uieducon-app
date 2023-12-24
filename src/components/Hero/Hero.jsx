// import "./Hero.css";
import Image from "next/image";
import heroImg from "../../Images/svgs/hero.svg";
const Hero = () => {
  return (
    <div className="hero-con flex">
      {/* left */}

      <div className="flex flex-1 flex-col flex-wrap herof">
        <div className="herotitle">
          Dream high with <span className="uicolor">UI</span>-Educon
        </div>
        <div className="heroMsg">
          Take the First Step Towards <span className="uicolor">Success</span>{" "}
          with Our Research Oriented Courses
        </div>
      </div>

      {/* right */}
      <div className=" heroImg m-10 flex-1 h-[60vh] w-[50vh]">
        <Image src={heroImg} alt="img" />
      </div>
    </div>
  );
};
export default Hero;
