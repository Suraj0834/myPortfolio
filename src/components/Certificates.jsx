import React from "react";

const certificates = [
  {
    id: 1,
    name: "Ethical Hacking Essentials",
    platform: "Coursera",
    link: "https://www.coursera.org/account/accomplishments/verify/X1KEI8YGNECW",
  },
  {
    id: 2,
    name: "Digital Forensics Essentials",
    platform: "Coursera",
    link: "https://www.coursera.org/account/accomplishments/verify/Z3V4U9ZOKSHN",
  },
  {
    id: 3,
    name: "Cloud Computing",
    platform: "NPTEL",
    link: "https://archive.nptel.ac.in/content/noc/NOC24/SEM2/Ecertificates/106/noc24-cs118/Course/NPTEL24CS118S167020273504432731.pdf",
  },
  {
    id: 4,
    name: "Comptia Security +",
    platform: "Cybrary",
    link: "https://app.cybrary.it/profile/Suraj0834?tab=cert-completion&cert=CC-36c6b891-41ee-4831-9689-81a44f021f86",
  },
];

const Certificates = () => {
  return (
    <div className="bg-black text-white py-20" id="certificates">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Certificates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate) => (
            <div
              key={certificate.id}
              className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
              transform transition-transform duration-300 hover:scale-105"
            >
              <h3 className="text-2xl font-bold mb-2">{certificate.name}</h3>
              <p className="text-gray-400 mb-4">Platform: {certificate.platform}</p>
              <a
                href={certificate.link}
                className="inline-block bg-gradient-to-r 
                from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;