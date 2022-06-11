import Link from "next/link";

const Nav = () => {
  return (
    <>
      <section className="hero is-medium is-bold">
        <div className="hero-head">
          <nav className="navbar">
            <div className="container">
              <div className="navbar-brand">
                <a className="navbar-item" href="../">
                  <img
                    src="http://bulma.io/images/bulma-type-white.png"
                    alt="Logo"
                  />
                </a>
                <span className="navbar-burger burger" data-target="navbarMenu">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              <div id="navbarMenu" className="navbar-menu">
                <div className="navbar-end">
                  <div className="tabs is-right">
                    <ul>
                      <li className="is-active">
                        <Link href="/">Home</Link>
                      </li>
                      <li>
                        <Link href="/about">About</Link>
                      </li>
                      <li>  
                        <Link href="/contact">Contact</Link>
                      </li>
                      {/* <li>
                        <Link href="/help">Help</Link>
                      </li> */}
                    </ul>
                    <span className="navbar-item">
                      <a
                        className="button is-outlined"
                        href="/logout"
                      >
                        <span className="icon">
                          <i className="fas fa-power-off"></i>
                        </span>
                        <span title="Logout">
                          Logout
                        </span>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">
              The new standard in &lt;insert industry here&gt;
            </h1>
            <h2 className="subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </h2>
          </div>
        </div>
      </section>
    </>
  );
};
export default Nav;
