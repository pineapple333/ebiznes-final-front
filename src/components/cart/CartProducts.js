import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { Link } from 'react-router-dom';

import CartItem from './CartItem';

const CartProducts = () => {

    const { cartItems, clearCart } = useContext(CartContext);

    return (
        <div class="container mb-4">
            <div class="row">
                <div class="col-12">
                    <div class="table-responsive">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Product</th>
                                    <th scope="col">Name</th>
                                    <th scope="col" class="text-center">Quantity</th>
                                    <th scope="col" class="text-right">UnitPrice</th>
                                    <th scope="col" class="text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cartItems.map(product =>  <CartItem key={product.id} product={product}/>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="col mb-2">
                    <div class="row">
                        <div class="col-sm-12  col-md-12">
                            {/* <button class="btn btn-block btn-light">Continue Shopping</button> */}
                            <Link to="/">
                                <button type="button" className="btn btn-block btn-light">
                                    CONTINUE SHOPPING
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default CartProducts;