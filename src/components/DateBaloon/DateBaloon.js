import React from 'react'
import style from '../../../styles/DateBaloon.module.css'
const DateBaloon = (props) => {
  return (
    <div className="container-fluid p-0">
    <div className="row p-3">
      <div className="col-md-12">
        <div className={style.dateContainer}>
          <div className={style.Rectangle_343}><p>Wednesday, December 1st</p></div>
          <div className={style.Line_1685}></div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default DateBaloon