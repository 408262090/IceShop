import { useState,useEffect} from 'react';
import ItemList from './ItemList';
import Cart from'./Cart';



const Home = () => {

    const [items,setItems] = useState ([
        {name:'愛的就是檸', price: 300 , id:1},
        {name:'不要不梨我', price: 310 , id:2},
        {name:'草夠了莓', price: 320 , id:3}
    ]);

    const[total,setTotal] = useState(0);
    
    const[cart,setCart ] = useState([]);

    const handleClick= (name, price,id) => {
        const newItem = items.find(item => item.id === id); 
       if (newItem) {
         const updatedCart = [...cart, newItem]; // 將新商品追加到現有的購物車中
         setCart(updatedCart); // 更新購物車狀態
         setTotal(prevTotal => prevTotal + price); // 更新總金額
        }
        <Cart cart={cart} total={total}/>
    }
    const handledelete=(name, price,id)=>{
        const updatedCart = [...cart];
        const lastItemPrice = updatedCart[updatedCart.length - 1].price;
        const updatedTotal = total - lastItemPrice;
        updatedCart.pop(); 
        setCart(updatedCart);
        setTotal(updatedTotal); 
    }

    useEffect(()=>{
        console.log('use effect ran');
        console.log(items);
    },[]);

    return (
        <div className="Home">
            <h2>Menu</h2>
            <ItemList items={ items } handleClick={handleClick}/>
            <aside> 
                <h2>購物車</h2>
                <div className="item-list"></div>
                    {cart.map(item => (
                        <div className='cart-item' key={item.id}>
                            <h3>{item.name}</h3>
                            <h3>{item.price}</h3>
                            <button onClick={ () => handledelete( item.name ,item.price,item.id) } >刪除</button> 
                        </div>
                    ))}
                <div/>
                <p id="total">總價:{ total }元</p> 
            </aside> 
        </div>
      );
}
 
export default Home;