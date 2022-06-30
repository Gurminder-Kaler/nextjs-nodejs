import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { logoutAction } from "@/store/actions/authAction";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
const Nav = () => {
  const dispatch = useDispatch();
  const { asPath, push } = useRouter();

  const Logo = (props) => {
    return (
      <h2>
        <a>
          <span>
            <Image src="/logo.png" alt="Logo" width={60} height={50} />
            <h3>Civil</h3>
          </span>
        </a>
      </h2>
    );
  };

  const onLogout = () => {
    // console.log('ONLOGOUT push dispatch', push, dispatch);
    logoutAction(push, dispatch);
  };
  const { auth } = useSelector((state) => state);
  console.log("AUTH AUTH NAV JS", auth);
  const [authStatus, setAuthStatus] = useState(
    auth.isAuthenticated ? "authenticated" : "unauthenticated"
  );
  const [authToken, setAuthToken] = useState(null);
  useEffect(() => {
    const jwtToken = localStorage.getItem("jwtToken");
    setAuthToken(jwtToken);
  }, [auth]);

  useEffect(() => {
    if (authToken) {
      if (authStatus == "unauthenticated") {
        setAuthStatus("authenticated");
      }
    } else {
      if (authStatus == "authenticated") {
        setAuthStatus("unauthenticated");
      }
    }
  }, [asPath, authToken, auth]);

  return (
    <section className="hero is-medium is-bold">
      <div className="hero-head">
        <nav className="navbar">
          <div className="container">
            <div id="navbarMenu" className="navbar-menu">
              <div className="navbar-end">
                <div className="tabs is-right">
                  <ul>
                    <li>
                      <div className="navbar-brand is-pulled-left">
                        <Link className="navbar-item" href="/">
                          <Logo />
                        </Link>
                        <span
                          className="navbar-burger burger"
                          data-target="navbarMenu"
                        >
                          <span></span>
                          <span></span>
                          <span></span>
                        </span>
                      </div>
                    </li>
                    <li className={asPath == "/" ? "is-active" : ""}>
                      <Link href="/">
                        <a>Home</a>
                      </Link>
                    </li>
                    <li className={asPath == "/about" ? "is-active" : ""}>
                      <Link href="/about">
                        <a>About</a>
                      </Link>
                    </li>
                    <li className={asPath == "/contact" ? "is-active" : ""}>
                      <Link href="/contact">
                        <a>Contact</a>
                      </Link>
                    </li>
                    {authStatus == "unauthenticated" ? (
                      <>
                        <li className={asPath == "/login" ? "is-active" : ""}>
                          <Link href="/login">
                            <a>Login</a>
                          </Link>
                        </li>
                        <li
                          className={asPath == "/register" ? "is-active" : ""}
                        >
                          <Link href="/register">
                            <a>Register</a>
                          </Link>
                        </li>
                      </>
                    ) : (
                      ""
                    )}

                    {/* <li>
                        <Link className={asPath == "/" ? "is-active" : ""} href="/help">Help</Link>
                      </li> */}
                  </ul>
                  {authStatus == "authenticated" ? (
                    <>
                      <span className="navbar-item">
                        <Link href="/profile">
                          <a className="button is-outlined is-danger">
                            <span className="icon">
                              <i className="fa fa-user"></i>
                            </span>
                            <span title="Profile">
                              {/* {session ? session.user.name : ""} */}
                              aman
                            </span>
                          </a>
                        </Link>
                      </span>
                      <span className="navbar-item">
                        <button
                          className="button is-outlined is-danger"
                          type="button"
                          onClick={onLogout}
                        >
                          <span className="icon">
                            <i className="fa fa-power-off"></i>
                          </span>
                          <span title="Logout">Logout</span>
                        </button>
                      </span>
                    </>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
};
export default Nav;
