import { Header, Permission, Role, Task, User } from "./types";

export const taskHeaders: Header[] = [
  { key: "id", label: "ID" },
  { key: "title", label: "Title" },
  { key: "status", label: "Status" },
  { key: "priority", label: "Priority" },
  { key: "points", label: "Points" },
];

export const tasks: Task[] = [
  {
    id: 1,
    title: "Implement Login",
    description: "Create login functionality with JWT",
    priority: "High",
    status: "In Progress",
    roles: ["Developer", "Tester"],
    points: 8,
  },
  {
    id: 2,
    title: "Set Up CI/CD",
    description: "Configure GitHub Actions for automatic deployment",
    priority: "Medium",
    status: "To Do",
    roles: ["DevOps", "Manager"],
    points: 5,
  },
  {
    id: 3,
    title: "Design Database Schema",
    description: "Define tables and relationships for core entities",
    priority: "High",
    status: "Done",
    roles: ["Developer", "Manager"],
    points: 13,
  },
  {
    id: 4,
    title: "Write Unit Tests",
    description: "Add tests for service layer and API endpoints",
    priority: "Medium",
    status: "To Do",
    roles: ["Tester"],
    points: 3,
  },
  {
    id: 5,
    title: "Create Task Dashboard UI",
    description: "Frontend implementation for task tracking",
    priority: "Low",
    status: "In Progress",
    roles: ["Developer", "Designer"],
    points: 5,
  },
  {
    id: 6,
    title: "Code Review",
    description: "Review pull requests and ensure code quality",
    priority: "High",
    status: "To Do",
    roles: ["Manager", "Developer"],
    points: 2,
  },
  {
    id: 7,
    title: "Add Search Functionality",
    description: "Enable searching tasks by title or description",
    priority: "Medium",
    status: "To Do",
    roles: ["Developer"],
    points: 5,
  },
  {
    id: 8,
    title: "Implement Role-Based Access Control",
    description: "Restrict access to certain features by user role",
    priority: "High",
    status: "In Progress",
    roles: ["Developer", "Manager"],
    points: 8,
  },
  {
    id: 9,
    title: "Set Up Logging",
    description: "Add centralized logging for debugging and monitoring",
    priority: "Low",
    status: "Done",
    roles: ["DevOps"],
    points: 3,
  },
  {
    id: 10,
    title: "Optimize Database Queries",
    description: "Improve query performance and indexing",
    priority: "High",
    status: "To Do",
    roles: ["Developer"],
    points: 8,
  },
  {
    id: 11,
    title: "Implement Forgot Password",
    description: "Allow users to reset their password via email",
    priority: "Medium",
    status: "In Progress",
    roles: ["Developer", "Tester"],
    points: 5,
  },
  {
    id: 12,
    title: "Conduct Usability Testing",
    description: "Get feedback from end-users on UI/UX",
    priority: "Low",
    status: "To Do",
    roles: ["Tester", "Designer"],
    points: 3,
  },
  {
    id: 13,
    title: "Migrate to PostgreSQL",
    description: "Switch from SQLite to PostgreSQL in production",
    priority: "High",
    status: "In Progress",
    roles: ["DevOps", "Developer"],
    points: 13,
  },
  {
    id: 14,
    title: "Refactor Auth Module",
    description: "Clean up and optimize authentication logic",
    priority: "Medium",
    status: "Done",
    roles: ["Developer"],
    points: 5,
  },
  {
    id: 15,
    title: "Deploy to Production",
    description: "Push the latest version to the live environment",
    priority: "High",
    status: "To Do",
    roles: ["DevOps", "Manager"],
    points: 3,
  },
  {
    id: 16,
    title: "Create Documentation",
    description: "Write API and onboarding docs",
    priority: "Low",
    status: "In Progress",
    roles: ["Developer", "Manager"],
    points: 5,
  },
  {
    id: 17,
    title: "Implement WebSockets for Real-Time Updates",
    description: "Enable live task status updates",
    priority: "Medium",
    status: "To Do",
    roles: ["Developer"],
    points: 8,
  },
  {
    id: 18,
    title: "Fix Task Duplication Bug",
    description: "Resolve issue where tasks are saved multiple times",
    priority: "High",
    status: "In Progress",
    roles: ["Developer", "Tester"],
    points: 5,
  },
  {
    id: 19,
    title: "Redesign Landing Page",
    description: "Improve UI/UX for first-time users",
    priority: "Medium",
    status: "To Do",
    roles: ["Designer"],
    points: 5,
  },
  {
    id: 20,
    title: "Track Login History",
    description: "Store user login timestamps for audit logging",
    priority: "Low",
    status: "Done",
    roles: ["Developer", "Manager"],
    points: 3,
  },
];

