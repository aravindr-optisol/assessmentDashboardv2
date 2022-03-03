import React from 'react'
import Image from 'next/image'
import style from '../../../styles/ListItem.module.css'
const ListItem = (props) => {
  return (
    <div key={props.key} className={`${style.channelContainer} ${props.className ? props.className :""}`}>
    <div className="row">
      <div className="col-md-2">
        <Image src={props.ItemImg} alt={`channel-${props.key}`} width={"40px"} height={"40px"} />
      </div>
      <div className="col-md-10">
        <p className={style.ChannelName}>
         {props.ItemName}
        </p>
      </div>
    </div>
  </div>
  )
}

export default ListItem