import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-10">  {/* Reduced margin to prevent spacing issues */}
          I am Pathan Nyfa Asmin, a dedicated B.Tech student in Computer Science Engineering at 
          Shri Vishnu Engineering College for Women, Bhimavaram. With an outstanding CGPA of 9.24/10, 
          I have consistently showcased a strong academic background, coupled with a deep passion for 
          technology, problem-solving, and innovation.
        </p>

        <p className="text-xl mt-6">
          Throughout my academic journey, I have maintained a strong work ethic and an eagerness to 
          explore emerging trends in Computer Science, particularly in Web Development, AI, Cybersecurity, 
          and Cloud Computing. My commitment to continuous learning drives me to stay updated with the 
          latest advancements in the field.
        </p>

        <p className="text-xl mt-6">
          Beyond academics, I actively engage in hackathons, coding competitions, and technical workshops, 
          always seeking opportunities to expand my knowledge and challenge myself. Additionally, as the 
          Data Manager of the HAPPY CLUB, I have contributed to initiatives that promote psychological 
          well-being on campus.
        </p>

        <p className="text-xl mt-6">
          With proficiency in C, Python, Java, MERN Stack, and SQL, I am eager to apply my skills to drive 
          innovation and create meaningful solutions. I look forward to opportunities that allow me to 
          learn, collaborate, and make a significant impact in the tech industry.
        </p>
      </div>
    </div>
  );
};

export default About;
