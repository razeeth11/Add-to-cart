import { useState } from 'react'
import './App.css'
import { products } from './data'

function App() {

  const [data,setData] = useState(products)

  return (
    <div className='App'>
       {data.map((item,index)=> <ProductsComp props={item} key={index} index={index}/>)}
    </div>
  )
}

function ProductsComp({props,index}){
  const {Price,MobileName,img,Brand,Offer,Spec} = props

  return(
    <div className="products">
      <div className="image-div">
      <img src={img} alt={MobileName} width="100px"/>
      </div>
      <div className="text-div">
      <div className="mob-spec">
        <h2>{MobileName}</h2>
        <p>{Brand}</p>
        <p className='spec'>{Spec}</p>
      </div>
      <div className="price-tag">
        <h3><span className='dollar'>$</span>{Price}</h3>
      </div>
      <div className="button-tag">
        <button>Buy Now</button>
        <button onClick={()=>console.log(
          {
            Mobile : MobileName,
            img : img,
            Brand : Brand,
            Price : Price,
            Spec: Spec,
            Offer : Offer
          }
        )}>Add To Cart</button>
      </div>
      </div>
    </div>
  )
}

export default App