export const userHeaders: Header[] = [
  { key: "id", label: "ID" },
  { key: "firstName", label: "First Name" },
  { key: "lastName", label: "Last Name" },
  { key: "isActive", label: "Is Active" },
  { key: "role", label: "Role" },
];

export const users: User[] = [
  {
    id: 1,
    firstName: "Alice",
    lastName: "Johnson",
    email: "alice.johnson@example.com",
    role: "Developer",
    phone: "123-456-7890",
    address: "123 Maple St, San Francisco, CA",
    isActive: true,
  },
  {
    id: 2,
    firstName: "Bob",
    lastName: "Smith",
    email: "bob.smith@example.com",
    role: "Manager",
    phone: "234-567-8901",
    address: "456 Oak Ave, Seattle, WA",
    isActive: true,
  },
  {
    id: 3,
    firstName: "Carol",
    lastName: "Nguyen",
    email: "carol.nguyen@example.com",
    role: "Tester",
    phone: "345-678-9012",
    address: "789 Pine Rd, Austin, TX",
    isActive: false,
  },
  {
    id: 4,
    firstName: "David",
    lastName: "Lee",
    email: "david.lee@example.com",
    role: "DevOps",
    phone: "456-789-0123",
    address: "321 Birch Ln, Denver, CO",
    isActive: true,
  },
  {
    id: 5,
    firstName: "Eva",
    lastName: "Martinez",
    email: "eva.martinez@example.com",
    role: "Designer",
    phone: "567-890-1234",
    address: "654 Cedar Blvd, Miami, FL",
    isActive: true,
  },
  {
    id: 6,
    firstName: "Frank",
    lastName: "White",
    email: "frank.white@example.com",
    role: "Developer",
    phone: "678-901-2345",
    address: "987 Spruce St, Chicago, IL",
    isActive: false,
  },
  {
    id: 7,
    firstName: "Grace",
    lastName: "Kim",
    email: "grace.kim@example.com",
    role: "Manager",
    phone: "789-012-3456",
    address: "159 Elm Dr, Boston, MA",
    isActive: true,
  },
  {
    id: 8,
    firstName: "Henry",
    lastName: "Clark",
    email: "henry.clark@example.com",
    role: "Tester",
    phone: "890-123-4567",
    address: "753 Fir Ln, Portland, OR",
    isActive: true,
  },
  {
    id: 9,
    firstName: "Isabella",
    lastName: "Davis",
    email: "isabella.davis@example.com",
    role: "Designer",
    phone: "901-234-5678",
    address: "852 Walnut St, Atlanta, GA",
    isActive: true,
  },
  {
    id: 10,
    firstName: "Jack",
    lastName: "Miller",
    email: "jack.miller@example.com",
    role: "Developer",
    phone: "012-345-6789",
    address: "951 Redwood Rd, Los Angeles, CA",
    isActive: false,
  },
  {
    id: 11,
    firstName: "Katie",
    lastName: "Brown",
    email: "katie.brown@example.com",
    role: "Manager",
    phone: "102-938-4756",
    address: "147 Sequoia Ct, Nashville, TN",
    isActive: true,
  },
  {
    id: 12,
    firstName: "Liam",
    lastName: "Wilson",
    email: "liam.wilson@example.com",
    role: "Tester",
    phone: "213-849-5061",
    address: "258 Aspen Dr, Salt Lake City, UT",
    isActive: true,
  },
  {
    id: 13,
    firstName: "Mia",
    lastName: "Hall",
    email: "mia.hall@example.com",
    role: "DevOps",
    phone: "324-958-6172",
    address: "369 Cypress Blvd, Raleigh, NC",
    isActive: true,
  },
  {
    id: 14,
    firstName: "Nathan",
    lastName: "Baker",
    email: "nathan.baker@example.com",
    role: "Developer",
    phone: "435-069-7283",
    address: "471 Palm St, Las Vegas, NV",
    isActive: true,
  },
  {
    id: 15,
    firstName: "Olivia",
    lastName: "Adams",
    email: "olivia.adams@example.com",
    role: "Designer",
    phone: "546-170-8394",
    address: "582 Magnolia Ave, Orlando, FL",
    isActive: false,
  },
  {
    id: 16,
    firstName: "Paul",
    lastName: "Wright",
    email: "paul.wright@example.com",
    role: "Manager",
    phone: "657-281-9405",
    address: "693 Hickory Ln, Kansas City, MO",
    isActive: true,
  },
  {
    id: 17,
    firstName: "Quinn",
    lastName: "Green",
    email: "quinn.green@example.com",
    role: "Developer",
    phone: "768-392-0516",
    address: "804 Olive St, New York, NY",
    isActive: true,
  },
  {
    id: 18,
    firstName: "Rachel",
    lastName: "Young",
    email: "rachel.young@example.com",
    role: "Tester",
    phone: "879-403-1627",
    address: "915 Dogwood Dr, Phoenix, AZ",
    isActive: false,
  },
  {
    id: 19,
    firstName: "Sam",
    lastName: "King",
    email: "sam.king@example.com",
    role: "DevOps",
    phone: "980-514-2738",
    address: "126 Larch Ln, Columbus, OH",
    isActive: true,
  },
  {
    id: 20,
    firstName: "Tina",
    lastName: "Scott",
    email: "tina.scott@example.com",
    role: "Designer",
    phone: "091-625-3849",
    address: "237 Beechwood Ave, Minneapolis, MN",
    isActive: true,
  },
];

