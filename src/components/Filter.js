function Filter(props) {
    const { onCategoryChange } = props;
  
    const handleCategoryChange = (event) => {
      onCategoryChange(event.target.value);
    };
  
    return (
      <div>
        <label htmlFor="category-filter">Filter by category: </label>
        <select name="category-filter" onChange={handleCategoryChange}>
          <option value="">All</option>
          <option value="Dairy">Dairy</option>
          <option value="Meat">Meat</option>
          <option value="Produce">Produce</option>
          <option value="Bakery">Bakery</option>
        </select>
      </div>
    );
  }
  
  export default Filter;