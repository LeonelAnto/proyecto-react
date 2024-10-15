import React, { useEffect, useState } from 'react'
import mockProducts from '../assets/mockData.json'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
  const [product, setProducts] = useState([])

  const {id} = useParams


  useEffect(
    () => {
      const product = mockProducts.find(productToFind => productToFind.id === id)
      console.log("id encontrado");
      
      
      setProducts(product)
    
    }, [id]
  )
  
  return (product && <ItemDetail product={product}/>)
}

export default ItemDetailContainer
