import React from "react";
import { Container } from "react-bootstrap";

const Header: React.FC = () => {
  return (
    <div className="Container">
      {/* Using "Container" directly for layout */}
      <Container fluid>
        <div className="row">
          <div className="col-3 col-md-3">Tasks</div>
          <div className="col-3 col-md-3">Tasks</div>
          <div className="col-3 col-md-3">Tasks</div>
          <div className="col-3 col-md-3">Tasks</div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
