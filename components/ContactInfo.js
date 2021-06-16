import React from 'react'
import SwiperSharedMedia from './carousel/SwiperSharedMedia'
import { useRouter } from 'next/router';

const contactData = [{
	id: 0,
	contact: "Emilia Asobi",
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
	contact: "Khasmir",
	lastSeen: "1 min ago",
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
	contact: "New User",
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
	contact: "Elon Musk",
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
	contact: "Poods",
	lastSeen: "1 min ago",
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
	contact: "Jojo",
	lastSeen: "1 min ago",
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

function ContactInfo({toggleContactInfo}) {
  const router = useRouter()
  let currentId = parseInt(router.asPath.substr(11,1))
  // if(isNaN(currentId))
  //  currentId = 0
  // let currentData = (contactData.filter(data => {return data.id == currentId}))

  let currentData = (contactData.filter(data => {return data.id == ((isNaN(currentId))? 0: currentId)}))

	return (
    currentData.map(data => (
      <div id="contact-info" className="pl-10 pr-10 pt-6" key={data.id}>
      <div className="contact-info__profile mb-10">
        <div className="contact-info__options flex justify-between items-center">
          <a className="cursor-pointer p-0" href="#">
            <i className="bi bi-gear-fill text-tertiary" />
          </a>
          <a className="cursor-pointer p-0" href="#" onClick={toggleContactInfo}>
            <i className="bi bi-x-circle-fill text-tertiary" />
          </a>
        </div>
        <div className="text-center">
          <div className="contact-info__profile__image inline-block mb-4 relative">
            <img className="contact-info__profile__img" src={data.image} alt="contact-info__profile__img" />
            <i className="bi bi-check-circle-fill absolute bottom-0" />
          </div>
          <h2 className="contact-info__profile__name text-c_dark text-base mb-2 font-medium leading-4">{data.contact}</h2>
          <p className="contact-info__profile__title mb-0 text-c_gray leading-4">{data.title}</p>
        </div>
      </div>
      <div className="contact-info__shared-media mb-10">
        <div className="contact-info__options flex justify-between items-center mb-4">
          <h2 className="contact-info__profile__name text-c_dark text-base mb-0 font-medium leading-4">Shared Media</h2>
          <a className="text-c_dark" href="#">See All</a>
        </div>
        <div>
          <div className="swiper-container">
            <SwiperSharedMedia></SwiperSharedMedia>
          </div>
        </div>
      </div>
      <div className="contact-info__shared-link mb-4">
        <div className="contact-info__options flex justify-between items-center mb-4">
          <h2 className="contact-info__profile__name text-c_dark text-base mb-0 font-medium leading-4">Shared Link</h2>
          <a className="text-c_dark" href="#">See All</a>
        </div>
        <div className="contact-info__shared-link__items w-full">
          <a href="#" className="shared-link__item flex items-center mb-4">
            <div className="shared-link__item__image mr-2">
              <img className="shared-link__item__img" src="/img/link-icon.png" alt="contact-avatar-img" />
            </div>
            <div className="shared-link__item__content w-full">
              <div className="flex justify-between">
                <p className="shared-link__item__name text-c_dark text-base mb-2 leading-4">UI-Kit Download</p>
                <p className="mb-2 text-base text-c_gray leading-4">12:24</p>
              </div>
              <p className="mb-0 text-c_gray leading-4">https://drinnnle.com/shots...</p>
            </div>
          </a>
          <a href="#" className="shared-link__item flex items-center mb-4">
            <div className="shared-link__item__image mr-2">
              <img className="shared-link__item__img" src="/img/link-icon.png" alt="contact-avatar-img" />
            </div>
            <div className="shared-link__item__content w-full">
              <div className="flex justify-between">
                <p className="shared-link__item__name text-c_dark text-base mb-2 leading-4">UI-Kit Download</p>
                <p className="mb-2 text-base text-c_gray leading-4">12:24</p>
              </div>
              <p className="mb-0 text-c_gray leading-4">https://drinnnle.com/shots...</p>
            </div>
          </a>
          <a href="#" className="shared-link__item flex items-center mb-4">
            <div className="shared-link__item__image mr-2">
              <img className="shared-link__item__img" src="/img/link-icon.png" alt="contact-avatar-img" />
            </div>
            <div className="shared-link__item__content w-full">
              <div className="flex justify-between">
                <p className="shared-link__item__name text-c_dark text-base mb-2 leading-4">UI-Kit Download</p>
                <p className="mb-2 text-base text-c_gray leading-4">12:24</p>
              </div>
              <p className="mb-0 text-c_gray leading-4">https://drinnnle.com/shots...</p>
            </div>
          </a>
        </div>
      </div>
      <div className="contact-info__ad flex justify-center items-center mt-1">
        <div className="go-pro__image">
          <img className="go-pro__img" src="./img/go-pro.png" alt="go-pro image" />
        </div>
      </div>
    </div>
    ))
	)
}

export default ContactInfo