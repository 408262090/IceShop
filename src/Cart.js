const Cart = ({cart,total}) => {
    return (
        <div className="cart-list">
        <aside>
            <h2>購物車</h2> 
            <div className="item-list"></div>
                {cart && cart.length >0 &&cart.map(item =>(
                    <div className='cart-item' key={item.id}>
                        <h3>{item.name}</h3>
                        <h3>{item.price}</h3>
                    </div>
                ))}
            <div/>
            <p id="total">總價:{ total }元</p> 
        </aside>
        </div> 
     );
}
 
export default Cart;