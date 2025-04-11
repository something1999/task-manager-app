export type Task = {
  id: number;
  title: string;
  status: string;
  priority: string;
  description: string;
  points: number;
  roles: string[];
};

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  phone: string;
  address: string;
  isActive: boolean;
};

export type Role = {
  id: number;
  name: string;
};

export type Permission = {
  id: number;
  name: string;
};

export type Header = {
  label: string;
  key: keyof User | keyof Task | keyof Role | keyof Permission;
};

export interface ListState {
  data: User[] | Task[] | Role[] | Permission[];
  headers: Header[];
}

export type ListAction =
  | { type: "users" }
  | { type: "tasks" }
  | { type: "roles" }
  | { type: "permissions" };

export interface ModalState {
  isModalOpen: boolean;
}

export type ModalAction = { type: "OPEN" } | { type: "CLOSE" };
