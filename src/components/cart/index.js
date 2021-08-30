import React, { useContext } from 'react';
import Layout from '../layout/Layout';

import CartProducts from './CartProducts';
import { CartContext } from '../../contexts/CartContext';
import { formatNumber } from '../../helpers/utils';
import { Link } from 'react-router-dom';

const Cart = () => {

    const { total, cartItems, itemCount, clearCart, checkout, handleCheckout } = useContext(CartContext);
    
    return ( 
        <Layout title="Cart" description="This is the Cart page" >
            <div >
                <div className="text-center mt-5">
                    <h1>Cart</h1>
                </div>

                <div className="row justify-content-center">
                    <div className="col-sm-9 p-3">
                        {
                            cartItems.length > 0 ?
                            <CartProducts/> :
                            <div className="p-3 text-center text-muted">
                                Your cart is empty
                            </div>
                        }

                        { checkout && 
                            <div className="p-3 text-center text-success">
                                <p>Checkout successfull</p>
                                <Link to="/">
                                    <button type="button" className="btn btn-outline-success btn-sm " onClick={clearCart} >
                                        BUY MORE
                                    </button>
                                </Link>
                            </div>
                        }
                    </div>
                    {/* {
                        cartItems.length > 0 && 
                        <div className="col-sm-3 p-3">
                            <div className="card card-body">
                                <p className="mb-1">Total Items</p>
                                <h4 className=" mb-3 txt-right">{itemCount}</h4>
                                <p className="mb-1">Total Payment</p>
                                <h3 className="m-0 txt-right">{formatNumber(total)}</h3>
                                <hr className="my-4"/>
                                <div className="text-center">
                                    <button type="button" className="btn btn-primary mb-2" onClick={handleCheckout}>CHECKOUT</button>
                                    <button type="button" className="btn btn-outlineprimary btn-sm" onClick={clearCart}>CLEAR</button>
                                </div>

                            </div>
                        </div>
                    } */}
                    {
                        cartItems.length > 0 && 
                        <div class="align-self-end card mb-3">
                          <div class="card-body">
                  
                            <h5 class="mb-3">The total amount of</h5>
                  
                            <ul class="list-group list-group-flush">
                              <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                Temporary amount
                                <span>{formatNumber(total)}</span>
                              </li>
                              <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                                Shipping
                                <span>Gratis</span>
                                </li>
                              <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                <div>
                                  <strong>The total amount of</strong>
                                  <strong>
                                    <p class="mb-0">(including VAT)</p>
                                  </strong>
                                </div>
                                <span><strong>{formatNumber(total)}</strong></span>
                              </li>
                            </ul>
                            <div className="text-center">
                                <button type="button" class="btn btn-primary btn-block waves-effect waves-light" onClick={handleCheckout}>CHECKOUT</button>
                                <button type="button" className="btn btn-outlineprimary btn-sm" onClick={clearCart}>CLEAR</button>
                            </div>
                          </div>
                        </div>
                    }
                    
                </div>
            </div>
        </Layout>
     );
}
 
export default Cart;