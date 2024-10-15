import React from 'react'


/*
"id": 1,
        "nombre": "heart sweet",
        "tipo": "collar",
        "precio": 6500,
        "imagen": "./heart-sweet.jfif"
*/


const Item = ({item}) => {
  return (
    <div>
      <img src={item.img} />
      <h2>{item.model}</h2>
      <span>{item.type}</span>
      <span>${item.cost}</span>
      <Link to = { `/detail/${item.id}` }>
        <button>detail</button>
      </Link>
    </div>
  )
}

export default Item
