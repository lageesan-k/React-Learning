import ProductItem from "./Lists/product-item"
import './product-list.css'

function ProductList({name,city,listofproducts}) {

    return(
        <div className="product-list">
            <h3>Our Product List</h3>
            <h4>My name is {name},he is belongs to the city {city}</h4>
            <ul className="products">
                {
                    listofproducts.map((item,index)=>
                        <ProductItem singleproductitem={item} key={index} itemId={index}/>
                    )
                }
            </ul>
        </div>
        
    )
}

export default ProductList;