import React from 'react'

function Card({CardName,Detail}) {
  return (
    <div className="card">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg" alt="Avatar" />
        <div className="container">
           <h4><b>{CardName}</b></h4>
           <p>{Detail}</p>
        </div>
     </div>   
  )
}

export default Card