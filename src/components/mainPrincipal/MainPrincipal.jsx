import { useState } from 'react';
import ProductList from '../productList/ProductList';
import { PRODUCTS } from '../../constants/products';
import Filters from '../filters/Filters';
import FilterPlatform from '../filterPlatform/FilterPlatform';
import SortByDropdown from '../sortByDropdown/sortByDropdown';


const MainPrincipal = () => {
    const [filterPlatform, setFilterPlatform] = useState([]);
    const [sortBy, setSortBy] = useState('');
  
    return (
      <div>
        <FilterPlatform
          filterPlatform={filterPlatform}
          setFilterPlatform={setFilterPlatform}
        />
        <SortByDropdown sortBy={sortBy} setSortBy={setSortBy} />
        <ProductList products={Filters(PRODUCTS, filterPlatform, sortBy)} />
      </div>
    );
  };
  
  export default MainPrincipal;