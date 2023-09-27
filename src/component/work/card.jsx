import React from 'react'

function Card({CardName}) {
  return (
    <div className="card">
        <div className="overlay">
           <h1 className='cardname'>{CardName}</h1>
           <img className="logo" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postman-icon.png" alt="HTML"/>
        </div>
     </div>   
  )
}

export default Card