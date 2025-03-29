import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material';
import TypographyComponent from './Typography';
import FormButton from './Button';

const PREFIX = "ProductCard";

const classes = {
    root: `${PREFIX}-root`,
    cardactions: `${PREFIX}-cardactions`,
    cardContent: `${PREFIX}-cardContent`,
    cardWrapper: `${PREFIX}-cardWrapper`
};

const StyledCard = styled(Card)(({ theme }) => ({
    [`&.${classes.root}`]: {
        maxWidth: '20%',
        height: '100%', 
        display: 'flex',
        flexDirection: 'column',
    },
    [`& .${classes.cardContent}`]: {
        flexGrow: 1,
    },
    [`& .${classes.cardactions}`]: {
        justifyContent: 'space-between',
        marginTop: 'auto', 
    },
    [`& .${classes.cardWrapper}`]: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
    },
}));

const ProductCard = ({ product }) => {
  const { id,name, price, image, rating, reviews } = product;

  return (
    <StyledCard className={classes.root}>
      <div className={classes.cardWrapper}>
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt={name}
          sx={{ objectFit: 'cover' }}
        />
        <CardContent className={classes.cardContent}>
          <TypographyComponent
            variant='h6'
            name={`${name}-product-title`}
            id={`${name}-product-title`}
            title={name}
          />
          <TypographyComponent
            variant='h6'
            name={`${name}-product-price`}
            id={`${name}-product-price`}
            title={`${price.toFixed(2)}`}
          />
          <Stack direction="row" alignItems="center" spacing={1}>
            <Rating 
              name="product-rating" 
              value={rating} 
              precision={0.5} 
              readOnly 
              size="small"
            />
            <Typography variant="body2" color="text.secondary">
              ({reviews} reviews)
            </Typography>
          </Stack>
        </CardContent>
        
        <CardActions className={classes.cardactions}>
            <FormButton 
            size='small'
            variant='contained'
            color='primary'
            id={`${id}-add-btn-cart`}
            name={`${name}-add-btn-cart`}
            title='Add to cart'
            />
          <IconButton aria-label="share">
            <AddShoppingCartIcon />
          </IconButton>
        </CardActions>
      </div>
    </StyledCard>
  );
};

export default ProductCard;