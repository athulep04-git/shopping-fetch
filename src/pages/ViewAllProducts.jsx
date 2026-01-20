import { Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import React, { useState, useEffect } from 'react';                  

function ViewAllProducts() {

  //1.define url
  const baseurl = 'https://dummyjson.com/products';

  //4.create a state for holding products
  const [products, setProducts] = useState([]);

  //2.define a function fetch data from the url
  const getData = async () => {
    const response = await fetch(baseurl);
    console.log(response);
    const productData = await response.json();
    console.log(productData);
    console.log(productData.products);
    setProducts(productData.products);
  };

  //3.call the api function
  useEffect(() => {
    getData();
  }, []);

  console.log(products);

  return (
    <div className="p-4">
      <section>
        <h1 className="text-center p-5">All Products</h1>
        <Row className="p-5">
          {
            products.length > 0 ?
              products.map((item) => (
                <Col>
                  <Link to={`/viewproduct/${item.id}`} style={{ textDecoration: 'none' }}>
                    <Card style={{ width: '18rem' }} className="shadow-sm">
                      <Card.Img
                        variant="top"
                        src={item.thumbnail}
                        alt="Product"
                      />
                      <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>{item.price}$</Card.Text>
                        <Button variant="primary">View Product</Button>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              ))
              : "Empty"
          }
        </Row>
      </section>
    </div>
  );
}

export default ViewAllProducts;

