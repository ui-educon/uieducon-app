import React from "react";
// import "./mentors.css";

const data = [
  "Yang Xiao, The University of Alabama, USA",
  "Manu Malek, Stevens Institute of Technology, USA",
  "Jon G. Hall, The Open University, UK",
  "Ali Kashif Bashir, Manchester Metropolitan University, UK",
  "Abhishek Swaroop, Bhagwan Parshuram Institute of Technology, India",
  "Joel J P C Rodrigues, Federal university of Piaui, Brazil",
  "Giancarlo Fortino, Università della Calabria, Italy",
  "Utku Kose, Suleyman Demirel University, Isparta, Turkey",
  "Valentina Emilia Balas, Aurel Vlaicu University of Arad, Romania",
  "Zdzislaw Polokoswski, The Karkonosze University of Applied Sciences in Jelenia Góra,Poland",
  "Hamid Reza Boveiri, Sama College, Islamic Azad University, Shoushtar Branch, Iran",
  "Oscar Castillo, Tijuana Institute Technology, Tijuana, Mexico",
  "Aboul Ella Hassanien, Cairo University, Egypt",
  "Victor Hugo C. de Albuquerque, Federal University of Ceara ́, Brazil",
  "Yu-Dong Zhang, University of Leicester, LE1 7RH, UK",
  "Neeraj Kumar, Thapar Institute of Engineering and Technology, Patiala, Punjab, India",
  "George A. Tsihrintzis, University of Piraeus, Greece",
  "Sheng-Lung Peng, National Dong Swa University, Taiwan",
  "Anil Kumar Ahlawat, KIET Group of Institutes, India",
  "Jafar A. Alzubi, Al-Balqa Applied University, Salt - Jordan",
  "Oana Geman, Universitatea Stefan cel Mare din Suceava, 720239 Romania",
  "Keping Yu, Waseda University, Tokyo, Japan",
  "Suresh Chavhan, IIIT Raichur, India",
  "Prayag Tiwari, Aalto University, Finland",
  "Gulshan Shrivastava, Galgotia’s University, Gr.Noida., India",
  "Aditya Khamparia, Babasaheb Bhimrao Ambedkar University, India",
  "Francesco Piccialli, University of Naples Federico II, Italy",
  "Sarada Prasad Gochhayat, Old Dominion University, USA",
  "Korhan Cengiz, Istinye University, Istanbul, Turkey",
  "Deepak Gupta, Maharaja Agrasen Institute of Technology, Delhi, India",
  "Anuj Kumar Singh, Adani University, India",
  "Ashish Khanna, Maharaja Agrasen Institute of Technology, Delhi, India",
  "S Vimal, Ramco Institute of Technology, Rajapalyam,Tamilnadu",
  "Bharti, KIET Group of Institutions Ghaziabad",
  "Kuppani Sathish, JNTUK",
  "Piyush Kumar Pareek, NITTR Bengaluru",
  "Sunil Kumar Chawla, Chitkara University, Rajpura, Punjab, India",
  "Umesh Dwivedi, AKTU, LUCKNOW, Uttar Pradesh, India",
  "Avinash Kumar Sharma, ABESIT/AKTU",
  "Deepali Virmani, VIPS-TC, GGSIPU, Delhi, India ",
  "Arti Jain, Jaypee Institute of Information Technology, Noida, India",
  "Sivaraman Eswaran, Curtin University, Miri, Malaysia ",
  "Deepika Koundal, UPES, Dehradun, India",
  "Sherin Zafar, Jamia Hamdard, New Delhi",
  "AMBARISH GAJENDRA MOHAPATRA, BPUT Odisha",
  "Sasmita Nayak, Government College of engineering, kalahandi, Bhawani Patna, odissa, India ",
  "Munish Khanna, A k t u Lucknow ",
  "Rajakumar Arul, Vellore Institute of Technology (VIT) Chennai Campus Chennai 600127",
  "Nitish Pathak, Bhagwan Parshuram Institute of Technology (BPIT), GGSIPU, New Delhi, India",
  "Sushruta Mishra, Kalinga Institute of Industrial Technology, Bhubaneswar, India",
  "INDRESH KUMAR GUPTA, HBTU KANPUR ",
  "Ankit Garg, COER, University, Roorkee ",
  "Nitin Malik, The NorthCap University",
];

function Mentors() {
  return (
    <>
      <div className="p-5 text-center">
        <h1 className="text-4xl font-bold ">Our Mentors</h1>
        {/* <p className='mentor-desc'>AdroidConnectz have associated with renowned researchers and entrepreneurs who support the students to resolve their all queries related to Startups, Research, Internships, Higher Studies, Innovations etc.</p>
                    <p className='mentor-desc'>If you want to join as our mentor, please fill the following form
                        <br></br>
                        <a href='https://forms.gle/wwZQ5tqU9DEVKZYL7'
                            style={
                                {textDecoration: "none"}
                            }
                            target="_blank">
                            <b>Mentor Registration</b>
                        </a>
                    </p> */}
      </div>

      <div className="memberContainer">
        {data.map((d, i) => {
          return (
            <div key={i} className="memberWrapper uibg font-sans h-20 w-15">
              <p>{d}</p>
            </div>
          );
        })}{" "}
      </div>
    </>
  );
}

export default Mentors;
