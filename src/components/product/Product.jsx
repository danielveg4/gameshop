import Tabs from '../tabs/Tabs';
import { useState } from 'react';

const Product = ({ product }) => {
    const [tabActive, setTabActive] = useState(0);

    return (
        <div>
            <img src={product.image} alt={product.name} />
            <Tabs
            gameTabs={product.platforms}
            tabActive={tabActive}
            setTabActive={setTabActive}
            />
            <p>{product.name}</p>
            <button>Add to cart</button>
            <p>{product.platforms[tabActive].price}euros</p>
        </div>
    );
}

export default Product;

