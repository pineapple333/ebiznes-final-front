import React, { useContext } from 'react';
import { PlusCircleIcon, MinusCircleIcon, TrashIcon } from '../../Assets'
import { CartContext } from '../../contexts/CartContext';
import whiskyPhoto from '../../Assets/book.jpg';
import { formatNumber } from '../../helpers/utils';

const CartItem = ({product}) => {

    const { increase, decrease, removeProduct } = useContext(CartContext);

    return (
            <tr>
                <td>
                    <img
                        alt={product.name}
                        style={{margin: "0 auto", maxHeight: "50px"}} 
                        src={whiskyPhoto} className="img-fluid d-block"/>
                </td>
                <td><h5 className="mb-1">{product.name}</h5></td>
                <td><p className="mb-0">Qty: {product.quantity}</p></td>
                <td><p className="mb-1">{formatNumber(product.unitPrice)} </p></td>
                <td>
                    <button onClick={() => increase(product)}
                        className="btn btn-primary btn-sm mr-2 mb-1">
                            <PlusCircleIcon width={"20px"}/>
                    </button>

                    {
                        product.quantity > 1 &&
                        <button onClick={() => decrease(product)}
                            className="btn btn-danger btn-sm mb-1">
                            <MinusCircleIcon width={"20px"}/>
                        </button>
                    }

                    {
                        product.quantity === 1 &&
                        <button onClick={() => removeProduct(product)}
                            className="btn btn-danger btn-sm mb-1">
                            <TrashIcon width={"20px"}/>
                        </button>
                    }
                </td>
            </tr>
     );
}
 
export default CartItem;