import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faImage, faFaceSmile, faVideo } from "@fortawesome/free-solid-svg-icons";
import style from '../../../styles/sendChat.module.css'
const SendChat = () => {
  return (
    <div className="container-fluid p-0">
    <div className="row bg-white shadow-sm p-3">
      <div className="col-md-12">
        <div className="containerSearch">
          <div className="row no-gutters">
            <div className="col-md-12">
              <div className="row">
                <div className="col-12">
                  <div className="chat-box-tray">
                    <div className={style.chatIPContainer}>
                      <input type="text" placeholder="Add comment" />
                      <FontAwesomeIcon icon={faImage} role='button' className="mx-2 text-secondary" />
                      <FontAwesomeIcon icon={faVideo} role='button' className="mx-2 text-secondary" />
                      <FontAwesomeIcon icon={faFaceSmile} role='button' className="mx-2 text-secondary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default SendChat