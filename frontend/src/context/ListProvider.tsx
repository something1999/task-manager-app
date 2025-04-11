import { useReducer } from "react";
import ListReducer from "../hooks/ListReducer";
import { userHeaders, users } from "../Datacom";
import { ListContext } from "./ListContext";

const ListProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(ListReducer, {
    data: users,
    headers: userHeaders,
  });

  return (
    <ListContext.Provider value={{ state, dispatch }}>
      {children}
    </ListContext.Provider>
  );
};

export default ListProvider;
