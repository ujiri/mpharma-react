import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { deleteProduct, setProducts } from '../../actions/productActions';
import moment from 'moment';

// import { deNormalizedData, normalizedData } from '../../normalizer'

function Products(props) {
  const [products, setProducts] = useState([])
  console.log(props)
  
  useEffect(() => {
    const fetchProducts = async () => {
      await axios.get('http://www.mocky.io/v2/5c3e15e63500006e003e9795')
        .then(resp => {
          // const {entities, result} = normalizedData(resp.data.products)
          // console.log(entities)
          // console.log(result)
          setProducts(resp.data.products)
          // const original = deNormalizedData(result, entities)
          // console.log(original);
        })
    }
    fetchProducts()
  }, [setProducts, products])

  let items = products.map(product => {
    return {
      id: product.id,
      name: product.name,
      priceDesc: product.prices.slice().sort((a, b) => new Date(b.date) - new Date(a.date))
    }
  })

  return (
    <div>
      <h2 className="h2 mt-2 mb-4 divide">All Products</h2>
      {props.status === 'fetching'
      ? 'loading'
      : <>
      {items.length > 0 ? (
        <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Product Name</th>
            <th scope="col">Price</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <th>{ item.id }</th>
              <th>{ item.name }</th>
              <td>{item.priceDesc.map((price, index) => (
                <span key={price.id} className={`d-block my-1 ${index === 0 ? 'font-weight-bold' : ''}`}>
                  { moment(new Date(price.date)).format('MMMM Do YYYY') }: N {price.price}
                </span>
              ))}</td>
              <td>
                <Link to={'edit-product/' + item.id} type="button" className="btn btn-info btn-sm mr-2">Edit</Link>
                <button type="button" className="btn btn-danger btn-sm">Delete</button>
              </td>
          </tr>
          ))}
        </tbody>
        </table>
      ) : (
        'No Products'
      )}
      </>
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    status: state.productReducers,
    products: state.productReducers,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setProducts: (products) => {
      dispatch(setProducts(products))
    },
    deleteProduct: (product) => {
      dispatch(deleteProduct(product))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)
