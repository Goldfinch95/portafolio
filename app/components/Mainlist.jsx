const Mainlist = ({ isScroll }) => {
  return (
    <>
      <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50"}`}>
        <li>
          <a href="#top" aria-label="Go to Home section">Home</a>
        </li>
        <li>
          <a href="#about" aria-label="Go to About Me section">About Me</a>
        </li>
        <li>
          <a href="#services" aria-label="Go to Services section">Services</a>
        </li>
        <li>
          <a href="#work" aria-label="Go to My Work section">My Work</a>
        </li>
        <li>
          <a href="#contact" aria-label="Go to Contact Me section">Contact Me</a>
        </li>
      </ul>
    </>
  );
};

export default Mainlist;
