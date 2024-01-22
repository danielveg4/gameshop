
const Filters = (products, filterPlatform, sortBy) => {
  let filteredProducts = [...products]; // Hacemos una copia para no modificar el array original

  if (filterPlatform.length > 0) {
    filteredProducts = filteredProducts.filter(product =>
      product.platforms.some(platform => filterPlatform.includes(platform.name))
    );
  }

  if (sortBy === 'name') {
    filteredProducts = filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === 'releaseDate') {
    filteredProducts = filteredProducts.sort((a, b) => a.releaseDate - b.releaseDate);
  }

  return filteredProducts;
};

export default Filters;