import React from 'react'
import Image from 'next/image'

const ViewMoreButton = (props) => {
  return (
    <div className="viewMoreRequirements">
    <div className="d-inline-block p-2 fontBold">
      View More
    </div>
    <div className="d-inline-block viewMoreChannels">
      <Image src={"/roundBlue.png"} width={20} height={20} alt="round" />
    </div>
  </div>
  )
}

export default ViewMoreButton