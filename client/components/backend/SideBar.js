import Link from "next/link";

export const SideBar = () => {
  return (
    <aside className="menu" style={{borderRight:"1px solid #f2466742"}}>
      <p className="menu-label">&nbsp;<i className="fa fa-info-circle"></i>&nbsp;General</p>
      <ul className="menu-list">
        <li>
          <Link href="/admin">
            <a>&nbsp;<i className="fa fa-dashboard"></i>&nbsp;Dashboard</a>
          </Link>
        </li>
      </ul>
      <p className="menu-label">&nbsp;<i className="fa fa-users"></i>&nbsp;Manage Users</p>
      <ul className="menu-list">
        <li>
          <Link href="/admin/user">
            <a>&nbsp;<i className="fa fa-user"></i>&nbsp;Users' List</a>
          </Link>
        </li>
        {/* <li>
          <a className="is-active">Manage Your Team</a>
          <ul>
            <li>
              <a>Members</a>
            </li>
            <li>
              <a>Plugins</a>
            </li>
            <li>
              <a>Add a member</a>
            </li>
          </ul>
        </li> */}
      </ul> 
      <p className="menu-label">&nbsp;<i className="fa fa-cube"></i>&nbsp;Product</p>
      <ul className="menu-list">
        <li>
          <Link href="/admin/product">
            <a>&nbsp;<i className="fa fa-cube"></i>&nbsp;Products' List</a>
          </Link>
        </li>
        <li>
          <Link href="/admin/product/create">
            <a>&nbsp;<i className="fa fa-cube"></i>&nbsp;Create Product</a>
          </Link>
        </li>
      </ul>
      <p className="menu-label">&nbsp;<i className="fa fa-envelope"></i>&nbsp;Submissions & Subscriptions</p>
      <ul className="menu-list">
        <li>
          <Link href="/admin/newsletter">
            <a>&nbsp;<i className="fa fa-envelope"></i>&nbsp;Newsletter Subscriptions</a>
          </Link>
        </li>
        <li>
          <Link href="/admin/contactForm">
            <a>&nbsp;<i className="fa fa-envelope"></i>&nbsp;Contact Form Submissions</a>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
