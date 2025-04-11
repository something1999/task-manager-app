import { ModalAction, ModalState } from "../types";

const DetailModalReducer = (state: ModalState, action: ModalAction) => {
  switch (action.type) {
    case "OPEN":
      return {
        ...state,
        isModalOpen: true,
      };
    case "CLOSE":
      return {
        ...state,
        isModalOpen: false,
      };
    default:
      return state;
  }
};

export default DetailModalReducer;
