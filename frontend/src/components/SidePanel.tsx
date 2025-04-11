// import { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

interface SidePanelProps {
  onSelectSection: (section: string) => void;
  activeSection: string;
}
const SidePanel: React.FC<SidePanelProps> = ({
  onSelectSection,
  activeSection,
}) => {
  // const [showSidebar, SetShowSidebar] = useState(false);
  // const toggleSidebar = () => SetShowSidebar(!showSidebar);
  return (
    <div>
      <Navbar
        bg="light"
        expand="lg"
        className="d-none d-lg-flex flex-column p-3"
        style={{ height: "100vh", width: "250px" }}
      >
        <Navbar.Brand>Admin Panel</Navbar.Brand>
        <Nav className="flex-column">
          <Nav.Link
            onClick={() => onSelectSection("users")}
            active={activeSection === "users"}
          >
            Users
          </Nav.Link>
          <Nav.Link
            onClick={() => onSelectSection("tasks")}
            active={activeSection === "tasks"}
          >
            Tasks
          </Nav.Link>
          <Nav.Link
            onClick={() => onSelectSection("roles")}
            active={activeSection === "roles"}
          >
            Roles
          </Nav.Link>
          <Nav.Link
            onClick={() => onSelectSection("permissions")}
            active={activeSection === "permissions"}
          >
            Permissions
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};
export default SidePanel;
