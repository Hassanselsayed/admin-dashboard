import { useState } from "react";
import { USER_BOARDS } from "../data/data";

import UserBoard from "../components/UserBoard";
import Filters from "../components/Filters";
import UsersTable from "../components/UsersTable";

export default function UsersPage() {
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [sortValue, setSortValue] = useState("");

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

      <div className="user-table-wrap">
        <Filters
          inputValue={inputValue}
          setInputValue={setInputValue}
          selectValue={selectValue}
          setSelectValue={setSelectValue}
          sortValue={sortValue}
          setSortValue={setSortValue}
        />
        <UsersTable
          inputValue={inputValue}
          selectValue={selectValue}
          sortValue={sortValue}
        />
      </div>
    </div>
  );
}
