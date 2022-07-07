import Link from "next/link";
import { useRouter } from "next/router";
import { logoutAction } from "@/store/actions/authAction";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import Image from "next/image";
export const Logo = () => {
  return (
    <>
      <Image src="/logo.png" alt="Logo" width={60} height={50} />
      <span>Civil</span>
    </>
  );
};
export const Nav = () => {
  const dispatch = useDispatch();
  const { asPath, push } = useRouter();
  const onLogout = () => {
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
    <section className="hero is-medium is-bold ddark">
      <div className="hero-head">
        <nav className="navbar">
          <div className="container">
            <div id="navbarMenu" className="navbar-menu">
              <div className="navbar-brand">
                <Link href="/">
                  <a className="navbar-item">
                    <Logo />
                  </a>
                </Link>
                <a
                  role="button"
                  className="navbar-burger"
                  aria-label="menu"
                  aria-expanded="false"
                  data-target="navbarBasicExample"
                >
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                </a>
              </div>
              <div className="navbar-end">
                <div className="tabs is-right">
                  <ul>
                    <li>
                      <div className="navbar-brand is-pulled-left">
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
                        <a>
                          &nbsp;<i className="fa fa-home"></i>&nbsp;Home
                        </a>
                      </Link>
                    </li>
                    <li className={asPath == "/about" ? "is-active" : ""}>
                      <Link href="/about">
                        <a>
                          &nbsp;<i className="fa fa-info-circle"></i>&nbsp;About
                        </a>
                      </Link>
                    </li>
                    <li className={asPath == "/contact" ? "is-active" : ""}>
                      <Link href="/contact">
                        <a>
                          &nbsp;<i className="fa fa-phone"></i>&nbsp;Contact
                        </a>
                      </Link>
                    </li>
                    {authStatus == "unauthenticated" ? (
                      <>
                        <li className={asPath == "/login" ? "is-active" : ""}>
                          <Link href="/login">
                            <a>
                              &nbsp;<i className="fa fa-sign-in"></i>&nbsp;Login
                            </a>
                          </Link>
                        </li>
                        <li
                          className={asPath == "/register" ? "is-active" : ""}
                        >
                          <Link href="/register">
                            <a>
                              &nbsp;<i className="fa fa-user-plus"></i>
                              &nbsp;Register
                            </a>
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
                        <Link
                          href={
                            auth.user.role == "ADMIN" ? "/admin" : "/profile"
                          }
                        >
                          <a className="button is-outlined is-danger">
                            <span className="icon">
                              <i className="fa fa-user"></i>
                            </span>
                            <span title="Profile">{auth.user.email}</span>
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
