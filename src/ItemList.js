const ItemList = ({items , handleClick}) => {
     
    return ( 
        <div className="item-list">
              {items.map(item => (
                <div className='menu-item' key={item.id}>
                    <h2>{item.name}</h2>
                    <h2>{item.price}</h2>
                    <button onClick={ () => handleClick( item.name ,item.price,item.id) } >加入購物車</button> 
                </div>
                ))}
        </div>
     );
}
 
export default ItemList;