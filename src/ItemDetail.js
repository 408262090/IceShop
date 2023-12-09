import{useParams} from "react-router-dom";
import useFetch from './useFetch';

const ItemDetails = () => {

    const{ id } = useParams()
    const apiUrl = new URL('http://localhost:8001/cart-items/' + id);
    const { data: item, error } = useFetch(apiUrl.toString());
    
    return ( 
        <div className="item-details">
            {item &&(
                <article>
                    <h2>{item.name}</h2>
                    <h2>{item.price}</h2>
                    <img src={item.imageURL} alt={item.name} />
                </article>
            )}
        </div>
     );
}
 
export default ItemDetails;
