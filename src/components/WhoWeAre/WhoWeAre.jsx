// import "./WhoWeAre.css";
// import rect from "../../Images/rect.png";
const WhoWeAre = () => {
  return (
    <div className="flex justify-center items-center ">
      <div className="uibg text-white my-4 w-[85%] p-6 whocard">
        {/* top div */}

        <div className="text-center">
          <h1 className="font-medium md:text-5xl text-4xl my-4">Who we are?</h1>
          <p className="my-4 text-lg">
            <span className="text-xl"> Universal Innovators</span> Educational
            Consultants (UI-EduCon) is a dynamic platform that brings together
            academia, research communities, and industry to drive positive
            change and foster a developed society. Our primary focus is to
            gather and promote quality application-based research that enhances
            human welfare and societal well-being.
          </p>
        </div>

        {/* bottom div */}

        <div className="grid lg:grid-cols-3 grid-cols-1  mt-6 text-sm">
          {/* items */}

          <div className="flex m-2 wshadow p-2">
            <div className="flex flex-col ml-2">
              <h2 className="font-bold text-lg text-center text-red-300">
                What we do?
              </h2>
              <p className="text-lg">
                UI-EduCon is to bridge the gap between fundamental research and
                real-world applications. It provides a space where researchers,
                developers, engineers, students, and practitioners can come
                together to share innovative scientific information and ignite
                transformative ideas.
              </p>
            </div>
          </div>

          <div className="flex  m-2 wshadow p-2">
            <div className="flex flex-col ml-3">
              <h2 className="font-bold text-lg text-center text-green-300">
                What we offer?
              </h2>
              <p className="text-lg">
                One of the core offerings of UI-EduCon is its diverse range of
                courses and training programs. These programs cover various
                disciplines, including data science, artificial intelligence,
                programming languages, research methodologies, and more.
              </p>
            </div>
          </div>

          <div className="flex m-2  wshadow p-2 ">
            <div className="flex flex-col ml-3">
              <h2 className="font-bold text-lg text-center text-yellow-300">
                Why join us?
              </h2>
              <p className="text-lg">
                Joining UI-EduCon opens doors to a world of comprehensive
                education and cutting-edge learning opportunities. With a
                diverse range of courses and training programs, From data
                science to artificial intelligence to art of research.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WhoWeAre;
