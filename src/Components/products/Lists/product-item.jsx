

function ButtonComponent(){
    return (
    <button id="buttoncomponent">Click</button>
    )
}


function Productitem({singleproductitem,itemId}){
    return(
        <div className="product-card" id={itemId}>
            <h3>{singleproductitem.name}</h3>
            <h3>{singleproductitem.price}</h3>

            <ButtonComponent/>  
        </div>
    )
}

export default Productitem;