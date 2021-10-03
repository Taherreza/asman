import React from 'react';
import './Product.css'

const Product = (props) => {
    const { name, img, price, stock } = props.product
    return (
        <div>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card">
                        <img src={img} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">{name}</h5>
                            <p class="card-text">{price}</p>
                            <p class="card-text">only available: {stock}</p>
                            <button onClick={() => props.handleAddProduct(props.product)} className="btn btn-primary">Add Cart</button>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default Product;