// import "./HowItWorks.css";
import Image from "next/image";
import HowItWork from "../../Images/svgs/how it works.svg";
const HowItWorks = () => {
  return (
    <div className="howp px-[5vw] py-[1rem] bg-[#EDEBFE33]">
      <div className="howcon flex flex-wrap my-1 ">
        <div className="howimg flex-1">
          <Image src={HowItWork} alt="image" />
        </div>
        <div className="flex-1">
          <div className="font-bold howtitle">
            How it <span className="uicolor">works?</span>
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 80 80"
              width="80px"
              height="80px"
            >
              <circle cx="40" cy="40" r="22" fill="#7E3AF2" />
              <text
                x="40"
                y="45"
                fontSize="18px"
                fontWeight="bold"
                textAnchor="middle"
                fill="#FFFFFF"
              >
                1
              </text>
            </svg>
            Select the course based on your interest.
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 80 80"
              width="80px"
              height="80px"
            >
              <circle cx="40" cy="40" r="22" fill="#7E3AF2" />
              <text
                x="40"
                y="45"
                fontSize="18px"
                fontWeight="bold"
                textAnchor="middle"
                fill="#FFFFFF"
              >
                2
              </text>
            </svg>
            Fill your details, don&apos;t worry we are with you.
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 80 80"
              width="80px"
              height="80px"
            >
              <circle cx="40" cy="40" r="22" fill="#7E3AF2" />
              <text
                x="40"
                y="45"
                fontSize="18px"
                fontWeight="bold"
                textAnchor="middle"
                fill="#FFFFFF"
              >
                3
              </text>
            </svg>
            Do payment of you course to unlock it.
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 80 80"
              width="80px"
              height="80px"
            >
              <circle cx="40" cy="40" r="22" fill="#7E3AF2" />
              <text
                x="40"
                y="45"
                fontSize="18px"
                fontWeight="bold"
                textAnchor="middle"
                fill="#FFFFFF"
              >
                4
              </text>
            </svg>
            Congratulations, you are in the league of Ui-Educon.
          </div>
        </div>
      </div>
    </div>
  );
};
export default HowItWorks;
