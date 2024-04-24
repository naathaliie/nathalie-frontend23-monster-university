import "./SearchField.scss";

const SearchField = () => {
  return (
    <label htmlFor="search-field">
      {" "}
      Sök på ett monster
      <input className="search-field" type="text" />
    </label>
  );
};

export default SearchField;
