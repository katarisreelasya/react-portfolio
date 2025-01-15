import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
    return (
        <footer className="bg-custom-blue">
            <div className="container mx-auto">
                <div className="flex flex-wrap justify-between items-center">
                    <SocialMediaIcons />
                    <div className="md:flex justify-center md:justify-between text-center">
                        <p className="font-playfair text-md text-yellow text-l ">
                            <span className="font-semibold">©️2024 - </span> All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;