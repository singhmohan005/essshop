import React,{useEffect, useState} from 'react';
import Container from '@mui/material/Container';
import { Box, styled } from '@mui/material';
import ProductCard from "../../components/ProductCard";
import Logosvg from "../../logo.svg";
import getAllProducts from '../../services/productService'
import PrimarySearchAppBar from './AppBar';

const PREFIX = "Home";

const classes = {
    root: `${PREFIX}-root`,
    productcontainer: `${PREFIX}-productcontainer`
};

const StyledContainer = styled(Container)(({ theme }) => ({
    [`&.${classes.root}`]: {
        padding: 0,
        margin: 0,
    },
}));

const ProductContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: theme.spacing(1),
    marginTop:theme.spacing(8)
}));

const Home = () => {
    const [products,setProducts] = useState([])
    const sampleProduct = [
        {
            id: 1,
            name: 'Premium Noise Cancelling Headphones',
            price: 99.99,
            image: Logosvg,
            rating: 4.5,
            reviews: 128
        },
        {
            id: 2,
            name: 'Premium Noise Cancelling Headphones',
            price: 199.99,
            image: Logosvg,
            rating: 4.8,
            reviews: 256
        },
        {
            id: 3,
            name: 'Premium Noise Cancelling Headphones',
            price: 79.99,
            image: Logosvg,
            rating: 4.3,
            reviews: 89
        },
        {
            id: 4,
            name: 'Premium Noise Cancelling Headphones',
            price: 149.99,
            image: Logosvg,
            rating: 4.7,
            reviews: 312
        },
        {
            id: 5,
            name: 'Premium Noise Cancelling Headphones',
            price: 49.99,
            image: Logosvg,
            rating: 3.9,
            reviews: 56
        },
        {
            id: 6,
            name: 'Premium Noise Cancelling Headphones',
            price: 129.99,
            image: Logosvg,
            rating: 4.6,
            reviews: 178
        },
        {
            id: 7,
            name: 'Premium Noise Cancelling Headphones',
            price: 129.99,
            image: Logosvg,
            rating: 4.6,
            reviews: 178
        },
        {
            id: 8,
            name: 'Premium Noise Cancelling Headphones',
            price: 129.99,
            image: Logosvg,
            rating: 4.6,
            reviews: 178
        },
        {
            id: 9,
            name: 'Premium Noise Cancelling Headphones',
            price: 129.99,
            image: Logosvg,
            rating: 4.6,
            reviews: 178
        },
        {
            id: 10,
            name: 'Premium Noise Cancelling Headphones',
            price: 129.99,
            image: Logosvg,
            rating: 4.6,
            reviews: 178
        },
    ];

    const getProducts = async () =>{
        getAllProducts()
        .then(data =>setProducts(data))
        .catch(error => console.error('Error:', error)); 
    }

    useEffect(()=>{
        getProducts()
    },[])

    return (
      <h1>{t("welcome")}</h1>
        <StyledContainer className={classes.root} maxWidth={false}>
            {/* <PrimarySearchAppBar/> */}
            <ProductContainer>
                {sampleProduct.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </ProductContainer>   
        </StyledContainer>
    );
};

export default Home;