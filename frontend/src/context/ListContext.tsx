import { createContext, useContext } from "react";
import { ListAction, ListState } from "../types";

export const ListContext = createContext<
  | {
      state: ListState;
      dispatch: React.Dispatch<ListAction>;
    }
  | undefined
>(undefined);

const useListContext = () => {
  const context = useContext(ListContext);
  if (!context) {
    throw new Error("useListContext must be used within a MODAL PROVIDER");
  }
  return context;
};

export default useListContext;
