import { PRODUCTS } from "../../constants/products";

const FilterPlatform = ({ filterPlatform, setFilterPlatform }) => {
  const platforms = Array.from(new Set(PRODUCTS.flatMap(product => product.platforms.map(p => p.name))));

  const togglePlatformFilter = platform => {
    if (filterPlatform.includes(platform)) {
      setFilterPlatform(filterPlatform.filter(p => p !== platform));
    } else {
      setFilterPlatform([...filterPlatform, platform]);
    }
  };

  return (
    <div>
      <h2>Platform Filter</h2>
      {platforms.map(platform => (
        <label key={platform}>
          <input
            type="checkbox"
            checked={filterPlatform.includes(platform)}
            onChange={() => togglePlatformFilter(platform)}
          />
          {platform}
        </label>
      ))}
    </div>
  );
};

export default FilterPlatform;