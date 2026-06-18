import { atom, useAtom } from 'jotai';

const cartAtom = atom([
    {
        "id": 1,
        "product_id": 1,
        "quantity": 10,
        "name": "Organic Green Tea",
        "price": 12.99,
        "imageUrl": "https://picsum.photos/id/255/300/200",
        "description": "Premium organic green tea"
    }
])

// useCart hook
export const useCart = () => {
    const [cart, setCart] = useAtom(cartAtom);

    const getCartTotal = () => {
        // let total = 0;
        // for (let item of cart) {
        //     total += item.price * item.quantity
        // }
        // return total;

        const total = cart.reduce((acc, currentValue) => {
            return acc + currentValue.price * currentValue.quantity
        }, 0);

        return total;
    }

    const addToCart = (product) => {

        const productIndex = cart.findIndex(cartItem => cartItem.product_id === product.id);
        if (productIndex === -1) {
            // const newCartItem = {
            //     id: Math.floor(Math.random() * 10000) + 1,
            //     product_id: product.id,
            //     name: product.name,
            //     price: product.price,
            //     imageUrl: product.imageUrl,
            //     description: product.description,
            //     quantity: 1
            // }

            const newCartItem = {
                ...product,
                id: Math.floor(Math.random() * 10000) + 1,
                product_id: product.id,
                quantity: 1
            }

            const modifiedCart = [...cart, newCartItem];
            setCart(modifiedCart);
        } else {
            // get the existing cart item and update its quantity by 1
            const existingCartItem = cart[productIndex];
            const modifiedCartItem = {...existingCartItem, quantity: existingCartItem.quantity + 1};

            const modifiedCart = cart.with(productIndex, modifiedCartItem);
            setCart(modifiedCart);

        }


    }

    const modifyQuantity = (cartItem, newQuantity) => {
        const cartItemIndex = cart.findIndex( item => item.id === cartItem.id);
        if (cartItemIndex !== -1) {
            const modified = {...cartItem, quantity: newQuantity};
            const modifiedCart = cart.with(cartItemIndex, modified);
            setCart(modifiedCart);
        }
    }

    const removeFromCart = (cartItem) => {
        const cartItemIndex = cart.findIndex( i => i.id === cartItem.id);
        const modifiedCart = cart.toSpliced(cartItemIndex, 1);
        setCart(modifiedCart);
    }

    return {
        cart, getCartTotal, addToCart, modifyQuantity, removeFromCart
    }
}