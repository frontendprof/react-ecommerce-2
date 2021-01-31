
import {Card,CardActions,CardContent,CardMedia,Button,Typography, IconButton} from "@material-ui/core"
import {AddShoppingCart} from "@material-ui/icons";
import useStyles from "./styles";





const Product = ({product,onAddToCart}) => {
    const classes=useStyles();

    return (
        <Card className={classes.root}>
            {/* Photo by Lukas from Pexels */}
            <CardMedia className={classes.media} image={product.media.source} title={product.name} />

            <CardContent>
                <div className="classes cardContent">

                    <Typography varinat="h5" gutterBottom>
                        {product.name}
                    </Typography>

                    <Typography varinat="h5">
                        {product.price.formatted_with_symbol}
                    </Typography>

                    <Typography variant="body2" color="textSecondary" 
                        dangerouslySetInnerHTML={{ __html:product.description }} />
                </div>
            </CardContent>

            <CardActions className={classes.cardActions} disableSpacing>
                <IconButton aria-label="Add to Cart" onClick={()=>onAddToCart(product.id,1)}>
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product
