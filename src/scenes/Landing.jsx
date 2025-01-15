import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Landing = ({setSelectedPage}) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    return (
        <section id="home" className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10">

            {/* IMAGE SECTION */}
            <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
                {isAboveMediumScreens ? (
                    <div className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 
                        before:rounded-t-[400px] before:w-full before:-w-[400px] before:h-full before:border-2
                        before:border-blue before:z-[-1]
                    ">
                        <img className=" z-10 w-60
                            max-w-[400px] md:max-w-[600px] rounded-t-full"
                            alt="profile-image" src={require('../assets/mypic.jpg')} />
                    </div>
                ) : (
                    <img className=" z-10 w-60
                            max-w-[400px] md:max-w-[600px] rounded-t-full"
                            alt="profile-image" src={require('../assets/mypic.jpg')} 
                    />
                )}
                </div>
                {/* MAIN SECTION */}
                <div className="z-30 basis-2/5 mt-12 md:mt-32">
                    {/* HEADINGS */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5}}
                        transition={{ duration: 0.5}}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0}
                        }}
                    >
                        <p className="text-5xl font-playfair z-10 text-center md:text-start whitespace-nowrap">
                            Sree Lasya {""}
                            <span className="xs:relative xs:text-deep-blue font-semibold z-20 before:content-brush before:absolute before:-left-[25px] before:top-1/2 before:transform before:-translate-y-1/2 before:z-[-1]">
                                Katari
                            </span>
                            </p>

                        <p className="mt-10 mb-7 text-sm text-center md:text-start">
                            Just a Web-Dev & Competitive Coding Enthusiast. 
                            <br></br>Always up for learning and leveling up my skills 📚🎮. 
                            <br></br>Turning Coffee 🥤 into Code ✌🏻. 
                            <br></br>I adapt faster than a software update 🚀🔄
                            <br></br>Creating Impactful Projects & Solutions.
                        </p>
                    </motion.div>

                    {/* CALL TO ACTIONS */}
                    <motion.div
                        className="flex mt-5 justify-center md:justify-start"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5}}
                        transition={{ delay: 0.2, duration: 0.5}}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0}
                        }}
                    >
                        <AnchorLink
                            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
                                hover:bg-blue hover:text-white transition duration-500"
                            onClick={() => setSelectedPage("contact")}
                            href="#contact"
                        >
                            Contact Me
                        </AnchorLink>
                        <AnchorLink
                            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
                            onClick={() => setSelectedPage("contact")}
                            href="#contact"
                        >
                            <div
                                className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center
                                    justify-center font-playfair px-10"
                            >
                                Let's Talk.
                            </div>
                        </AnchorLink>
                    </motion.div>
                    <motion.div
                        className="flex mt-5 justify-center md:justify-start"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5}}
                        transition={{ delay: 0.4, duration: 0.5}}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0}
                        }}
                    >
                        <SocialMediaIcons />
                    </motion.div>
                </div>

        </section>
    )
}

export default Landing