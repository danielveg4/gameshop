import { PRODUCTS } from "../../constants/products";

const FilterPlatform = ({ filterPlatform, setFilterPlatform }) => {
  const allPlatforms = [];

  for (const product of PRODUCTS) {
    for (const platform of product.platforms) {
      const platformName = platform.name;
      if (!allPlatforms.includes(platformName)) {
        allPlatforms.push(platformName);
      }
    }
  }

  const platforms = allPlatforms;

  const togglePlatformFilter = platform => {
    if (filterPlatform.includes(platform)) {
      setFilterPlatform(filterPlatform.filter(p => p !== platform));
    } else {
      setFilterPlatform([...filterPlatform, platform]);
    }
  };

  return (
    <div>
      <h2>Platform</h2>
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