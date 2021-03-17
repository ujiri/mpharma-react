import React, {useState} from 'react'
import {
  useParams
} from "react-router-dom"

function NewProduct() {
  const [product, setProduct] = useState({name:'', price:''})
  let { id } = useParams();

  const handleSave = (e) => {
    e.preventDefault()

    if(!product.name || !product.price) alert('Enter product Name and Price')
    console.log(product)
  }
  return (
    <div>
      <h2 className="h2 mt-2 mb-4 divide">{ id ? 'Edit' : 'New' } Product</h2>
      <form onSubmit={handleSave} autoComplete="off">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text"
            className="form-control"
            id="name"
            value={product.name}
            onChange={(e) => setProduct(prev => ({name: e.target.value, price:prev.price}))}
            required/>
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input type="number"
            className="form-control"
            id="price"
            value={product.price}
            onChange={(e) => setProduct(prev => ({name: prev.name, price:e.target.value}))}
            required/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default NewProduct
