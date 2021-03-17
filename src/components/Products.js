import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {
  Link
} from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([])
  
  useEffect(() => {
    const fetchProducts = async () => {
      axios.get('http://www.mocky.io/v2/5c3e15e63500006e003e9795')
        .then(resp => {
          setProducts(resp.data.products)
        })
    }
    fetchProducts()
  }, [])

  let items = products.map(product => {
    return {
      id: product.id,
      name: product.name,
      price: product.prices.reduce((a, b) => {
        return new Date(a.MeasureDate) > new Date(b.MeasureDate) ? a : b;
      }).price
    }
  })

  return (
    <div>
      {items.length > 0 ? (
        <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">Product Name</th>
            <th scope="col">Price</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <th>{ item.name }</th>
              <td>N {item.price}</td>
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
    </div>
  )
}

export default Products
