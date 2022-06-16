import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
// import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
function AllProducts(){

    const [product,setProduct]=React.useState([])
    const [loading,setLoading]=React.useState(false)

    React.useEffect(()=>{
      setLoading(true)
    
        fetch(`http://localhost:3000/products`)
        .then((res)=>res.json())
        .then((res)=>{setProduct(res);setLoading(false)})
        .catch((err)=>console.log(err))
        
    },[])

    const LinkStyle=styled(Link)`
text-decoration:none;`

    if(loading){
        return <p>Loading...</p>
    }

    return(
      
       <table style={{margin:"30px auto "}}>
        <thead>
            <tr>
                <th>Product Name</th>
                <th>Price</th>
                <th>More Details</th>
            </tr>
        </thead>
        <tbody>
         {
            product?.map((item)=>{
        
               return( <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td><LinkStyle to={`/allProducts/${item.id}`}>More...</LinkStyle></td>
                </tr>
               )
            })
         }
        </tbody>
       </table>
    
    )
        
        
}

export default AllProducts