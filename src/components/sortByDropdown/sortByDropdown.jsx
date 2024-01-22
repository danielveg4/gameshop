
const SortByDropdown = ({ sortBy, setSortBy }) => {
  const handleSortChange = e => {
    setSortBy(e.target.value);
  };

  return (
    <div>
      <h2>Sort By</h2>
      <select value={sortBy} onChange={handleSortChange}>
        <option value="">Default</option>
        <option value="name">Name</option>
        <option value="releaseDate">Release Date</option>
      </select>
    </div>
  );
};

export default SortByDropdown;