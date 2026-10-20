import { USERS, type User } from "./../data/data";
import { useState } from "react";

interface UsersTableProps {
  inputValue: string;
  selectValue: string;
}

export default function UsersTable({
  inputValue,
  selectValue,
}: UsersTableProps) {
  const [activePage, setActivePage] = useState(1);
  const filteredUsers = USERS.filter((user: User) => {
    const matchesSearch =
      inputValue === "" ||
      user.name.toLowerCase().includes(inputValue.toLowerCase());
    const matchesStatus = selectValue === "" || user.status === selectValue;

    return matchesSearch && matchesStatus;
  });

  const displayedUsers = filteredUsers.slice(
    (activePage - 1) * 10,
    (activePage - 1) * 10 + 10,
  );

  return (
    <div className="UsersTable">
      <ul>
        {displayedUsers.map((user: User) => (
          <li key={user.id}>
            {user.name} - {user.status}
          </li>
        ))}
      </ul>

      {filteredUsers.length > 10 && (
        <div className="pages">
          <button onClick={() => setActivePage(1)}>1</button>
          <button onClick={() => setActivePage(2)}>2</button>
        </div>
      )}
    </div>
  );
}
