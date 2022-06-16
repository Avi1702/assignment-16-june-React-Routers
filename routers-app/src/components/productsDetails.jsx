import React from "react";
import { useParams } from "react-router-dom";

function ProductDetails(){

   
    const { productId }= useParams()    
    const [more,setMore]=React.useState([])
    const [loading,setLoading]=React.useState([])

React.useEffect(()=>{

  setLoading(true)
    fetch(`http://localhost:3000/products/${productId}`)
    .then((res)=>res.json())
    .then((res)=>{setMore(res);setLoading(false)})
    .catch((err)=>console.log(err))
},[productId])

if(loading){
    <p>Loading...</p>
}
    return(
        // <h2>hii</h2>
       
       <table>
        <thead>
             <tr>Id</tr>
            <tr>Name</tr>
            <tr>Price</tr>
        </thead>
        <tbody>
            {
                more?.map((item)=>{
                    return(
                        <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    </tr>
                    )

                })
            }
        </tbody>
       </table>
        
    )
}

export default ProductDetails