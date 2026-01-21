import React, { useState, useEffect } from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom'; 
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../redux/slices/wishlistSlice';
import { addToCart } from '../redux/slices/cartSlice';

function ViewProduct() {

  const dispatch=useDispatch()
  // 1. get product id from the URL
  const { id } = useParams();

  // 1. define url
  const baseurl = `https://dummyjson.com/products/${id}`;
  const [product, setProduct] = useState({});


  //define a function fetch data from url
    const getData=async()=>{
    const response=await fetch(baseurl);
    const productData=await response.json();
    setProduct(productData);
  };

  useEffect(() => {
    getData();
  }, []);


  return (
    <div>
      <Container className="my-5">
        <Row className="align-items-center">
          <Col className="text-center">
            <img
              src={product.thumbnail}
              style={{ width: "100%", maxWidth: "500px", objectFit: "cover" }}
            />
          </Col>
          <Col>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <h4 className="text-success">Price: ${product.price}</h4>
           <div className="d-flex gap-3 mt-3">
  <Button onClick={()=>dispatch(addToWishlist(product))} variant="dark" size="md" className="px-5 py-2">
    Add to Wishlist
  </Button>

  <Button onClick={()=>dispatch(addToCart(product))} variant="dark" size="md" className="px-5 py-2">
    Add to cart
  </Button>
</div>

            
            <div className="mt-3">
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ViewProduct;
