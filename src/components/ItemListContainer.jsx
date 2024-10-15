import React, { useState } from 'react'
import mockProducts from '../assets/mockData.json'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

const ItemListContainer = () => {

  const [products, setProducts] = useState ([])

  const {categoryId} = useParams()


  let productsFiltered = []

  useEffect(()=>{

  const productos = new Promise ((resolve, reject) => {
    
    setTimeout( ()=>{
      resolve (mockProducts)
    }, 2000)

} )

productos
.then(
    (response) => {
    
      if (categoryId) {
        productsFiltered = response.filter(products => products.category == categoryId)
        console.log("id obtenido");
        
      } else {
        productsFiltered = response
      }
      setProducts(productsFiltered)
    }, [categoryId]
    )

.catch ((error) => {
    console.error ("Error", error)
})

})

  



return <ItemList products={productsFiltered} />
}


export default ItemListContainer
