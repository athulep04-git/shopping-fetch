import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function WishList() {
  return (
     <div className="p-4">
      <section>
        <h1 className="text-center p-5">wishlist</h1>
        <Row className="p-5">
          {
          
                <Col>
                  <Link to={`/viewproduct/2`} style={{ textDecoration: 'none' }}>
                    <Card style={{ width: '18rem' }} className="shadow-sm">
                      <Card.Img
                        variant="top"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzSOrIHIncvVwcn86Yj1lG2no3rymRPhF1AQ&s"
                        alt="Product"
                      />
                      <Card.Body>
                        <Card.Title>title</Card.Title>
                        <Card.Text>price$</Card.Text>
                        <div className='d-flex justify-content-center align-items-center gap-2'>
                            <Button variant="danger">remove Product</Button>
                            <Button variant="primary">Add to cart</Button>
                        </div>
                        
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              
            
          }
        </Row>
        <Row>
            <img src="https://cdn.dribbble.com/userupload/20690016/file/original-a6f6e18b0fba708e37637f70157b28c8.gif" alt="" />
        </Row>
      </section>
    </div>
  )
}

export default WishList