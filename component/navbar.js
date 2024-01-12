import Link from "next/link";

const Navbar = () => (
  // <div className="container ">
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-full">
    <div className="container-fluid">
      <Link legacyBehavior href="/">
        <a className="navbar-brand">Simple Portfolio</a>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse " id="navbarNav">
        <ul className="navbar-nav  ms-auto px-5">
          <li className="nav-item ">
            <Link legacyBehavior href="/blog">
              <a className="nav-link">Blog</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link legacyBehavior href="github">
              <a className="nav-link px-5">GitHub</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  // </div>
);

export default Navbar;
