
import React from 'react'
import Grid from "@material-ui/core"
import Product from "./Product";



const products=[
    {id:1,name:"Shoes",desc:"Running shoes"},
    {id:2,name:"iPhone",desc:"Smart phone"},
    {id:3,name:"Pants",desc:"Casual pants"},
]


 
const Products = () => {
    return (
        <main>
            <Grid container justify="center">
                {products.map(product=>(
                    <Grid item key={product.key} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product}/>
                    </Grid>
                ))}

            </Grid>
            
        </main>
    )
}

export default Products
