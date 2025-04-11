import { useState } from "react";
import { FormField, taskFormFields } from "../types/FormTypes";
import { Col, Container, Form, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // This should be at the top of your index.tsx or App.tsx

export default function DetailForm() {
  // id: string;      // Unique identifier for each field
  // label: string;   // Label for the field
  // type: string;    // Type of the input (text, number, date, etc.)
  // value: string;   // Default value of the input
  // options?: string[];
  const [formData, setFormData] = useState({
    id: 1,
    title: "Implement Login",
    description: "Create login functionality with JWT",
    priority: "High",
    status: "In Progress",
    roles: ["Developer", "Tester"],
    points: 8,
  });
  const handleChange = () => {};
  const handleSubmit = () => {};
  return (
    <div>
      <div className="d-flex justify-content-center">
        <p>Details</p>
      </div>
      <div className="d-flex justify-content-center">
        {/* <button className="btn btn-sm btn-outline-primary">Save</button> */}
        <button className="btn btn-sm btn-outline-secondary mx-2">View</button>
        <button className="btn btn-sm btn-outline-danger">Delete</button>
      </div>
      <Container className="mt-5">
        <Form onSubmit={handleSubmit}>
          <Row>
            {taskFormFields.map((field: FormField) => {
              switch (field.type) {
                case "number":
                case "text":
                  return (
                    <Col md={6} sm={10} className="mb-3">
                      <Form.Group>
                        <Form.Label>{field.label}</Form.Label>
                        <Form.Control
                          type={field.type}
                          name={field.id}
                          value={formData[field.id as keyof typeof formData]}
                          onChange={handleChange}
                          required={field.required}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  );
                  break;
                case "textarea":
                  return (
                    <Col md={12} className="mb-3">
                      <Form.Group>
                        <Form.Label className="fw-b">{field.label}:</Form.Label>
                        <Form.Control
                          as="textarea"
                          name={field.id}
                          value={formData[field.id as keyof typeof formData]}
                          onChange={handleChange}
                          required={field.required}
                          rows={5}
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  );
                  break;

                case "select":
                  return (
                    <Col md={6} className="mb-3">
                      <Form.Group>
                        <Form.Label>{field.label}</Form.Label>
                        <Form.Control
                          as="select"
                          name={field.id}
                          value={formData[field.id as keyof typeof formData]}
                          onChange={handleChange}
                          required={field.required}
                        >
                          {field.options?.map((option, idx) => (
                            <option key={idx} value={option}>
                              {option}
                            </option>
                          ))}
                        </Form.Control>
                      </Form.Group>
                    </Col>
                  );
                  break;

                default:
                  break;
              }
            })}
          </Row>
          <div className="d-flex justify-content-center">
            <button className="btn btn-sm btn-outline-primary">Save</button>
          </div>
        </Form>
      </Container>
    </div>
  );
}
