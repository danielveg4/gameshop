import { StyledList } from './styles';
import Tabs from '../tabs/Tabs';
import { useState } from 'react';

const ProductList = ({ products }) => {
    const [tabActive, setTabActive] = useState(0);
    return (
      <StyledList>
        {products.map(product => (
          <div key={product.id}>
            <img src={product.image} alt={product.name} />
            <Tabs
              gameTabs={product.platforms}
              tabActive={tabActive}
              setTabActive={setTabActive}
            />
            <p>{product.name}</p>
            <button>Add to cart</button>
            <p>{product.platform}</p>
            <span>{product.platforms[tabActive].price}euros</span>
          </div>
        ))}
      </StyledList>
    );
  };
  
  export default ProductList;