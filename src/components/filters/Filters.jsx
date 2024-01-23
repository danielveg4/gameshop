const Filters = (products, filterPlatform, sortBy) => {
  let filteredProducts = [...products];

  if (filterPlatform) {
    filteredProducts = filteredProducts.filter(product =>
      product.platforms.some(platform => filterPlatform.includes(platform.name))
    );
  }

  if (sortBy === 'name') {
    filteredProducts = filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === 'releaseDate') {
    filteredProducts = filteredProducts.sort((a, b) => b.releaseDate - a.releaseDate);
  }

  return filteredProducts;
};

export default Filters;