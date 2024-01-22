import { StyledList } from './styles';

const ProductList = ({ products }) => {
    return (
      <StyledList>
        {products.map(product => (
          <div key={product.id}>
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <button>Add to cart</button>
            <p>{product.platform}</p>
          </div>
        ))}
      </StyledList>
    );
  };
  
  export default ProductList;