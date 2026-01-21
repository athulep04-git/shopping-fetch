import React, { useEffect, useState } from "react";
import { Container, Row, Col, Table, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { decrement, deleteFromCart, increment } from "../redux/slices/cartSlice";
import { Link } from "react-router-dom";

function Cart() {
  const dispatch=useDispatch()
  const cartArray = useSelector((state) => state.cart);
  console.log(cartArray);
  const [products, setProducts] = useState([]);

  console.log(products);
  
  useEffect(() => {
    setProducts(cartArray.items);
  },[cartArray.items]);

  return (
    <Container className="my-5">
      {products.length > 0 ? (
        <Row className="g-4">
          <Col lg={8}>
            <h3 className="fw-bold mb-4">Products Details</h3>

            <div className="shadow bg-white p-3 rounded">
              <Table bordered hover responsive className="text-center align-middle">
                <thead>
                  <tr>
                    <th style={{ width: "8%" }}>ID</th>
                    <th style={{ width: "25%" }}>Title</th>
                    <th style={{ width: "15%" }}>Image</th>
                    <th style={{ width: "20%" }}>Quantity</th>
                    <th style={{ width: "12%" }}>Price</th>
                    <th style={{ width: "20%" }}>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {products.map((item) => (
                    <tr>
                      <td>{item.id}</td>

                      <td className="text-start">{item.title}</td>

                      <td>
                        <img
                          src={item.images}
                          alt="product"
                          style={{
                            width: "60px",
                            height: "60px",
                          
                          }}
                          className="rounded"
                        />
                      </td>

                      <td>
                        <div className="d-flex justify-content-center align-items-center gap-2">
                          <Button variant="danger" size="sm" onClick={()=>dispatch(decrement(item))} >
                            -
                          </Button>

                          <input
                            value={item.quantity}
                            type="text"
                            className="form-control text-center"
                            style={{ width: "55px" }}
                          />

                          <Button variant="success" size="sm"  onClick={()=>dispatch(increment(item))}>
                            +
                          </Button>
                        </div>
                      </td>

                      <td>${Math.ceil(item.totalprice)}</td>

                      <td>
                        <Button variant="danger" size="sm" onClick={()=>dispatch(deleteFromCart(item.id))}>
                          Remove
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Col>
          <Col lg={4}>
            <Card className="shadow text-center">
              <Card.Body>
                <h3>Cart Summary</h3>
                <h2 className="mb-4">Total : $ 
                  {
                    Math.ceil(products.reduce((sum,item)=>sum+item.totalprice,0))
                  }
                </h2>
                <Button variant="success">Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ) : (
        <Row className="mt-5 align-items-center">
          <Col lg={8} className="text-center">
            <img
              src="https://i.gifer.com/origin/5d/5d20a530b16e22c86347bb057bceabda.gif"
              alt="empty"
              style={{ height:"500px" }}
            />
          </Col>

          <Col lg={4} className="text-center">
            <h2>Your cart is empty</h2>
            <Link to={`/viewallproducts`}>
              <Button variant="dark" className="mt-3">
              Add products
              </Button>
            </Link>
            
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default Cart;
