import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/slices/cartSlice'
import { deleteProduct } from '../redux/slices/wishlistSlice'

function WishList() {
  const dispatch=useDispatch()
  const wishlistArray= useSelector((state)=>state.wishlist)
  console.log(wishlistArray);//{items"[]}
  const [products,setProducts]=useState([])

  useEffect(()=>{
    setProducts(wishlistArray.items)
  },[wishlistArray.items])
  
  return (
     <div className="p-4">
      <section>
        <h1 className="text-center p-5">wishlist</h1>
        <Row className="p-5">
          {
          products.length>0?
          products.map((item)=>(
            <Col>
                  
                    <Card style={{ width: '18rem' }} className="shadow-sm">
                      <Card.Img
                        variant="top"
                        src={item.images}
                        alt="Product"
                      />
                      <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>{item.price}</Card.Text>
                        <div className='d-flex justify-content-center align-items-center gap-2'>
                            <Button variant="danger"  onClick={()=>dispatch(deleteProduct(item.id))}>remove Product</Button>
                            <Button variant="primary" onClick={()=>dispatch(addToCart(item))}>Add to cart</Button>
                        </div>
                        
                      </Card.Body>
                    </Card>
      
                </Col>

          ))
                
              :
            <Row>
            <img src="https://cdn.dribbble.com/userupload/20690016/file/original-a6f6e18b0fba708e37637f70157b28c8.gif" alt="" />
        </Row>
          }
        </Row>
        
      </section>
    </div>
  )
}

export default WishList