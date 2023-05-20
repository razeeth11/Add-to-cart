import { useState } from 'react'
import './App.css'
import { products } from './data'

function App() {

  const [data,setData] = useState(products)

  return (
    <div className='App'>
       {data.map((item,index)=> <ProductsComp props={item} key={index}/>)}
    </div>
  )
}

function ProductsComp({props}){
  const {Price,MobileName,img,Brand,Offer} = props

  return(
    <div className="products">
      
    </div>
  )
}

export default App