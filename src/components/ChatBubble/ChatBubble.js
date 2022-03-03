import React from 'react'
import Image from 'next/image'
import style from '../../../styles/ChatBubble.module.css'
const ChatBubble = (props) => {
  return (
    <div className="row p-3">
    <div className="col-md-1">
      <Image src={props.chatPic} alt="meeting" width={50} height={50} />
    </div>
    <div className="col-md-11">
      <div className="row">
        <div className="col-md-12">
          <span className="inline-block fontBold">{props.chatName} </span><span className="fontColorGrey p-2">{props.chatTime}</span>
        </div>
        <div className="col-md-12">
          <div className={ props.viewMore ? "Path-18915" : "Path-18916" }>
            <span className="inline-block ">{props.chatMsg}
            </span>
            {
              props.viewMore ?
              <span className="viewMoreRequirements">
              <span className="d-inline-block p-2">
                View
              </span>
              <span className="d-inline-block viewMoreChannels">
                <Image src={"/roundBlue.png"} width={20} height={20} alt="round" />
              </span>
            </span>
            :
            ""
            }


          </div>

        </div>
      </div>

    </div>
  </div>
  )
}

export default ChatBubble