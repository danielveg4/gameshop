import { useState } from 'react';
import ProductList from '../productList/ProductList';
import { PRODUCTS } from '../../constants/products';
import Filters from '../filters/Filters';
import FilterPlatform from '../filterPlatform/FilterPlatform';
import SortByDropdown from '../sortByDropdown/sortByDropdown';
import { StyledMain } from './styles';
import Shop from '../shop/Shop';


const MainPrincipal = () => {
    const [filterPlatform, setFilterPlatform] = useState([]);
    const [sortBy, setSortBy] = useState('');
  
    return (
      <StyledMain>
        <div>
          <FilterPlatform
            filterPlatform={filterPlatform}
            setFilterPlatform={setFilterPlatform}
          />
          <SortByDropdown sortBy={sortBy} setSortBy={setSortBy} />
        </div>
        <ProductList products={Filters(PRODUCTS, filterPlatform, sortBy)} />
        <Shop />
      </StyledMain>
    );
  };
  
  export default MainPrincipal;