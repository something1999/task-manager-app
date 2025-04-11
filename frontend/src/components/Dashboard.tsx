import React, { useReducer, useState } from "react";
import TableList from "./TableList";
import SidePanel from "./SidePanel";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row } from "react-bootstrap";
import DetailsModal from "./DetailsModal";
import DetailModalReducer from "../hooks/DetailModalReducer";
import useListContext from "../context/ListContext";

const Dashboard: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("users");

  const handleSelectSection = (section: "users" | "tasks") => {
    setActiveSection(section);
    // if (activeSection === "users") {
    //   setHeaders(userHeaders);
    //   setData(users);
    // } else {
    //   setHeaders(taskHeaders);
    //   setData(tasks);
    // }
    listDispatch({ type: section });
  };
  const [detailModalState, detailModalDispatch] = useReducer(
    DetailModalReducer,
    { isModalOpen: false }
  );
  const { state: listState, dispatch: listDispatch } = useListContext();
  if (!listState) {
    return <div>Loading...</div>; // Handle the case where state might be undefined
  }
  return (
    <div className="app-container">
      <Row className="d-flex">
        <Col
          md={3}
          // className="p-0"
          style={{ height: "100vh" }}
        >
          <SidePanel
            onSelectSection={handleSelectSection}
            activeSection={activeSection}
          />
        </Col>
        <Col md={9}>
          <div
            // className="content"
            style={{ height: "100vh", overflowY: "auto" }}
          >
            <TableList
              headers={listState.headers}
              data={listState.data}
              dispatch={detailModalDispatch}
            />
          </div>
          <DetailsModal
            isOpen={detailModalState.isModalOpen}
            dispatch={detailModalDispatch}
          />
          {/* <button onClick={handleModal}>hey</button> */}
        </Col>
      </Row>
    </div>
  );
};
export default Dashboard;