export const roleHeaders: Header[] = [
  { key: "id", label: "ID" },
  { key: "name", label: "Name" },
];

export const permissionHeaders: Header[] = [
  { key: "id", label: "ID" },
  { key: "name", label: "Name" },
];

export const roles: Role[] = [
  { id: 1, name: "Admin" },
  { id: 2, name: "Manager" },
  { id: 3, name: "Employee" },
  { id: 4, name: "HR" },
  { id: 5, name: "Finance" },
  { id: 6, name: "IT Support" },
  { id: 7, name: "Team Lead" },
  { id: 8, name: "QA Tester" },
  { id: 9, name: "Developer" },
  { id: 10, name: "Intern" },
  { id: 11, name: "Product Manager" },
  { id: 12, name: "Designer" },
  { id: 13, name: "Scrum Master" },
  { id: 14, name: "Data Analyst" },
  { id: 15, name: "Business Analyst" },
  { id: 16, name: "Sales Executive" },
  { id: 17, name: "Marketing Manager" },
  { id: 18, name: "DevOps Engineer" },
  { id: 19, name: "Security Analyst" },
  { id: 20, name: "Content Writer" },
];

export const permissions: Permission[] = [
  { id: 1, name: "READ_USER" },
  { id: 2, name: "WRITE_USER" },
  { id: 3, name: "DELETE_USER" },
  { id: 4, name: "READ_TASK" },
  { id: 5, name: "WRITE_TASK" },
  { id: 6, name: "DELETE_TASK" },
  { id: 7, name: "READ_ROLE" },
  { id: 8, name: "WRITE_ROLE" },
  { id: 9, name: "DELETE_ROLE" },
  { id: 10, name: "READ_PERMISSION" },
  { id: 11, name: "WRITE_PERMISSION" },
  { id: 12, name: "DELETE_PERMISSION" },
  { id: 13, name: "VIEW_DASHBOARD" },
  { id: 14, name: "EXPORT_REPORTS" },
  { id: 15, name: "APPROVE_TASK" },
  { id: 16, name: "ASSIGN_TASK" },
  { id: 17, name: "COMMENT_TASK" },
  { id: 18, name: "CHANGE_STATUS" },
  { id: 19, name: "VIEW_ANALYTICS" },
  { id: 20, name: "MANAGE_SETTINGS" },
];
