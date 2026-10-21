interface FiltersProps {
  inputValue: string;
  setInputValue: Function;
  selectValue: string;
  setSelectValue: Function;
  sortValue: string;
  setSortValue: Function;
}

export default function Filters({
  inputValue,
  setInputValue,
  selectValue,
  setSelectValue,
  sortValue,
  setSortValue,
}: FiltersProps) {
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  function handleSelectChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setSelectValue(e.target.value);
  }

  function handleSortChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setSortValue(e.target.value);
  }

  return (
    <div className="filters">
      <input type="search" value={inputValue} onChange={handleInputChange} />
      <select value={selectValue} onChange={handleSelectChange}>
        <option value="">All Statuses</option>
        <option value="Active">Active</option>
        <option value="Pending">Pending</option>
        <option value="Suspended">Suspended</option>
      </select>
      <select value={sortValue} onChange={handleSortChange}>
        <option value="">Choose Sort</option>
        <option value="name">Name</option>
        <option value="email">Email</option>
        <option value="created">Created Date</option>
      </select>
    </div>
  );
}
