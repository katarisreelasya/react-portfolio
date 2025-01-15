import React from "react";

import { motion } from "framer-motion";


function CertificationCard({ certificate }) {
  return (
    <motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
      <div
        className={`w-full sm:w-1/2 md:w-1/3 p-4`}
      >
        <div className="bg-white border border-purple-500 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
          <a
            href={certificate.certificate_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className="rounded-t-lg h-40 flex items-center justify-center"
              style={{ backgroundColor: certificate.color_code }}
            >
              <img
                className="h-16"
                src={certificate.logo_path}
                alt={certificate.alt_name}
              />
            </div>
          </a>
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-800">
              {certificate.title}
            </h2>
            <p className="text-gray-600 mt-2">{certificate.subtitle}</p>
          </div>
        </div>
      </div>
      </motion.div>
  );
}

export default CertificationCard;
