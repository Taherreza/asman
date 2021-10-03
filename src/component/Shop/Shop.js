import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])

    const [cart, setCart] = useState([])

    const handleAddProduct = (product) => {
        const neswProduct = [...cart, product]
        setCart(neswProduct)

    }

    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])
    return (
        <div className="container">
            <div className="row hi">
                <div className="col-md-9 jai">

                    {
                        products.map(product => <Product
                            product={product}
                            handleAddProduct={handleAddProduct}


                        >

                        </Product>)
                    }


                </div>
                <div className="col-md-3">
                    <Cart></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;