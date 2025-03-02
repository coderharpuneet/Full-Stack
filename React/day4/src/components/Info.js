import React from 'react'

function Info(props) {
  return (
    <tr>
        <td>{props.custName}</td>
    <td>{props.prodName}</td>
    <td>{props.price}</td>
    <td>{props.quantity}</td>
    </tr>
  )
}

export default Info