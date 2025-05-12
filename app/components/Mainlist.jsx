const Mainlist = ({ isScroll }) => {
  return (
    <>
      <ul
        className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
          isScroll
            ? ""
            : "bg-white/50 shadow-sm dark:border dark:border-white/50 dark:bg-transparent"
        }`}
      >
        <li>
          <a className="font-Ovo" href="#top" aria-label="Ir a la sección de Inicio">
            Inicio
          </a>
        </li>
        <li>
          <a className="font-Ovo" href="#about" aria-label="Ir a la sección Sobre mí">
            Sobre mí
          </a>
        </li>
        <li>
          <a className="font-Ovo" href="#services" aria-label="Ir a la sección de Servicios">
            Servicios
          </a>
        </li>
        <li>
          <a className="font-Ovo" href="#work" aria-label="Ir a la sección de Proyectos">
            Proyectos
          </a>
        </li>
        <li>
          <a className="font-Ovo" href="#contact" aria-label="Ir a la sección de Contacto">
            Contacto
          </a>
        </li>
      </ul>
    </>
  );
};

export default Mainlist;

