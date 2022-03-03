import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faImage, faFaceSmile, faVideo } from "@fortawesome/free-solid-svg-icons";
import BuyingSpaceLayout from "../../src/components/Layouts/BuyingSpaceLayout";
import Image from 'next/image'
import ContainerCard from "../../src/components/Container/ContainerCard";
import ListItem from "../../src/components/ListItem/ListItem";
import SendChat from "../../src/components/SendChat/SendChat";
import DateBaloon from "../../src/components/DateBaloon";
import ChatBubble from "../../src/components/ChatBubble";
import NotificationContent from "../../src/components/NotificationContent";
import { Fragment } from "react";

const Channels = () => {
  let channelList = [{ channelName: "Wordpress", image: "/wordPress.png" },
  { channelName: "Kentico Kontent", image: "/kento.png" },
  { channelName: "Ghost CMS", image: "/ghost.png" }]
  let profileMeet = [
    { name: "p1", imgUrl: "/a1.png" },
    { name: "p2", imgUrl: "/a2.png" },
    { name: "p3", imgUrl: "/a3.png" },
    { name: "p4", imgUrl: "/plus.png" },
  ]
  let notificationArray = [{
    date: "Wednesday, December 1st",
    notificationList: [{
      imageUrl: "/11.png",
      name: "Maurice Rodriguez",
      time: "10.30AM",
      message: "Joined to Kentico Kontent channel"
    },
    {
      imageUrl: "/12.png",
      name: "Joanne Wells",
      time: "10.30AM",
      message: "Joined to Kentico Kontent channel"
    },
    ]
  },
  ]
  let commentContents = [{
    date: "Friday , December 3rd",
    chatContents: [
      {
        prImg: "/11.png",
        name: "Maurice Rodriguez",
        time: "09:59 AM",
        chatMsg: <span>12 Requirements added</span>,
        viewMore: true
      },
      {
        prImg: "/a1.png",
        name: "John Nielsen",
        time: "10:59 AM",
        chatMsg: <span><span className="fontBold">@ Maurice Rodriguez</span>, check the requirements again and schedule the meeting! </span>,
        viewMore: false
      },
      {
        prImg: "/11.png",
        name: "Maurice Rodriguez",
        time: "11:59 AM",
        chatMsg: <span>Yes I have updated the Requirements!</span>,
        viewMore: false
      }
    ]
  }]
  return (
    <BuyingSpaceLayout>
      <div className="container-fluid p-2">
        <div className='row'>
          <ContainerCard className="col-md-3  p-3 mb-5 rounded ChannelsLeft">
            <span className="Channels">
              Channels
            </span>
            <div className="search">
              <FontAwesomeIcon icon={faSearch} />
              <input type="text" className="form-control searchInput" placeholder="Search Here " />
            </div>
            {/* result window */}
            {
              channelList.map((data, index) => {
                return (
                  <ListItem
                    key={index}
                    className={"container-fluid"}
                    ItemImg={data.image}
                    ItemName={data.channelName}
                  />
                )
              })
            }
          </ContainerCard>
          {/* middle layout start */}
          <div className='col-md-6'>
            {/* header title */}
            <div className="container-fluid p-0">
              <ContainerCard className="row p-3">
                <div className="col-md-6">
                  <span className="p-3">Kentico Kontent -</span>
                  <span className="fontColorGrey"><div className="Ellipse-1157"></div> online</span>
                </div>
                <div className="col-md-6 d-inline-flex justify-content-end">
                  {
                    profileMeet.map((data, index) => {
                      return (
                        <div key={index} className="profileMeet">
                          <Image src={data.imgUrl} alt="meeting" width={50} height={50} />
                        </div>
                      )
                    })
                  }
                </div>
              </ContainerCard>
            </div>
            <div className="container-fluid p-0">
              <div className="row shadow-sm p-3">
                <div className="col-md-12">
                  {
                    notificationArray.map((dataL1, index) => {
                      return (
                        <Fragment key={index}>
                          <DateBaloon dateValue={dataL1.date} />
                          <br />
                          {
                            dataL1.notificationList.map((dataL2, key2) => {
                              return (
                                <div key={key2}>
                                  <NotificationContent name={dataL2.name} time={dataL2.time} imgUrl={dataL2.imageUrl} message={dataL2.message} className="row" />
                                </div>
                              )
                            })
                          }
                        </Fragment>
                      )
                    })
                  }
                </div>
                {/* comment Section */}
                {/* Chat 1 */}
                <div className="container-fluid p-0">
                  {

                    commentContents.map((dataL1, index1) => {
                      return (
                        <Fragment key={index1}>
                          <DateBaloon dateValue={dataL1.date} />
                          <br />
                          {
                            dataL1.chatContents.map((dataL2, index) => {

                              return (<ChatBubble key={index} chatName={dataL2.name} chatTime={dataL2.time} chatMsg={dataL2.chatMsg} chatPic={dataL2.prImg} viewMore={dataL2.viewMore} />)
                            })
                          }

                        </Fragment>
                      )
                    })
                  }
                </div>
                {/* comment Section end*/}
              </div>
            </div>
            {/* comment start*/}
            <SendChat />
            {/* comment end*/}
          </div>
          {/* middle layout end */}
          <div className='col-md-3'>
            <ContainerCard className="container-fluid p-4 mb-5 rounded">
              <div className="row">
                <div className="col-md-2 p-0">
                  <div className="profileMeet">
                    <Image src={"/tristan.png"} alt="meeting" width={50} height={50} />
                  </div>
                </div>
                <div className="col-md-10">
                  <span className="d-block fontBold">Tristan Wells</span>
                  <span className="d-block fontColorGrey">Kentico Kontent’s Sales Agent</span>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="Rectangle-3 mt-2">Schedule Meeting</div>
                </div>
              </div>
            </ContainerCard>
            <ContainerCard className="container-fluid p-4 mb-5 rounded">
              <div className="row AddedReq">
                <div className="fontBold d-inline w-auto">Added Requirements - 05 </div>
                <Image src={"/edit.svg"} width={20} height={20} alt="" />
              </div>
              <div className="Rectangle-4035">Build website</div>
              <div className="Rectangle-4035">Build blogging site</div>
              <div className="Rectangle-4035">Post blogs site</div>
              <div className="Rectangle-4035">Post blogs and track traffic</div>
              <div className="Rectangle-4035">Host a forum</div>
              <div className="Rectangle-4035">Supports SasS</div>
              <div className="viewMoreRequirements">
                <div className="d-inline-block p-2 fontBold">
                  View More
                </div>
                <div className="d-inline-block viewMoreChannels">
                  <Image src={"/roundBlue.png"} width={20} height={20} alt="round" />
                </div>
              </div>
            </ContainerCard>
            <ContainerCard className="container-fluid p-4 mb-5 rounded">

              <div className="row AddedReq">
                <div className="fontBold d-inline w-auto">Documents/Files/Links - 06 </div>
                <Image src={"/edit.svg"} width={20} height={20} alt="" />
              </div>
              <div className="Rectangle-40 mt-4">
                <div className="d-inline-block viewMoreChannels p-2">
                  <Image src={"/pdf.png"} width={20} height={20} alt="round" />
                </div>
                Quotation-Business Plan
                <span className="p-2 text-black-50">25 MB</span>
              </div>
              <div className="Rectangle-40 text-primary">
                <div className="d-inline-block viewMoreChannels p-2 ">
                  <Image src={"/doc.png"} width={20} height={20} alt="round" />
                </div>
                how-to-choose-headless-cms</div>
              <div className="viewMoreRequirements">
                <div className="d-inline-block p-2 fontBold">
                  View More
                </div>
                <div className="d-inline-block viewMoreChannels">
                  <Image src={"/roundBlue.png"} width={20} height={20} alt="round" />
                </div>
              </div>
            </ContainerCard>
          </div>
        </div>
      </div>
    </BuyingSpaceLayout>
  );
}

export default Channels;