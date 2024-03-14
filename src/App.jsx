

import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'
import SingleProduct from './SingleProduct';

function App() {

  const [products, setProducts] = useState([]);
  const [cart, setCart] =useState([])

  useEffect(() =>{
      fetch('./fakeData.json')
      .then(res => res.json())
      .then(data => {
        setProducts(data)
      })
  },[])
  

  const handleCart = (p)=>{
    console.log(cart)
    console.log(p)
    const isExist = cart.find((product) => product.id === p.id);
    if(!isExist){
      const newCart = [...cart, p]
      setCart(newCart)
    }
    else{
      alert('already in cart')
    }
  }
  console.log(cart)

  return (
    <>
    <div className="main-container">
      <div className="cards-container">
        {
          products.map(product=> <SingleProduct handleCart={handleCart} product={product}></SingleProduct>)
        }
        
      </div>
      <div className="card-container">
      <h2>right side</h2>
      <div className='cart-title'>
        <h5>Name</h5>
        <h5>Price</h5>
      </div>
      </div>
    </div>
      
      

        
       
    </>
  )
}

export default App
