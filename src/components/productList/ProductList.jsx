const ProductList = ({ products }) => {
    return (
      <div>
        <h2>Product List</h2>
        {products.map(product => (
          <div key={product.id}>
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <p>Release Date: {product.releaseDate}</p>
            <p>Platforms: {product.platforms.map(platform => platform.name).join(', ')}</p>
            <p>Prices: {product.platforms.map(platform => `$${platform.price}`).join(', ')}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default ProductList;