
const SocialMediaIcons = () => {
    return (
        <div className="flex justify-center md:justify-start my-10 gap-7">
            <a className="hover:opacity-50 transition duration-500"
                href="https://www.linkedin.com/in/katarisreelasya/"
                target="_blank"
                rel="noreferrer"
            >
                <img src={require('../assets/linkedin.png')} alt='linkedin-link' />
            </a>
            <a className="hover:opacity-50 transition duration-500 -mt-2"
                href="https://github.com/katarisreelasya"
                target="_blank"
                rel="noreferrer"
            >
                <img src={require('../assets/github-icon.svg').default} alt='github-link' />
            </a>
            <a className="hover:opacity-50 transition duration-500 -mt-0.5"
                href="https://www.hackerrank.com/profile/sreelasya2503"
                target="_blank"
                rel="noreferrer"
            >
                <img src={require('../assets/hackerrank1.png')} alt='leetcode-link' />
            </a>
            
        </div>
    )
}

export default SocialMediaIcons;