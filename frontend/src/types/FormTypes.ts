export interface FormField {
  id: string; // Unique identifier for each field
  label: string; // Label for the field
  type: string; // Type of the input (text, number, date, etc.)
  value: string; // Default value of the input
  options?: string[]; // For select or dropdown fields
  required: boolean;
}

export const taskFormFields: FormField[] = [
  { id: "title", label: "Title", type: "text", value: "", required: true },
  {
    id: "priority",
    label: "Priority",
    type: "select",
    value: "",
    options: ["High", "Medium", "Low"],
    required: true,
  },
  {
    id: "status",
    label: "Status",
    type: "select",
    value: "",
    options: ["Open", "Closed"],
    required: true,
  },
  { id: "points", label: "Points", type: "text", value: "", required: false },
  {
    id: "description",
    label: "Description",
    type: "textarea",
    value: "",
    required: false,
  },
];

export const userFormFields: FormField[] = [
  {
    id: "firstName",
    label: "First Name",
    type: "text",
    value: "",
    required: true,
  },
  {
    id: "lastName",
    label: "Last Name",
    type: "text",
    value: "",
    required: true,
  },
  { id: "email", label: "Email", type: "text", value: "", required: true },
  {
    id: "role",
    label: "Role",
    type: "select",
    value: "",
    options: ["Admin", "User", "Guest"], // You can add more roles here
    required: true,
  },
  { id: "phone", label: "Phone", type: "text", value: "", required: false },
  {
    id: "address",
    label: "Address",
    type: "textarea",
    value: "",
    required: false,
  },
  {
    id: "isActive",
    label: "Active",
    type: "select",
    value: "true",
    options: ["true", "false"],
    required: false,
  },
];
