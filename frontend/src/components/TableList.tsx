import React from "react";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header, ModalAction, Permission, Role, Task, User } from "../types";
// import navigate

// interface Header {
//   label: string;
//   key: keyof User | keyof Task;
// }

interface TableListProps {
  headers: Header[];
  data: User[] | Task[] | Role[] | Permission[];
  dispatch: React.Dispatch<ModalAction>;
}

function TableList({ headers, data, dispatch }: TableListProps) {
  // const navigate = useNavigate();
  const handleModal = () => {
    dispatch({ type: "OPEN" });
  };

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={String(header.key)}>{header.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((record) => (
            <tr key={record.id}>
              {headers.map((header) => (
                <td key={String(header.key)}>
                  {header.key === "id" ? (
                    <a onClick={handleModal} style={{ cursor: "pointer" }}>
                      {" "}
                      {String(record[header.key])}
                    </a>
                  ) : (
                    String(record[header.key])
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default TableList;
