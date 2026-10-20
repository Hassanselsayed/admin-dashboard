import type { IconType } from "react-icons";
import { FaClock, FaUser, FaUsers } from "react-icons/fa6";
import { MdBlock } from "react-icons/md";

export interface UserBoard {
  id: number;
  icon: IconType,
  iconColor: string;
  iconBgColor: string;
  text: string;
  number: number
}

export interface User {
  id: string;
name: string;
email: string;
role: string;
status: string;
created: string;
lastActive: string;
}

export const USER_BOARDS = [
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
] as UserBoard[]

export const USERS = [
  {
    id: "1",
    name: "Olivia Chen",
    email: "olivia.chen@example.com",
    role: "Admin",
    status: "Active",
    created: "Jan 12, 2025",
    lastActive: "Sep 28, 2026"
  },
  {
    id: "2",
    name: "Liam Patel",
    email: "liam.patel@example.com",
    role: "Manager",
    status: "Active",
    created: "Feb 03, 2025",
    lastActive: "Sep 27, 2026"
  },
  {
    id: "3",
    name: "Emma Wilson",
    email: "emma.wilson@example.com",
    role: "Member",
    status: "Active",
    created: "Feb 18, 2025",
    lastActive: "Sep 29, 2026"
  },
  {
    id: "4",
    name: "Noah Kim",
    email: "noah.kim@example.com",
    role: "Member",
    status: "Pending",
    created: "Mar 01, 2025",
    lastActive: "-"
  },
  {
    id: "5",
    name: "Ava Thompson",
    email: "ava.thompson@example.com",
    role: "Manager",
    status: "Active",
    created: "Mar 14, 2025",
    lastActive: "Sep 26, 2026"
  },
  {
    id: "6",
    name: "Ethan Garcia",
    email: "ethan.garcia@example.com",
    role: "Member",
    status: "Suspended",
    created: "Mar 22, 2025",
    lastActive: "Jul 11, 2026"
  },
  {
    id: "7",
    name: "Sophia Martin",
    email: "sophia.martin@example.com",
    role: "Member",
    status: "Active",
    created: "Apr 05, 2025",
    lastActive: "Sep 25, 2026"
  },
  {
    id: "8",
    name: "Mason Lee",
    email: "mason.lee@example.com",
    role: "Admin",
    status: "Active",
    created: "Apr 19, 2025",
    lastActive: "Sep 29, 2026"
  },
  {
    id: "9",
    name: "Isabella Clark",
    email: "isabella.clark@example.com",
    role: "Member",
    status: "Pending",
    created: "May 02, 2025",
    lastActive: "-"
  },
  {
    id: "10",
    name: "James Lewis",
    email: "james.lewis@example.com",
    role: "Manager",
    status: "Suspended",
    created: "May 17, 2025",
    lastActive: "Jun 20, 2026"
  },
  {
    id: "11",
    name: "Chloe Walker",
    email: "chloe.walker@example.com",
    role: "Member",
    status: "Active",
    created: "Jun 01, 2025",
    lastActive: "Sep 28, 2026"
  },
  {
    id: "12",
    name: "Lucas Wright",
    email: "lucas.wright@example.com",
    role: "Admin",
    status: "Pending",
    created: "Jun 15, 2025",
    lastActive: "-"
  },
  {
    id: "13",
    name: "Harper Scott",
    email: "harper.scott@example.com",
    role: "Manager",
    status: "Active",
    created: "Jul 02, 2025",
    lastActive: "Sep 25, 2026"
  },
  {
    id: "14",
    name: "Benjamin Green",
    email: "benjamin.green@example.com",
    role: "Member",
    status: "Suspended",
    created: "Jul 20, 2025",
    lastActive: "Aug 14, 2026"
  },
  {
    id: "15",
    name: "Mia Baker",
    email: "mia.baker@example.com",
    role: "Member",
    status: "Active",
    created: "Aug 05, 2025",
    lastActive: "Sep 29, 2026"
  },
  {
    id: "16",
    name: "Alexander Perez",
    email: "alexander.perez@example.com",
    role: "Manager",
    status: "Active",
    created: "Aug 19, 2025",
    lastActive: "Sep 22, 2026"
  },
  {
    id: "17",
    name: "Charlotte Ramirez",
    email: "charlotte.ramirez@example.com",
    role: "Admin",
    status: "Active",
    created: "Sep 03, 2025",
    lastActive: "Sep 29, 2026"
  },
  {
    id: "18",
    name: "Henry Campbell",
    email: "henry.campbell@example.com",
    role: "Member",
    status: "Pending",
    created: "Sep 18, 2025",
    lastActive: "-"
  },
  {
    id: "19",
    name: "Amelia Mitchell",
    email: "amelia.mitchell@example.com",
    role: "Manager",
    status: "Suspended",
    created: "Oct 01, 2025",
    lastActive: "May 10, 2026"
  },
  {
    id: "20",
    name: "Evelyn Carter",
    email: "evelyn.carter@example.com",
    role: "Member",
    status: "Active",
    created: "Oct 15, 2025",
    lastActive: "Sep 27, 2026"
  }
] as User[]