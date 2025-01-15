import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="pt-36 pb-24">
      {/* ABOUT */}
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
            <span className="text-red">ABOUT {""}</span>ME
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
  Hey there! I'm a passionate Computer Science student with a knack for building impactful projects. 🚀
  <br />
  While I’m still sharpening my coding skills, I excel at bringing ideas to life through projects – especially in Web Development! 💻✨
  <br />
  From MERN stack apps to responsive UI designs, I enjoy crafting smooth and functional digital experiences. 
  <br /> 
  I'm always eager to learn, adapt, and embrace new challenges – whether it’s solving problems or diving into new tech trends! 📚🔧
</p>

      </motion.div>
    </section>
  );
};

export default About;
