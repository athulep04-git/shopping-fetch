import React, { useState, useEffect } from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom'; 

function ViewProduct() {
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
            <Button variant="dark" size="lg" className="px-5 py-2 mt-3">
              Add to Cart
            </Button>
            <div className="mt-3">
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ViewProduct;
