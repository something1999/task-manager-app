import React from "react";
import { Modal } from "react-bootstrap";
import DetailForm from "./DetailForm";
import "bootstrap/dist/css/bootstrap.min.css";
import { ModalAction } from "../types";

const DetailsModal: React.FC<{
  isOpen: boolean;
  dispatch: React.Dispatch<ModalAction>;
}> = ({ isOpen, dispatch }) => {
  const handleClose = () => {
    dispatch({ type: "CLOSE" });
  };
  return (
    <div>
      <Modal show={isOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-center"></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DetailForm />
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
};
export default DetailsModal;
