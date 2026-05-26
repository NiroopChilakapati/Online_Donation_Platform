import '../App.css';

function SearchBar({
  searchTerm,
  setSearchTerm,
  category,
  setCategory
}) {
  return (
    <div className="search-filter-container">
      <input
        type="text"
        placeholder="Search causes..."
        value={searchTerm}
        onChange={(e) =>
          setSearchTerm(e.target.value)
        }
        className="search-input"
      />

      <select
        value={category}
        onChange={(e) =>
          setCategory(e.target.value)
        }
        className="category-select"
      >
        <option value="All">
          All Categories
        </option>

        <option value="Child Welfare">
          Child Welfare
        </option>

        <option value="Old Age Homes">
          Old Age Homes
        </option>

        <option value="Education">
          Education
        </option>

        <option value="Environment">
          Environment
        </option>
      </select>
    </div>
  );
}

export default SearchBar;