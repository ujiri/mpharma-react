import React, {useState} from 'react'
import { useParams } from "react-router-dom"
import { connect } from 'react-redux';
import { storeProduct, updateProduct } from '../../actions/productActions';

function NewProduct(props) {
  const [product, setProduct] = useState({id:null, name:'', price:''})
  let { id } = useParams();

  const handleSave = (e) => {
    e.preventDefault()

    if(!product.name || !product.price || !product.id){
      alert('Enter product Name and Price')
      return false
    }
    props.storeProduct(product)
  }
  return (
    <div>
      <h2 className="h2 mt-2 mb-4 divide">{ id ? 'Edit' : 'New' } Product</h2>
      <form onSubmit={handleSave} autoComplete="off">
        <div className="form-group">
          <label htmlFor="name">ID</label>
          <input type="number"
            className="form-control"
            id="name"
            value={product.id}
            onChange={(e) => setProduct(prev => ({id: e.target.value, name: prev.name, price:prev.price}))}
            required
            disabled={id ? true : false}/>
        </div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text"
            className="form-control"
            id="name"
            value={product.name}
            onChange={(e) => setProduct(prev => ({id: prev.id, name: e.target.value, price:prev.price}))}
            required/>
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input type="number"
            className="form-control"
            id="price"
            value={product.price}
            onChange={(e) => setProduct(prev => ({id: prev.id, name: prev.name, price:e.target.value}))}
            required/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    products: state.productReducers
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    storeProduct: (product) => {
      dispatch(storeProduct(product))
    },
    updateProduct: (product) => {
      dispatch(updateProduct(product))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewProduct)
