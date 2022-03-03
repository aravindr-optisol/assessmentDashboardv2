import BuyingSpaceLayout from '../../src/components/Layouts/BuyingSpaceLayout'
import Image from 'next/image'
const Spaces = () => {
  const CardComponent = (props) => {
    return (
      <div className=" shadow-sm p-4 mb-5 bg-white rounded spacesWidth">
        {props.children}
      </div>
    )
  }

  return (
    <BuyingSpaceLayout>
      <div className="container-fluid p-2">
        <div className='row shadow-sm p-3 mb-5 bg-white rounded ChannelsLeft'>
          <div className='col-md-12 '>
            <span className='buySpaceTitle'>
              Buying Spaces
            </span>
            <span className='buySpaceDesc'>- Content Management System</span>
          </div>

          <div className='col-md-12 '>
            {/* card 1 start */}
            <CardComponent>
              <div className="row AddedReq">
                <div className="fontBold d-inline w-auto">Stakeholders</div>
                <Image src={"/edit.svg"} width={20} height={20} alt="" />
              </div>
              <div className="viewMoreRequirements">
                <div className="d-inline-block p-2 fontBold">
                  Add New
                </div>
                <div className="d-inline-block viewMoreChannels">
                  <Image src={"/roundBlue.png"} width={20} height={20} alt="round" />
                </div>
              </div>
              <hr />
              <div className="mt-4 spaceCard">
                <span>
                  <span className='fontColorGrey'>
                    <span className='fontBold'>02</span>
                    Stakeholders added
                  </span>
                  <Image src={"/tick.svg"} width={20} height={20} alt="round" />
                </span>
              </div>
              <Image src={"/a2.png"} width={40} height={40} alt="round" />
              <Image src={"/a3.png"} width={40} height={40} alt="round" />
            </CardComponent>
            {/* card 1 end */}
            {/* card 2 start */}
            <CardComponent>
              <div className="row AddedReq">
                <div className="fontBold d-inline w-auto">Requirements</div>
              </div>
              <div className="viewMoreRequirements">
                <div className="d-inline-block p-2 fontBold">
                  Add New
                </div>
                <div className="d-inline-block viewMoreChannels">
                  <Image src={"/roundBlue.png"} width={20} height={20} alt="round" />
                </div>
              </div>
              <hr />

              <div className="mt-4 spaceCard2">
                <span><Image src={"/folder.png"} width={40} height={40} alt="round" className='p-1' /></span>

                <span className='fontColorGrey'>There are no requirements added</span>
              </div>
              <br />
            </CardComponent>
            {/* card 2 end */}
            {/* card 3 start */}
            <CardComponent>
              <div className="row AddedReq">
                <div className="fontBold d-inline w-auto">Shortlisted Vendors</div>
                <Image src={"/edit.svg"} width={20} height={20} alt="" />
              </div>
              <div className="viewMoreRequirements">
                <div className="d-inline-block p-2 fontBold">
                  Add New
                </div>
                <div className="d-inline-block viewMoreChannels">
                  <Image src={"/roundBlue.png"} width={20} height={20} alt="round" />
                </div>
              </div>
              <hr />

              <div className="mt-4 spaceCard">

                <span className='fontColorGrey'><span className='fontBold'>03</span> Vendors added</span>
                <Image src={"/tick.svg"} width={20} height={20} alt="round" />
              </div>
              <Image src={"/kento.png"} width={40} height={40} alt="round" className='p-1' />
              <Image src={"/wordPress.png"} width={40} height={40} alt="round" className='p-1' />
              <Image src={"/ghost.png"} width={40} height={40} alt="round" className='p-1' />
            </CardComponent>
            {/* card 3 end */}
            {/* card 4 start */}
            <CardComponent>
              <div className="row AddedReq">
                <div className="fontBold d-inline w-auto">Evaluate & Score</div>
                {/* <Image src={"/edit.svg"} width={20} height={20} alt="" /> */}
              </div>
              <div className="viewMoreRequirements">
                <div className="d-inline-block p-2 fontBold">
                  Add New
                </div>
                <div className="d-inline-block viewMoreChannels">
                  <Image src={"/roundBlue.png"} width={20} height={20} alt="round" />
                </div>
              </div>
              <hr />
              <div className="mt-4 spaceCard2">
                <span><Image src={"/tick.png"} width={40} height={40} alt="round" className='p-1' /></span>

                <span className='fontColorGrey'>Evaluation In Progress … </span>
              </div>
              <br />
            </CardComponent>
            {/* card 4 end */}
            {/* card 5 start */}
            <CardComponent>
              <div className="row AddedReq">
                <div className="fontBold d-inline w-auto">Request Quote </div>
                {/* <Image src={"/edit.svg"} width={20} height={20} alt="" /> */}
              </div>
              <div className="viewMoreRequirements">
                <div className="d-inline-block p-2 fontBold">
                  Add New
                </div>
                <div className="d-inline-block viewMoreChannels">
                  <Image src={"/roundBlue.png"} width={20} height={20} alt="round" />
                </div>
              </div>
              <hr />

              <div className="mt-4 spaceCard">
                <span className='fontColorGrey'><span className='fontBold'>02</span>Quotes Received</span>
                <Image src={"/tick.svg"} width={20} height={20} alt="round" />
              </div>
              <Image src={"/pdf.png"} width={30} height={30} alt="round" />
              <Image src={"/word.png"} width={30} height={30} alt="round" />
            </CardComponent>
            {/* card 5 end */}
          </div>
        </div>
      </div>
    </BuyingSpaceLayout>
  );
}

export default Spaces;