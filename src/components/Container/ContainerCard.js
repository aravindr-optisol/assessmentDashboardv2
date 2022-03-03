import React from 'react'
const ContainerCard = (props) => {
  return (
    <div className={`bg-white shadow-sm ${props.className ? props.className : ""}`}>
    {props.children}
    </div>
  )
}
export default ContainerCard