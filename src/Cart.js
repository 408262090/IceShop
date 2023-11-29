import { useState, useEffect} from "react";
import useFetch from './useFetch';
import { Link } from "react-router-dom"

const Cart = () => {
    
    const{data:cart , error } = useFetch('http://localhost:8001/cart-items')
    const [cartItems, setCartItems] = useState([]);
    const [total,setTotal] = useState(0)
    const idToDelete = 1; 
    

    const handleDelete = (idToDelete)=>{
        fetch(`http://localhost:8001/cart-items/${idToDelete}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json'
            }
          })
          const updatedCart = cartItems.filter(item => item.id !== idToDelete);
          setCartItems(updatedCart);
    }

    useEffect(() => {
        if (cart) {
          setCartItems(cart); 
        }
      }, [cart]);

      useEffect(()=>{
        const calculateTotalPrice = () => {
        let totalPrice = 0;
        if (cartItems && cartItems.length > 0) {
            cartItems.forEach(item => {
                totalPrice += item.price;
            });
        }
        return totalPrice;
        };
        const totalCartPrice = calculateTotalPrice(); 
        setTotal(totalCartPrice); 
    },[cartItems]);


    return (
        <aside>
            <h2>購物車</h2> 
            <div className="cart-list"></div>
                {cartItems && cartItems.length >0 &&cartItems.map(item =>(
                    <div className='cart-item' key={item.id}>
                        <Link to={`/items/${item.id}`}>
                        <h3>{item.name}</h3>
                        <h3>{item.price}</h3>
                        </Link>
                        <button onClick={()=> handleDelete(item.id)}>delete</button> 
                    </div>
                ))}
            <div/>
            <p>總價: { total }</p>
        </aside>
     );
}
 
export default Cart;