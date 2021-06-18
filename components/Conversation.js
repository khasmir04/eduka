import React, { useEffect , useState } from 'react'
import DropdownConversation from './dropdown/DropdownConversation'
import DropdownMessage from './dropdown/DropdownMessage'
import { useRouter } from 'next/router';
import LoaderConversation from './common/LoaderConversation'
import Loader from 'react-loader-spinner';
import userData from '../pages/api/userData.json'

function Conversation({toggleContactInfo}) {
  const router = useRouter()
  let currentId = parseInt(router.asPath.substr(11,1))
  let currentData = (userData.filter(data => {return data.id == ((isNaN(currentId))? 0: currentId)}))

  const [loading, setLoading] = useState(true)

  useEffect(() => { 
    setLoading(true)
    setTimeout(()=>setLoading(false),1500)
  }, [currentId])

	return (
		currentData.map(data => (
      <div id="conversation" className="conversation relative" key={data.id}>
        <div className="conversation__header flex items-center justify-between w-full">
        <div className="flex p-4">
          <div className="conversation__header__image mr-4">
          <img className="conversation__header__img" src={data.image} alt="org-avatar-image" />
          </div>
          <div>
          <h2 className="m-0 text-base text-c_dark font-medium">{data.name}</h2>
          <p className="m-0 text-base text-c_gray">{'Last seen ' + data.lastSeen}</p>
          </div>
        </div>
        <div className="flex items-center">
          <i className="bi bi-info-circle text-tertiary mr-2 cursor-pointer" onClick={toggleContactInfo}></i>
          <DropdownConversation></DropdownConversation>
        </div>
        </div>
        <div className="conversation__messages flex flex-col h-full w-full p-4 pl-6 pr-6 bg-c_gray-light">
          {(loading) ? 
          <div className="w-full h-full flex items-center justify-center">
            <Loader 
            type="Oval"
            color="#fb2b76"
            height={100}
            width={100}
            timeout={1500} 
          /> 
          </div>
          : 
          data.messages.map(msg => {
            return (msg.type == "received") ? 
            <div className="messages__reply" key={data.id+msg.id}>
              <div className="reply__image mr-2">
              <img className="reply__img" src={data.image} alt="profile-avatar" />
              </div>
              <div>
              <h2 className="text-c_dark font-medium">{data.name}</h2>
              <div className="reply__content">
                <p className="message break-all">{msg.message}</p>
                <p className="time-stamp">{msg.time}</p>
              </div>
              </div>
            </div>
            :
            <div className="messages__sent" key={data.id+msg.id}>
            <div className="sent__content">
            <p className="message break-all">{msg.message}</p>
            <p className="time-stamp">{msg.time}</p>
            </div>
          </div>
          })
          }
          {/* {data.messages.map(msg => {
            return (msg.type == "received") ? 
            <div className="messages__reply" key={data.id+msg.id}>
              <div className="reply__image mr-2">
              <img className="reply__img" src={data.image} alt="profile-avatar" />
              </div>
              <div>
              <h2 className="text-c_dark font-medium">{data.name}</h2>
              <div className="reply__content">
                <p className="message break-all">{msg.message}</p>
                <p className="time-stamp">{msg.time}</p>
              </div>
              </div>
            </div>
            :
            <div className="messages__sent" key={data.id+msg.id}>
            <div className="sent__content">
            <p className="message break-all">{msg.message}</p>
            <p className="time-stamp">{msg.time}</p>
            </div>
          </div>
          })} */}
        </div>
        <div className="conversation__input flex items-center w-full absolute bottom-0 flex-nowrap">
          <div className="w-1/12 ps-3 flex justify-center">
            <i className="bi bi-folder-fill text-tertiary text-base" />
          </div>
          <div className="w-9/12 input__message">
            <div className="border-0">
            <input className="w-full border-0 text-base outline-none focus:outline-none focus:ring" type="text" placeholder="Write a message..." aria-label="Write a message..." aria-describedby="input__message__text" /></div>
          </div>
          <div className="w-2/12 input__send flex justify-end items-center">
            <DropdownMessage></DropdownMessage>
            <i className="bi bi-arrow-right-circle-fill btn text-2xl text-primary pr-4" />
          </div>
        </div>
		  </div>
    ))
	)
}

export default Conversation
