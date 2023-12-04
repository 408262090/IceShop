import { useState,useEffect} from 'react';
import ItemList from './ItemList';
import Cart from'./Cart';
import useFetch from './useFetch';

const Home = () => {
    
    const{data:items , error } = useFetch('http://localhost:8000/items')


    const handleClick = (name, price,imageURL)=>{
        const data = { name, price,imageURL};
            fetch('http://localhost:8001/cart-items',{
            method:'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        }).then(()=>{
            console.log('已加入購物車')
        })
    }

    return (
        <div className="Home">
            <h2>Menu</h2>
            {error &&<div>{ error }</div>}
            {items && <ItemList items={ items } handleClick={handleClick}/>}
        </div>
      );
}
 
export default Home;