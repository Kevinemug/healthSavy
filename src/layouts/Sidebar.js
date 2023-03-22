import { Button, Nav, NavItem } from "reactstrap";
import { Link, useLocation } from "react-router-dom";
import "../assets/scss/layout/_sidebar.scss";
const navigation = [
  {
    title: "Overwiew",
    href: "/dashboard/starter",
    icon: "bi bi-speedometer2",
  },
  {
    title: "Appointments",
    href: "/dashboard/alerts",
    icon: "bi bi-bell",
  },
  {
    title: "Messages",
    href: "/dashboard/buttons",
    icon: "bi bi-hdd-stack",
  },
  {
    title: "Patient List",
    href: "/dashboard/cards",
    icon: "bi bi-card-text",
  },
  {
    title: "Free hours",
    href: "/dashboard/grid",
    icon: "bi bi-columns",
  },
  {
    title: "Table",
    href: "/dashboard/table",
    icon: "bi bi-layout-split",
  },
  {
    title: "Forms",
    href: "/dashboard/forms",
    icon: "bi bi-textarea-resize",
  },
  {
    title: "About",
    href: "/dashboard/about",
    icon: "bi bi-people",
  },
];

const Sidebar = () => {
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  let location = useLocation();

  return (
    <div className="bg-dark">
      <div className="d-flex">
        <Button
          color="white"
          className="ms-auto text-white d-lg-none"
          onClick={() => showMobilemenu()}
        >
          <i className="bi bi-x"></i>
        </Button>
      </div>
      <div className="p-3 mt-2">
        <Nav vertical className="sidebarNav" style={{ position: "fixed" }}>
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link
                to={navi.href}
                className={
                  location.pathname === navi.href
                    ? "active nav-link py-3"
                    : "nav-link py-3"
                }
              >
                <i className={navi.icon}></i>
                <span className="ms-3 d-inline-block">{navi.title}</span>
              </Link>
            </NavItem>
          ))}
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
