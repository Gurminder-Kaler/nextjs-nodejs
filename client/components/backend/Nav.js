import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { logoutAction } from "@/store/actions/authAction";
import Image from "next/image";
const Logo = () => {
  return (
    <>
      <Image src="/logo.png" alt="Logo" width={60} height={50} />
      <span>Civil</span>
    </>
  );
};
export const Nav = () => {
  const dispatch = useDispatch();
  const { push } = useRouter();
  const onLogout = () => {
    logoutAction(push, dispatch);
  };
  return (
    <div className="container-fluid">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link href="/">
            <a className="navbar-item">
              <Logo/>
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

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <button
                  className="button is-success"
                  type="button" 
                >&nbsp;<i className="fa fa-user"></i>&nbsp;Welcome, Admin
                  </button>
                <button
                  className="button is-danger"
                  type="button"
                  onClick={onLogout}
                >
                  <strong>
                    <i className="fa fa-power-off"></i>&nbsp;Logout
                  </strong>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
