import { SideBar } from "@/components/backend/SideBar";
import { Nav } from "@/components/backend/Nav";

export const BackEndLayout = ({ children }) => {
  return (
    <>
      <div className="rows">
        <div className="row">
          <Nav />
        </div>
      </div>
      <div className="columns">
        <div className="column is-3">
          <SideBar />
        </div>
        <div className="column is-9">{children}</div>
      </div>
    </>
  );
};

export default BackEndLayout;
