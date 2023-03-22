import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Container } from "reactstrap";
import "../assets/scss/layout/_container.scss";
const FullLayout = () => {
  return (
    <main>
      {/********header**********/}
      {/* <Header /> */}
      <div className="pageWrapper d-lg-flex">
        {/********Sidebar**********/}
        <aside className="sidebarArea shadow" id="sidebarArea">
          <Sidebar />
        </aside>
        {/********Content Area**********/}
        <div
          style={{
            height: "auto",
            overflow: "auto",
            width: "70%",
            marginLeft: "300px",
          }}
        >
          {/********Middle Content**********/}
          {/* <Container className="p-4" fluid> */}
          <Outlet />
          {/* </Container> */}
        </div>
      </div>
    </main>
  );
};

export default FullLayout;
