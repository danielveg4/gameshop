import { StyledList } from './styles';
import Product from '../product/Product';

const ProductList = ({ products }) => {
    return (
      <StyledList>
        {products.map(product => {
            return (
                <Product product={product} key={product.id} />
            );
        }
        )}
      </StyledList>
    );
  };
  
  export default ProductList;