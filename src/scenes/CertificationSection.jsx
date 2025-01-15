import React from "react";
import CertificationCard from "./CertificationCard";

const certifications = [
  {
    title: "React Development",
    subtitle: "Completed React Basics & Hooks",
    certificate_link: "https://example.com/react-certificate",
    logo_path: "https://via.placeholder.com/150",
    alt_name: "React",
    color_code: "#7d2ae8",
  },
  {
    title: "Backend Development",
    subtitle: "Node.js and Express Fundamentals",
    certificate_link: "https://example.com/node-certificate",
    logo_path: "https://via.placeholder.com/150",
    alt_name: "Node.js",
    color_code: "#4caf50",
  },
  {
    title: "Cloud Computing",
    subtitle: "AWS Certified Solutions Architect",
    certificate_link: "https://example.com/aws-certificate",
    logo_path: "https://via.placeholder.com/150",
    alt_name: "AWS",
    color_code: "#ff9800",
  },
];

function CertificationSection() {
  return (
    <div className="container mx-auto py-10 px-5">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Certifications
      </h1>
      <div className="flex flex-wrap justify-center">
        {certifications.map((cert, index) => (
          <CertificationCard key={index} certificate={cert} />
        ))}
      </div>
    </div>
  );
}

export default CertificationSection;
