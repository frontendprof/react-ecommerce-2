
import {Card,CardActions,CardContent,CardMedia,Button,Typography, IconButton} from "@material-ui/core"
import {AddShoppingCart} from "@material-ui/icons";
import useStyles from "./styles";





const Product = ({product}) => {
    const classes=useStyles();

    return (
        <Card className={classes.root}>
            {/* Photo by Lukas from Pexels */}
            <CardMedia className={classes.media} image={product.image} title={product.name} />

            <CardContent>
                <div className="classes cardContent">

                    <Typography varinat="h5" gutterBottom>
                        {product.name}
                    </Typography>

                    <Typography varinat="h5">
                        {product.price}
                    </Typography>

                    <Typography variant="body2" color="textSecondary">{product.desc}</Typography>
                </div>
            </CardContent>

            <CardActions className={classes.cardActions} disableSpacing>
                <IconButton aria-label="Add to Cart">
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product
