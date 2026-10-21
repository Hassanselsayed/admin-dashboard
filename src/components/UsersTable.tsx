import { USERS, type User } from "./../data/data";
import { useState } from "react";

interface UsersTableProps {
  inputValue: string;
  selectValue: string;
  sortValue: string;
}

export default function UsersTable({
  inputValue,
  selectValue,
  sortValue,
}: UsersTableProps) {
  const [activePage, setActivePage] = useState(1);
  const filteredUsers = USERS.filter((user: User) => {
    const matchesSearch =
      inputValue === "" ||
      user.name.toLowerCase().includes(inputValue.toLowerCase().trim());
    const matchesStatus = selectValue === "" || user.status === selectValue;

    return matchesSearch && matchesStatus;
  }) as User[];

  const sortedUsers =
    sortValue === ""
      ? [...filteredUsers]
      : [...filteredUsers].sort((a, b) => {
          const x = a[sortValue as keyof User];
          const y = b[sortValue as keyof User];

          if (sortValue === "created") {
            return (
              new Date(x as string).getTime() - new Date(y as string).getTime()
            );
          }

          return String(x).localeCompare(String(y));
        });

  const displayedUsers = sortedUsers.slice(
    (activePage - 1) * 10,
    (activePage - 1) * 10 + 10,
  ) as User[];

  return (
    <div className="UsersTable">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Created</th>
            <th>Last Active</th>
          </tr>
        </thead>
        <tbody>
          {displayedUsers.map((user: User) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{user.status}</td>
              <td>{user.created}</td>
              <td>{user.lastActive}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {filteredUsers.length > 10 && (
        <div className="pages">
          <button onClick={() => setActivePage(1)}>1</button>
          <button onClick={() => setActivePage(2)}>2</button>
        </div>
      )}
    </div>
  );
}
