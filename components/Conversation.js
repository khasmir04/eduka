import React from 'react'
import DropdownConversation from './Dropdown/DropdownConversation'
import DropdownMessage from './Dropdown/DropdownMessage'
import { useRouter } from 'next/router';

const contactData = [{
	id: 0,
	name: "Emilia Asobi",
	lastSeen: "recently",
	messages: [{
		type: "received",
		message: "I really like this work",
		time: "04:52"},{
		type: "sent",
		message: "Last message",
		time: "05:12"}
	],
	image: "/img/users/contact-avatar.jpg",
	notif: "1",
  title: "Nurse",
  active: true,
	},{
	id: 1,
	name: "Khasmir",
	lastSeen: "5 mins ago",
	messages: [{
		message: "I really like this work",
		time: "12:52"},{
		message: "I really like this work",
		time: "12:53"}
	],
	image: "/img/users/contact-avatar-1.jpg",
	notif: "1",
  title: "Student",
  active: true,
	},{
	id: 2,
	name: "New User",
	lastSeen: "1 min ago",
	messages: [{
		message: "Lalallalala!!",
		time: "01:22"},{
		message: "Can I be your friend?",
		time: "02:44"}
	],
	image: "/img/users/contact-avatar-2.jpg",
	notif: "1",
  title: "Student",
  active: true,
	},{
	id: 3,
	name: "Elon Musk",
	lastSeen: "recently",
	messages: [{
		type: "received",
		message: "I love space",
		time: "04:52"},{
		type: "sent",
		message: "Last message",
		time: "05:12"}
	],
	image: "/img/users/contact-avatar-3.jpg",
	notif: "1",
  title: "Professor",
  active: true,
	},{
	id: 4,
	name: "Poods",
	lastSeen: "an hour ago",
	messages: [{
		message: "Edgar!",
		time: "12:52"},{
		message: "I really like this work",
		time: "12:53"}
	],
	image: "/img/users/contact-avatar-4.jpg",
	notif: "1",
  title: "Dean",
  active: true,
	},{
	id: 5,
	name: "Jojo",
	lastSeen: "a year ago",
	messages: [{
		message: "Oraoraoraoraora",
		time: "01:22"},{
		message: "Oraoraoraoraora",
		time: "02:44"}
	],
	image: "/img/users/contact-avatar-5.jpg",
	notif: "1",
  title: "Student",
  active: true,
	}
];

function Conversation({toggleContactInfo}) {
  const router = useRouter()
  let currentId = parseInt(router.asPath.substr(11,1))
  // if(isNaN(currentId))
  //  currentId = 0
  // let currentData = (contactData.filter(data => {return data.id == currentId}))

  let currentData = (contactData.filter(data => {return data.id == ((isNaN(currentId))? 0: currentId)}))

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
          <div className="messages__reply">
            <div className="reply__image mr-2">
            <img className="reply__img" src="/img/profile-avatar.png" alt="profile-avatar" />
            </div>
            <div>
            <h2 className="text-c_dark font-medium">Emilia Asobi</h2>
            <div className="reply__content">
              <p className="message">let's find the right date to 
              discuss it.</p>
              <p className="time-stamp">08:13</p>
            </div>
            </div>
          </div>
          <div className="messages__sent">
            <div className="sent__content">
            <p className="message">How about on 18th June 2021 at 
              Mr. Abdul's coffee cafe.</p>
            <p className="time-stamp">08:13</p>
            </div>
          </div>
          <div className="messages__reply">
            <div className="reply__image mr-2">
            <img className="reply__img" src="./img/profile-avatar.png" alt="profile-avatar" />
            </div>
            <div>
            <h2 className="text-c_dark font-medium">Emilia Asobi</h2>
            <div className="reply__content">
              <p className="message">Would you like to chat about our product?</p>
              <p className="time-stamp">08:13</p>
            </div>
            </div>
          </div>
          <div className="messages__sent">
            <div className="sent__content">
            <p className="message">Yeah sure, let's do it.</p>
            <p className="time-stamp">08:13</p>
            </div>
          </div>
          {/* <div className="messages__reply">
            <div className="reply__image mr-2">
            <img className="reply__img" src="./img/profile-avatar.png" alt="profile-avatar" />
            </div>
            <div>
            <h2 className="text-c_dark font-medium">Emilia Asobi</h2>
            <div className="reply__content">
              <p className="message">let's find the right date to 
              discuss it.</p>
              <p className="time-stamp">08:13</p>
            </div>
            </div>
          </div>
          <div className="messages__sent">
            <div className="sent__content">
            <p className="message">How about on 18th June 2021 at 
              Mr. Abdul's coffee cafe.</p>
            <p className="time-stamp">08:13</p>
            </div>
          </div>
          <div className="messages__reply">
            <div className="reply__image mr-2">
            <img className="reply__img" src="./img/profile-avatar.png" alt="profile-avatar" />
            </div>
            <div>
            <h2 className="text-c_dark font-medium">Emilia Asobi</h2>
            <div className="reply__content">
              <p className="message">Would you like to chat about our product?</p>
              <p className="time-stamp">08:13</p>
            </div>
            </div>
          </div>
          <div className="messages__sent">
            <div className="sent__content">
            <p className="message">Yeah sure, let's do it.</p>
            <p className="time-stamp">08:13</p>
            </div>
          </div> */}
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
