import React, { useState } from 'react';
import arrayDestruct from '../assets/portfolio/smartballot.jpg';
import ontimefood from '../assets/portfolio/ontimefood.png';
import VRCampus from '../assets/portfolio/vrcampus.jpg';
import Hackhotel from '../assets/portfolio/sqlinjection.jpg';
import wikipedia from '../assets/portfolio/wikipedia.jpg';
import portfolio from '../assets/portfolio/portfolio.jpg';
const Portfolio = () => {
  const [hoveredId, setHoveredId] = useState(null); // State to track which image is hovered

  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
      codeLink: 'https://github.com/Nyfaasmin/smarBallot',
      hoverText: 'Smart Ballot',
    },
    {
      id: 2,
      src: ontimefood,
      codeLink: 'https://github.com/Nyfaasmin/ontimefood',
      hoverText: 'On Time Food',
    },
    {
      id: 3,
      src: VRCampus,
      codeLink: 'https://github.com/Nyfaasmin/VR/tree/master',
      hoverText: 'VR Campus Explorer',
    },
    {
      id: 4,
      src: Hackhotel,
      codeLink: 'https://github.com/Nyfaasmin/sql-injection-prevention',
      hoverText: 'SQL Injection Prevention',
    },
    {
      id: 5,
      src: wikipedia,
      codeLink: 'https://github.com/Nyfaasmin/wikipedia_Summarizer',
      hoverText: 'Wikipedia Summerizer',
    },
    {
      id: 6,
      src: portfolio,
      codeLink: 'https://github.com/Nyfaasmin?tab=repositories',
      hoverText: 'Portfolio',
    },

  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, codeLink, hoverText }) => (
            <div key={id} className="relative shadow-md shadow-gray-600 rounded-lg overflow-hidden">
              {/* Image Section with Overlay */}
              <div
                className="relative"
                onMouseEnter={() => setHoveredId(id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <img
                  src={src}
                  alt=""
                  className="rounded-md w-72 h-48 duration-200 hover:scale-105"
                />
                {/* Overlay effect (only appears when hovered) */}
                {hoveredId === id && (
                  <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 flex items-center justify-center transition-opacity duration-300">
                    <p className="text-white text-lg font-semibold">{hoverText}</p>
                  </div>
                )}
              </div>

              {/* Code Button Below the Image */}
              <div className="flex items-center justify-center p-2">
                <a
                  href={codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-4 py-2 duration-200 hover:scale-105 text-center text-white border border-white rounded-md"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
