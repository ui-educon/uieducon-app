import React from "react";
// import "./Conferences.css";
import icicc from "../../Images/iciccConf.jpg";
import icdam from "../../Images/icdam.jpg";
import Image from "next/image";
const Conferences = () => {
  return (
    <div>
      {/* icicc-conf.com
icdam-conf.com
online-conf.com */}
      <section className="my-5">
        <h3 className="text-3xl text-center">
          Various Conferences
          <span className="uicolor "> Associated with UI-Educon</span>
        </h3>
        <div className="conference w-[97%] m-auto">
          {/* 1st conference  */}
          <div className="icicc ">
            {/* Various Conferences  */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mb-12">
              <article>
                <section className="mt-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-8">
                  <article
                    className="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out"
                    style={{
                      backgroundImage:
                        'url("https://images.unsplash.com/photo-1623479322729-28b25c16b011?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80")',
                    }}
                  >
                    <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out" />
                    <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                      <h3 className="text-center">
                        <a
                          className="text-white text-2xl font-bold text-center"
                          href="https://icicc-conf.com/"
                          target="_blank"
                        >
                          <span className="absolute inset-0" />
                          <h3>ICICC CONFERENCE</h3>
                        </a>
                      </h3>
                    </div>
                  </article>
                  <article
                    className="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out"
                    style={{
                      backgroundImage:
                        'url("https://images.unsplash.com/photo-1569012871812-f38ee64cd54c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")',
                    }}
                  >
                    <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out" />
                    <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                      <h3 className="text-center">
                        <a
                          className="text-white text-2xl font-bold text-center"
                          href="https://icdam-conf.com/"
                          target="_blank"
                        >
                          <span className="absolute inset-0" />
                          <h3>ICDAM CONFERENCE</h3>
                        </a>
                      </h3>
                    </div>
                  </article>
                  <article
                    className="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl  transition duration-300 ease-in-out"
                    style={{
                      backgroundImage:
                        'url("https://images.unsplash.com/photo-1511376777868-611b54f68947?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80")',
                    }}
                  >
                    <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-75 transition duration-300 ease-in-out" />
                    <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                      <h3 className="text-center">
                        <a
                          className="text-white text-2xl font-bold text-center"
                          href="https://online-conf.com/"
                          target="_blank"
                        >
                          <span className="absolute inset-0" />
                          <h3>ONLINE CONFERENCE</h3>
                        </a>
                      </h3>
                    </div>
                  </article>
                </section>
              </article>
            </section>

            {/* conferences  */}

            <section className=" bg-gradient-to-br from-pink-50 to-indigo-100 p-8">
              <h1 className="text-center font-bold text-2xl text-indigo-500"></h1>
              <div className="grid justify-center md:grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-7 my-10">
                {/* 1st conf icicc  */}
                <div className="bg-white rounded-lg border shadow-md max-w-xs md:max-w-none ">
                  <div className="text-center  uibg mb-4 text-white font-semibold py-2">
                    <h2 className=" text-2xl md:text-3xl">
                      About ICICC Conference
                    </h2>
                    <p>
                      <a
                        className="hover:text-black"
                        href="https://icicc-conf.com/"
                        target="_blank"
                      >
                        Click here to know more...
                      </a>
                    </p>
                  </div>

                  <Image
                    className="h-56 lg:h-60 w-full object-contain"
                    src={icicc}
                    alt=""
                  />
                  <div className="p-3">
                    <h3 className="font-semibold text-xl leading-6 text-gray-700 my-2">
                      ICICC is a prestigious international conference organized
                      by Sukhdev College of Business Studies, University of
                      Delhi, New Delhi. The conference is held in association
                      with the{" "}
                      <span className="uicolor font-semibold">
                        National Institute of Technology Patna and the
                        University of Valladolid in Spain.
                      </span>
                    </h3>

                    <p className="py-2 paragraph-normal text-gray-800 font-semibold">
                      ICICC 2024 aims to provide a common platform for
                      innovative scientists, professors, research scholars,
                      students, and industrial experts in the field of Computing
                      and Communication. By bringing together experts from
                      various backgrounds, the conference aims to facilitate the
                      exchange of innovative scientific information and promote
                      collaboration and networking among researchers and
                      institutions.
                    </p>

                    <p className="py-2 paragraph-normal text-gray-800 font-semibold">
                      One of the primary objectives of ICICC is to bridge the
                      gap between fundamental research and its practical
                      applications. The conference encourages the transformation
                      of theoretical research into institutional and
                      industrialized research and aims to foster the conversion
                      of applied exploration into real-time applications.
                    </p>
                    <p className="py-2 paragraph-normal text-gray-800 font-semibold">
                      ICICC-2024 will offer researchers and attendees the
                      opportunity to present their research findings, share
                      their knowledge, and engage in fruitful discussions. It
                      will serve as a platform for researchers to showcase their
                      work, gain feedback from experts, and foster
                      collaborations for further research endeavors.
                    </p>
                    <p className="py-2 paragraph-normal text-gray-800 font-semibold">
                      The conference venue for ICICC-2024 is Shaheed Sukhdev
                      College of Business Studies, University of Delhi, located
                      in New Delhi, India. The organizers have planned a
                      rigorous double-blinded peer review process for paper
                      submissions, ensuring the quality and relevance of the
                      accepted papers. The accepted papers will be published as
                      proceedings of ICICC-2024 in Springer, a renowned academic
                      publisher (proposed).
                    </p>
                    <p className="py-2 paragraph-normal text-gray-800 font-semibold">
                      ICICC-2024 promises to be an intellectually stimulating
                      event, bringing together the brightest minds in the field
                      of Computing and Communication. It serves as a valuable
                      platform for researchers and practitioners to share their
                      insights, explore emerging trends, and contribute to the
                      advancement of the field.
                    </p>
                  </div>
                </div>

                {/* 2nd conference  */}
                <div className="bg-white rounded-lg border shadow-md max-w-xs md:max-w-none ">
                  <div className="text-center  uibg mb-4 text-white font-semibold py-2">
                    <h2 className="text-2xl md:text-3xl">
                      About ICDAM Conference
                    </h2>
                    <p>
                      <a
                        className="hover:text-black"
                        href="https://icdam-conf.com/"
                        target="_blank"
                      >
                        Click here to know more...
                      </a>
                    </p>
                  </div>
                  <Image
                    className="h-56 lg:h-60 w-full object-cover"
                    src={icdam}
                    alt=""
                  />
                  <div className="p-3">
                    <h3 className="font-semibold text-xl leading-6 text-gray-700 my-2">
                      ICDAM is a prestigious international conference organized
                      by London Metropolitan University, located in London, UK,
                      in partnership with{" "}
                      <span className="uicolor font-semibold">
                        Karkonosze University of Applied Sciences in Jelenia
                        Gora, Poland, Europe, Politécnico de Portalegre in
                        Portugal, Europe, and BPIT GGSIPU in Delhi, India.
                      </span>
                    </h3>

                    <p className="py-2 paragraph-normal text-gray-800 font-semibold">
                      ICDAM-2023 aims to bring together innovative scientists,
                      professors, research scholars, students, and industry
                      experts in the field of data analytics and management to
                      provide them with a common platform for collaboration and
                      knowledge exchange. The primary goal of the conference is
                      to facilitate the exchange of innovative scientific
                      information and foster discussions among researchers,
                      developers, engineers, students, and practitioners.
                    </p>

                    <p className="py-2 paragraph-normal text-gray-800 font-semibold">
                      The conference emphasizes the transformation of
                      fundamental research into institutional and industrialized
                      research, as well as the practical application of data
                      analytics and management techniques. By bridging the gap
                      between theory and practice, ICDAM-2023 aims to promote
                      real-time applications and advancements in the field.
                    </p>

                    <p className="py-2 paragraph-normal text-gray-800 font-semibold">
                      ICDAM-2023 provides researchers and attendees with the
                      opportunity to engage in national and international
                      collaboration and networking. The conference serves as a
                      platform for universities and institutions from India and
                      abroad to come together and promote research in the field
                      of data analytics and management.
                    </p>

                    <p className="py-2 paragraph-normal text-gray-800 font-semibold">
                      ICDAM-2023 promises to be an intellectually stimulating
                      event, providing researchers and participants with a
                      platform to present their work, gain valuable insights,
                      and contribute to the advancement of data analytics and
                      management.
                    </p>

                    <p className="py-2 paragraph-normal text-gray-800 font-semibold">
                      All accepted papers, following a rigorous double-blinded
                      peer review process, will be published in Springer&apos;s
                      Lecture Notes on Networks & Systems, which is indexed in
                      reputable databases such as SCOPUS, INSPEC, EI Compendex,
                      and WoS. Additionally, selected extended papers will be
                      published in special issues of prestigious journals
                      indexed in SCI/SCOPUS/WoS/DBLP/ACM. ICDAM-2023 promises to
                      be an intellectually stimulati
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Conferences;
