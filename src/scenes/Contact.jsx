import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <section id="contact" className="mt-12 py-16 bg-gradient-to-b from-blue-50 to-blue-100">
            <div className="max-w-screen-xl mx-auto px-4">
                <div className="text-center">
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
                        <p className="font-playfair text-4xl font-semibold text-gray-800">
                            <span className="text-custom-blue">CONTACT {""}</span>ME
                        </p>
                        <div className="flex justify-center mt-5">
                            <LineGradient width="w-1/2" />
                        </div>
                    </motion.div>
                </div>

                {/* Contact Information */}
                <div className="flex flex-col items-center justify-center md:flex-row mt-12 space-y-8 md:space-y-0 md:space-x-8">
                    <motion.div
                        className="md:w-1/2"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                    >
                        <img 
                            src={require('../assets/contact-image.jpeg')} 
                            alt="contact-image" 
                            className="w-1/2 scale-100 rounded-full shadow-lg transition-transform duration-500 transform hover:scale-110" 
                        />
                    </motion.div>

                    <motion.div
                        className="md:w-1/2 text-center md:text-left"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: 50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                    >
                        <p className="font-semibold text-lg text-gray-600 mb-4">
                            Hey there! Feel free to reach out to me through the following:
                        </p>
                        <p className="font-semibold text-lg text-gray-600 hover:text-custom-blue transition duration-300">
                            <span className="font-bold">Email: </span> 
                            <a href="mailto:katarisreelasya25@gmail.com" className="hover:underline">katarisreelasya25@gmail.com</a>
                        </p>
                        <p className="font-semibold text-lg text-gray-600 hover:text-custom-blue transition duration-300 mt-4">
                            <span className="font-bold">LinkedIn: </span>
                            <a href="https://www.linkedin.com/in/katarisreelasya" target="_blank" rel="noopener noreferrer" className="hover:underline">katarisreelasya</a>
                        </p>
                        <p className="font-semibold text-lg text-gray-600 hover:text-custom-blue transition duration-300 mt-4">
                            <span className="font-bold">Instagram: </span>
                            <a href="https://www.instagram.com/__dolly25__/" target="_blank" rel="noopener noreferrer" className="hover:underline">__dolly25__</a>
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
