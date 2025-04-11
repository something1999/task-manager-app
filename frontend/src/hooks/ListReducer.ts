import {
  permissionHeaders,
  permissions,
  roleHeaders,
  roles,
  taskHeaders,
  tasks,
  userHeaders,
  users,
} from "../Datacom";
import { ListAction, ListState } from "../types";

const ListReducer = (state: ListState, action: ListAction) => {
  switch (action.type) {
    case "users":
      return { ...state, data: users, headers: userHeaders };
    //   break;
    case "tasks":
      return { ...state, data: tasks, headers: taskHeaders };
    // break;
    case "roles":
      return { ...state, data: roles, headers: roleHeaders };
    // break;
    case "permissions":
      return { ...state, data: permissions, headers: permissionHeaders };
    // break;
    default:
      return state;
  }
};

export default ListReducer;
