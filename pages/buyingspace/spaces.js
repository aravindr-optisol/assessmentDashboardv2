import BuyingSpaceLayout from '../../src/components/Layouts/BuyingSpaceLayout'
import ContainerCard from "../../src/components/Container/ContainerCard";
import Image from 'next/image'
import { Fragment } from 'react/cjs/react.production.min';
const Spaces = () => {
  const CardComponent = (props) => {
    return (
      <div className=" shadow-sm p-4 mb-5 bg-white rounded spacesWidth">
        {props.children}
      </div>
    )
  }

let SpaceContent=[{
  title:'Stakeholder',
  view_type:'Add New',
  edit_type:true,
  sub_content_msg:'Stakeholders added',
  sub_content:["/a2.png","/a3.png"],
  sub_content_empty:""
},
{
  title:'Requirements',
  view_type:'Add New',
  sub_content_msg:'There are no requirements added',
  sub_content:[],
  sub_content_empty:""
},
{
  title:'Shortlisted Vendors',
  view_type:'Shortlist More',
  sub_content_msg:'Vendors added',
  edit_type:true,
  sub_content:["/kento.png","/wordPress.png","/ghost.png"],
  sub_content_empty:""
},
{
  title:'Evaluate & Score',
  view_type:'Edit',
  sub_content_msg:'Evaluation In Progress',
  sub_content:[],
  sub_content_empty:""

},
{
  title:'Request Quote',
  view_type:'View',
  sub_content_msg:'Quotes Received',
  sub_content:["/pdf.png","/word.png"],
  sub_content_empty:""
},]
return (
<BuyingSpaceLayout>
      <div className="container-fluid p-2">
<ContainerCard className="row p-3 mb-5 rounded ChannelsLeft">
<div className='col-md-12 '>
            <span className='buySpaceTitle'>
              Buying Spaces
            </span>
            <span className='buySpaceDesc'>- Content Management System</span>
</div>
{/*  */}
<div className='row'>
          <div className='col-md-12 '>
            {/* card 1 start */}
            {
              SpaceContent.map((data)=>{
                return(
                  <CardComponent>
                  <div className="row AddedReq">
                    <div className="fontBold d-inline w-auto">{data.title}</div>
                    {data.edit_type ? <Image src={"/edit.svg"} width={20} height={20} alt="" /> : ""}
                  </div>
                  <div className="viewMoreRequirements">
                    <div className="d-inline-block p-2 fontBold">
                      {data.view_type}
                    </div>
                    <div className="d-inline-block viewMoreChannels">
                      {
                        data.view_type==="Add New" ?
                        <Image src={"/plus.png"} width={20} height={20} alt="round" />
                        :
                        <Image src={"/roundBlue.png"} width={20} height={20} alt="round" />
                      }
                      
                    </div>
                  </div>
                  <hr />
                  <div className="mt-4 spaceCard">
                    <span>
                      
                      <span className='fontColorGrey'>
                      {
                      !data.sub_content.length && 
                      <span>
                        <Image src={"/folder.png"} width={40} height={40} alt="round" className='p-1' /> 
                      </span>  
                      
                      } 
                        <span className='fontBold'>
                      {
                        data.sub_content.length >=1 ?  
                        data.sub_content.length <10 ?
                        `0${data.sub_content.length} `
                        : 
                        `${data.sub_content.length} `
                        :""
                      }
                                                
                    </span>
                        {data.sub_content_msg}
                      </span>
                      {
                        data.sub_content.length ? <Image src={"/tick.svg"} width={20} height={20} alt="round" /> : ""

                      }
                      
                    </span>
                  </div>
                  {
                    Array.isArray(data.sub_content)&& data.sub_content.length?
                    data.sub_content.map((data)=>{
                      return(<Image src={data} width={40} height={40} alt="round" />)
                    })
                    :
                    <br/>
                  }
                </CardComponent>
                )
              })
            }
          </div>
        </div>
</ContainerCard>
      </div>
    </BuyingSpaceLayout>
  );
}

export default Spaces;