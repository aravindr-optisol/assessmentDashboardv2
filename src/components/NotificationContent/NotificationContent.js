import React from 'react'
import Image from 'next/image'
import style from '../../../styles/NotificationContent.module.css'
const NotificationContent = (props) => {
  return (
    <div className={`${props.className ? props.className : ""}`}>
    <div className="col-md-1 p-0 text-center">
      <div className={style.profileMeet}>
        <Image src={props.imgUrl} alt="meeting" width={50} height={50} />
      </div>
    </div>
    <div className="col-md-11">
      <span className="inline-block fontBold">{props.name}</span><span className="fontColorGrey p-2">{props.time}</span>
      <div>
        <span className="inline-block fontColorGrey">{props.message}</span>
        <span className="fontColorGrey p-2">— take a second to say hello</span>
      </div>
    </div>
  </div>
  )
}

export default NotificationContent