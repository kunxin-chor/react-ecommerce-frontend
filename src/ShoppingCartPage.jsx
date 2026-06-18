import { useCart } from "./CartStore"

export default function ShoppingCartPage() {

    const { cart, getCartTotal, modifyQuantity, removeFromCart } = useCart();

    return <div className="container">
        <h1>Shopping Cart</h1>
        <ul className="list-group">
            {
                cart.map(cartItem => (
                    <li key={cartItem.id} className="list-group-item d-flex justify-content-between align-items-center">
                        <div>
                            <h5>{cartItem.name}</h5>
                            <div>
                                <button
                                    onClick={() => {
                                        modifyQuantity(cartItem, cartItem.quantity - 1);
                                    }}
                                    disabled={cartItem.quantity === 1}
                                    className="btn btn-primary btn-sm ms-1 me-1">-</button>

                                Quantity: {cartItem.quantity}

                                <button
                                    onClick={() => {
                                        modifyQuantity(cartItem, cartItem.quantity + 1);
                                    }}
                                    className="btn btn-primary btn-sm ms-1 me-1">+</button>
                            </div>
                            <button
                                onClick={() => {
                                    removeFromCart(cartItem);
                                }}
                                className="btn btn-danger mt-2">Remove</button>
                        </div>
                        <img src={cartItem.imageUrl} />
                        <div>
                            ${(cartItem.price * cartItem.quantity).toFixed(2)}
                        </div>
                    </li>
                ))
            }
        </ul>
        <div className="mt-3 mb-3 text-end">
            <h4>Total: ${getCartTotal().toFixed(2)}</h4>
        </div>
    </div>
}