import React, { useEffect , useState } from 'react'
import DropdownConversation from './Dropdown/DropdownConversation'
import DropdownMessage from './Dropdown/DropdownMessage'
import { useRouter } from 'next/router';
import LoaderConversation from './common/LoaderConversation'
import Loader from 'react-loader-spinner';

const contactData = [{
	id: 0,
	name: "Emilia Asobi",
	lastSeen: "recently",
	messages: [{
		id: 0,
    type: "received",
		message: "Konnichiwa!",
		time: "04:52",
    unixTime: 1623850206,
  },{
		id: 1,
    type: "sent",
		message: "I love Emilia",
		time: "05:12",
    unixTime: 1623850208,
  },{
    id: 2,
    type: "received",
    message: "Baka!",
    time: "05:12",
    unixTime: 1623850208,
  }],
	image: "/img/users/contact-avatar.jpg",
	notif: "1",
  title: "Nurse",
  active: true,
	},{
	id: 1,
	name: "Khasmir",
	lastSeen: "5 mins ago",
	messages: [{
    id: 0,
    type: "received",
		message: "I really like this work!",
		time: "12:52",
    unixTime: 1623850206,
  },{
    id: 1,
    type: "sent",
		message: "Are you sure about that?",
		time: "12:53",
    unixTime: 16238502010,
  },{
    id: 2,
    type: "received",
		message: "Hmmmm....",
		time: "12:53",
    unixTime: 16238502010,
  }],
	image: "/img/users/contact-avatar-1.jpg",
	notif: "1",
  title: "Student",
  active: true,
	},{
	id: 2,
	name: "New User",
	lastSeen: "1 min ago",
	messages: [{
    id: 0,
    type: "received",
		message: "Can I be your friend?",
		time: "01:22",
    unixTime: 1623850203,
  },{
    id: 1,
    type: "sent",
		message: "No.",
		time: "02:44",
    unixTime: 1623850206,
  },{
    id: 2,
    type: "received",
		message: "Okay,bye",
		time: "02:44",
    unixTime: 1623850206,
  }],
	image: "/img/users/contact-avatar-2.jpg",
	notif: "1",
  title: "Student",
  active: true,
	},{
	id: 3,
	name: "Elon Musk",
	lastSeen: "recently",
	messages: [{
		id: 0,
    type: "received",
		message: "I love space",
		time: "04:52",
    unixTime: 1623850201,
  },{
		id: 1,
    type: "sent",
		message: "Fly me to the moon",
		time: "05:12",
    unixTime: 1623850206,
  }],
	image: "/img/users/contact-avatar-3.jpg",
	notif: "1",
  title: "Professor",
  active: true,
	},{
	id: 4,
	name: "Poods",
	lastSeen: "an hour ago",
	messages: [{
    id: 0,
    type: "received",
		message: "Did you see Edgar?",
		time: "12:52",
    unixTime: 1623850202,
  },{
    id: 1,
    type: "sent",
		message: "Yes, he's with Marzia",
		time: "12:53",
    unixTime: 1623850208,
  },{
    id: 2,
    type: "received",
		message: "Dammit",
		time: "12:53",
    unixTime: 1623850208,
  }],
	image: "/img/users/contact-avatar-4.jpg",
	notif: "1",
  title: "Dean",
  active: true,
	},{
	id: 5,
	name: "Jojo",
	lastSeen: "a year ago",
	messages: [{
    id: 0,
    type: "sent",
		message: "Za Warudo! Mudamudamudamudamudamudamudamudamudamuda!",
		time: "01:22",
    unixTime: 1623850202,
  },{
    id: 1,
    type: "received",
		message: "Oraoraoraoraoraoraoraoraoraoraoraoraoraoraoraoraoraora!!",
		time: "02:44",
    unixTime: 1623850208,
  }],
	image: "/img/users/contact-avatar-5.jpg",
	notif: "1",
  title: "Student",
  active: true,
	}
];

function Conversation({toggleContactInfo}) {
  const router = useRouter()
  let currentId = parseInt(router.asPath.substr(11,1))
  let currentData = (contactData.filter(data => {return data.id == ((isNaN(currentId))? 0: currentId)}))

  const [loading, setLoading] = useState(true)

  useEffect(() => { 
    setLoading(true)
    setTimeout(()=>setLoading(false),2000)
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
            timeout={2000} 
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
