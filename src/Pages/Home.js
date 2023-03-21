import React from 'react'
import {Container} from '@mui/material';
import Welcome from '../components/Welcome'
import Hero from '../components/Hero';
import { ProductContainer } from '../components/ProductContainer';

const Home = () => {
  return (
    <Container maxWidth={false}>
        <Welcome />
        <Hero />
        <ProductContainer />
    </Container>
  )
}

export default Home