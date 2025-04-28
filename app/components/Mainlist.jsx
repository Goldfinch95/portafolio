const Mainlist = ({ isScroll }) => {
  return (
    <>
      <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-white/50 shadow-sm"}`}>
        <li>
          <a className="font-Ovo" href="#top" aria-label="Go to Home section">Home</a>
        </li>
        <li>
          <a className="font-Ovo" href="#about" aria-label="Go to About Me section">About Me</a>
        </li>
        <li>
          <a  className="font-Ovo" href="#services" aria-label="Go to Services section">Services</a>
        </li>
        <li>
          <a className="font-Ovo" href="#work" aria-label="Go to My Work section">My Work</a>
        </li>
        <li>
          <a  className="font-Ovo" href="#contact" aria-label="Go to Contact Me section">Contact Me</a>
        </li>
      </ul>
    </>
  );
};

export default Mainlist;
