import React from "react";
import { Container, Row, Col, Table, Card, Button } from "react-bootstrap";

function Cart() {
  return (
    <Container className="my-5">
      <Row className="g-4">
        <Col lg={8}>
          <h3 className="fw-bold mb-4">Products Details</h3>

          <div className="shadow bg-white p-3">
            <Table className="text-center">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Image</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>101</td>
                  <td>Wireless Headphone</td>
                  <td>
                    <img
                      src="https://shopatsc.com/cdn/shop/files/CH520_A__2500x2500_3981f43e-bf07-4246-98fd-42a92f3c33e8.jpg?v=1745490430"
                      alt="product"
                      style={{
                        width: "60px",
                        height: "60px",
                        objectFit: "cover",
                      }}
                    />
                  </td>
                  <td>
                    <div className="d-flex justify-content-center align-items-center gap-2">
                      <Button variant="danger">
                        -
                      </Button >
                        <input defaultValue={1} type="text" style={{
                        width: "40px",
                      }}/>
                      <Button variant="success">
                        +
                      </Button>
                    </div>
                  </td>
                  <td>$120</td>
                  <td>
                    <Button variant="danger" >Remove</Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Col>

        <Col lg={4}>
          <Card className="shadow text-center ">
            <Card.Body>
              <h3 >Cart Summary</h3>

              <h2 className=" mb-4">Total : $ 0</h2>

              <Button variant="success" className="">
                Buy Now
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col lg={8}>
        <img src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png" alt="" />
        </Col>
        <Col lg={4} style={{paddingTop:"150px"}}>
                  <h1>Your cart is empty</h1>    
                   <Button>Add products</Button>
        </Col>
       
      </Row>
    </Container>
  );
}

export default Cart;
