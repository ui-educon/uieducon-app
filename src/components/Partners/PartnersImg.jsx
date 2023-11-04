import { useState } from "react";
// import "../WhoWeAre/WhoWeAre.css";
import Image from "next/image";
const PartnersImg = ({ src, alt }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="w-[200px] h-[200px] mx-4 p-10 shadow-md">
      <div className="flex h-[100%] justify-center items-center">
        <Image
          src={src}
          alt={alt}
          width={120}
          height={120}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`h-[100%] ${
            isHovered ? "filter-none" : "filter-grayscale"
          }`}
        />
      </div>
    </div>
  );
};
export default PartnersImg;
