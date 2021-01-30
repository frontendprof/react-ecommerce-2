
import React from 'react'
import {Grid} from "@material-ui/core"
import Product from './Product/Product';

// import shoes from "../../assets/shoes.jpg"




const products=[
    {id:1,name:"Shoes", price:"$180", desc:"Running shoes",image:"https://images.pexels.com/photos/292999/pexels-photo-292999.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},
    {id:2,name:"iPhone",price:"$1150", desc:"Smart phone",image:"https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},
    {id:3,name:"Watch",price:"$1850", desc:"Casual pants",image:"https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"},
]


 
const Products = () => {
    return (
        <main>
            <Grid container justify="center" spacing={4}>
                {products.map(product=>(
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}

            </Grid>
            
        </main>
    )
}

export default Products
