import Link from "next/link";

import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";

const Nav = () => {
  const { asPath } = useRouter();
  const { data: session, status } = useSession();

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

  console.log("session", session);
  console.log("loading", status);

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
                    {status == "unauthenticated" ? (
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
                  {status == "authenticated" ? (
                    <>
                      <span className="navbar-item">
                        <a
                          className="button is-outlined is-danger"
                          href="/profile"
                        >
                          <span className="icon">
                            <i className="fa fa-user"></i>
                          </span>
                          <span title="Profile">{session ? session.user.name : ''}</span>
                        </a>
                      </span>
                      <span className="navbar-item">
                        <a
                          className="button is-outlined is-danger"
                          href="/logout"
                        >
                          <span className="icon">
                            <i className="fa fa-power-off"></i>
                          </span>
                          <span title="Logout">Logout</span>
                        </a>
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
