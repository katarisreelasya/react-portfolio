import { useState, useEffect } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-yellow" : ""
      } hover:text-yellow transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const navbarBackground = isTopOfPage ? "" : "bg-custom-blue";

  // Update selected page based on scroll position
  const handleScroll = () => {
    const sections = ["home", "about", "skills", "Certifications", "projects", "contact"];
    const scrollPosition = window.scrollY;

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const { top, bottom } = element.getBoundingClientRect();
        if (top <= window.innerHeight / 2 && bottom >= window.innerHeight / 2) {
          setSelectedPage(section);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <h4 className="font-playfair text-3xl font-bold">KSL</h4>

        {/* DESKTOP NAV */}
        {isDesktop ? (
          <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
            <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
<Link page="About" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
<Link page="Skills" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
<Link page="Certifications" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
<Link page="Projects" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
<Link page="Contact" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />

          </div>
        ) : (
          <button
            className="rounded-full bg-custom-blue"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <img alt="menu-icon" src={require('../assets/menu-icon.svg').default} />
          </button>
        )}

        {/* MOBILE MENU POPUP */}
        {!isDesktop && isMenuToggled && (
          <div className="fixed right-0 bottom-0 h-full bg-blue w-[250px]">
            {/* CLOSE ICON */}
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <img alt="close-icon" src={require('../assets/close-icon.svg').default} />
              </button>
            </div>

            {/* MENU ITEMS */}
            <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="About"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Skills"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Certifications"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Projects"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Contact"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          </div>
        )}

        {/* BUTTON CODE ADDED HERE */}
        <a
  className="bg-gradient-rainblue text-deep-blue rounded-full py-2 px-7 font-semibold hover:bg-blue hover:text-white transition duration-500"
  href="https://drive.google.com/file/d/17c-8JyMwwZxNwSEK6fdH9CLuEeDHkgQi/view?usp=drive_link"
  target="https://drive.google.com/file/d/17c-8JyMwwZxNwSEK6fdH9CLuEeDHkgQi/view?usp=drive_link" // Opens the link in a new tab
  rel="noopener noreferrer" // Prevents security vulnerabilities
>
  Resume
</a>

      </div>
    </nav>
  );
};

export default Navbar;
