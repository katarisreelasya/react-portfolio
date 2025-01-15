import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import pro3 from '../assets/pro3.jpg';
import pro4 from '../assets/pro4.jpg';
import pro7 from '../assets/pro7.jpg';
import pro1 from '../assets/pro1.jpg';
import pro6 from '../assets/pro6.jpg';
import pro8 from '../assets/pro8.jpg';
import pro9 from '../assets/pro9.jpg';
import Button from './Button'; 


const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Projects = () => {
  return (
    <section id="projects" className="pt-24 pb-24">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Various Projects from small scale to big scale including technologies
          like HTML, CSS, JavaScript, TailWindCSS, ReactJS, Framer-Motion, C,
          C++, GitHub etc.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="grid sm:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          
                  <div>
        <div className="p-4 text-center">
        GMRIT ALUMNI PORTAL
        </div>

        {/* Card 1 */}
        <div className="relative w-[250px] h-[450px] p-[5px] rounded-xl overflow-hidden z-10 bg-gradient-to-r from-[#74ebd5] to-[#acb6e5]">
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#f6d365] to-[#fda085] rotate-2 -z-10"></div>
          <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-[#84fab0] to-[#8fd3f4] -rotate-2 -z-10"></div>
          <div className="relative flex items-center justify-center w-full h-full rounded-lg bg-[#292b2c] z-20 text-white overflow-hidden">
            <img
              className="h-full w-full object-cover rounded-lg"
              src={pro3} // Use your image source here
              alt="GMRIT ALUMNI PORTAL"
            />
          </div>
        </div>

        {/* Button below Card 1 */}
        <div className="flex justify-center mt-4">
          <a href="https://github.com/lokesh-katari/gmrit-alumni">
            <Button />
          </a>
        </div>
        </div>
        

        <div>
        <div className="p-4 text-center">
          BLOG APPLICATION
        </div>

        {/* Card 1 */}
        <div className="relative w-[250px] h-[450px] p-[5px] rounded-xl overflow-hidden z-10 bg-gradient-to-r from-[#74ebd5] to-[#acb6e5]">
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#f6d365] to-[#fda085] rotate-2 -z-10"></div>
          <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-[#84fab0] to-[#8fd3f4] -rotate-2 -z-10"></div>
          <div className="relative flex items-center justify-center w-full h-full rounded-lg bg-[#292b2c] z-20 text-white overflow-hidden">
            <img
              className="h-full w-full object-cover rounded-lg"
              src={pro4} // Use your image source here
              alt="Card Image"
            />
          </div>
        </div>

        {/* Button below Card 1 */}
        <div className="flex justify-center mt-4">
          <a href="https://blogify25.vercel.app/">
            <Button />
          </a>
        </div>
        </div>


        <div>
<div className="p-4 text-center">
AUDIO AND IMAGE GENERATOR
</div>


<div className="relative w-[250px] h-[450px] p-[5px] rounded-xl overflow-hidden z-10 bg-gradient-to-r from-[#74ebd5] to-[#acb6e5]">
  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#f6d365] to-[#fda085] rotate-2 -z-10"></div>
  <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-[#84fab0] to-[#8fd3f4] -rotate-2 -z-10"></div>
  <div className="relative flex items-center justify-center w-full h-full rounded-lg bg-[#292b2c] z-20 text-white overflow-hidden">
    <img
      className="h-full w-full object-cover rounded-lg"
      src={pro7} // Use your image source here
      alt="AUDIO AND IMAGE GENERATOR"
    />
  </div>
</div>

{/* Button below Card 1 */}
<div className="flex justify-center mt-4">
  <a href="https://synthovision.vercel.app/">
    <Button />
  </a>
</div>
</div>


<div>
<div className="p-4 text-center">
  IMAGE BACKGROUND REMOVER
</div>

{/* Card 1 */}
<div className="relative w-[250px] h-[450px] p-[5px] rounded-xl overflow-hidden z-10 bg-gradient-to-r from-[#74ebd5] to-[#acb6e5]">
  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#f6d365] to-[#fda085] rotate-2 -z-10"></div>
  <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-[#84fab0] to-[#8fd3f4] -rotate-2 -z-10"></div>
  <div className="relative flex items-center justify-center w-full h-full rounded-lg bg-[#292b2c] z-20 text-white overflow-hidden">
    <img
      className="h-full w-full object-cover rounded-lg"
      src={pro9} // Use your image source here
      alt="IMAGE BACKGROUND REMOVER"
    />
  </div>
</div>

{/* Button below Card 1 */}
<div className="flex justify-center mt-4">
  <a href="https://github.com/katarisreelasya/bgr">
    <Button />
  </a>
</div>
</div>

<div>
<div className="p-4 text-center">
OTT APPLICATION
</div>


<div className="relative w-[250px] h-[450px] p-[5px] rounded-xl overflow-hidden z-10 bg-gradient-to-r from-[#74ebd5] to-[#acb6e5]">
  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#f6d365] to-[#fda085] rotate-2 -z-10"></div>
  <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-[#84fab0] to-[#8fd3f4] -rotate-2 -z-10"></div>
  <div className="relative flex items-center justify-center w-full h-full rounded-lg bg-[#292b2c] z-20 text-white overflow-hidden">
    <img
      className="h-full w-full object-cover rounded-lg"
      src={pro8} // Use your image source here
      alt="OTT APPLICATION"
    />
  </div>
</div>

{/* Button below Card 1 */}
<div className="flex justify-center mt-4">
  <a href="https://github.com/katarisreelasya/movie-OTT">
    <Button />
  </a>
</div>
</div>



<div>
<div className="p-4 text-center">
TODO LIST APPLICATION
</div>

{/* Card 1 */}
<div className="relative w-[250px] h-[450px] p-[5px] rounded-xl overflow-hidden z-10 bg-gradient-to-r from-[#74ebd5] to-[#acb6e5]">
  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#f6d365] to-[#fda085] rotate-2 -z-10"></div>
  <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-[#84fab0] to-[#8fd3f4] -rotate-2 -z-10"></div>
  <div className="relative flex items-center justify-center w-full h-full rounded-lg bg-[#292b2c] z-20 text-white overflow-hidden">
    <img
      className="h-full w-full object-cover rounded-lg"
      src={pro1} // Use your image source here
      alt="TODO LIST"
    />
  </div>
</div>

{/* Button below Card 1 */}
<div className="flex justify-center mt-4">
  <a href="https://github.com/katarisreelasya/redux1">
    <Button />
  </a>
</div>
</div>

<div>
<div className="p-4 text-center">
RANDOM QUOTE GENERATOR
</div>

{/* Card 1 */}
<div className="relative w-[250px] h-[450px] p-[5px] rounded-xl overflow-hidden z-10 bg-gradient-to-r from-[#74ebd5] to-[#acb6e5]">
  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#f6d365] to-[#fda085] rotate-2 -z-10"></div>
  <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-[#84fab0] to-[#8fd3f4] -rotate-2 -z-10"></div>
  <div className="relative flex items-center justify-center w-full h-full rounded-lg bg-[#292b2c] z-20 text-white overflow-hidden">
    <img
      className="h-full w-full object-cover rounded-lg"
      src={pro6} // Use your image source here
      alt="RANDOM QUOTE GENERATOR"
    />
  </div>
</div>

{/* Button below Card 1 */}
<div className="flex justify-center mt-4">
  <a href="https://github.com/katarisreelasya/random">
    <Button />
  </a>
</div>
</div>


        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
