import { FaClock, FaUser, FaUsers } from "react-icons/fa6";
import { MdBlock } from "react-icons/md";
import UserBoard from "../components/UserBoard";

const USER_BOARDS = [
  {
    id: 1,
    icon: FaUser,
    iconColor: "var(--blue)",
    iconBgColor: "var(--light-blue)",
    text: "Total Users",
    number: 20,
  },
  {
    id: 2,
    icon: FaUsers,
    iconColor: "var(--green)",
    iconBgColor: "var(--light-green)",
    text: "Active Users",
    number: 11,
  },
  {
    id: 3,
    icon: FaClock,
    iconColor: "var(--orange)",
    iconBgColor: "var(--light-orange)",
    text: "Pending Users",
    number: 4,
  },
  {
    id: 4,
    icon: MdBlock,
    iconColor: "var(--red)",
    iconBgColor: "var(--light-red)",
    text: "Suspended Users",
    number: 5,
  },
];

export default function UsersPage() {
  return (
    <div className="users-page page">
      <h1>User Management</h1>
      <p>View and manage user accounts accross the platform</p>

      <ul className="user-board-list">
        {USER_BOARDS.map((ub) => (
          <li key={ub.id}>
            <UserBoard
              icon={ub.icon}
              iconColor={ub.iconColor}
              iconBgColor={ub.iconBgColor}
              text={ub.text}
              number={ub.number}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
