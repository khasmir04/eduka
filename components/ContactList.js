import React from 'react'
import RadioButtonInbox from './common/RadioButtonInbox'
import {useState} from "react"
import Link from 'next/link'
import router from 'next/router'
import PerfectScrollbar from 'react-perfect-scrollbar'

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
	lastSeen: "1 min ago",
	messages: [{
		message: "I really like this work",
		time: "12:52"},{
		message: "I really like this work",
		time: "12:53"}
	],
	image: "/img/users/contact-avatar-1.jpg",
	notif: "3",
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
	notif: "2",
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
	lastSeen: "1 min ago",
	messages: [{
		message: "Edgar!",
		time: "12:52"},{
		message: "I really like this work",
		time: "12:53"}
	],
	image: "/img/users/contact-avatar-4.jpg",
	notif: "6",
  title: "Dean",
  active: true,
	},{
	id: 5,
	name: "Jojo",
	lastSeen: "1 min ago",
	messages: [{
		message: "Oraoraoraoraora",
		time: "01:22"},{
		message: "Oraoraoraoraora",
		time: "02:44"}
	],
	image: "/img/users/contact-avatar-5.jpg",
	notif: "9",
  title: "Student",
  active: true,
	}
];

function ContactList() {
	let [activeContact, setActiveContact] = useState('0')

	// change useState initialization to id of latest message

	const setItem = (id) => {
		router.push('/chat/?user=' + id, undefined, { shallow: true })
		setActiveContact(id)
	}

	// Link key={convo.id} href="#"
	// replaced Link with div temp

	return (
		<div id="contacts" className="border-r-2 border-c_light">
			<div className="contacts__header p-6">
				<div className="contacts__header__inbox flex justify-between items-center mb-4">
					<div className="flex items-center">
						<i className="bi bi-envelope-fill inline md:hidden text-tertiary text-2xl leading-normal"></i>
						<p className="hidden md:block font-bold mr-2">Inbox</p>
						<p className="notif-inbox cursor-pointer bg-tag rad rad-circle md:hidden text-secondary pe-2 ps-2 mb-0 mr-1 pt-0 pb-0 border-0 text-nowrap">4</p>
						<p className="rounded-xl bg-red-100 p-2 hidden md:inline text-secondary pt-1 pe-2 pb-1 ps-2 mb-0 text-nowrap">4 New</p>
					</div>
					<i className="bi bi-plus-circle-fill cursor-pointer text-primary text-xl md:text-4xl p-0 border-0 leading-4"></i>
				</div>
				<RadioButtonInbox></RadioButtonInbox>
			</div>
			<PerfectScrollbar className="!h-[calc(100vh-256px)]">
				<div className="contacts__content">
					{contactData.map((convo) => (
						<div key={convo.id}>
							<div  className={'contacts__conversation cursor-pointer border-t-2 border-c_light hover:bg-c_gray-light p-6 flex items-center justify-center lg:justify-between ' + (activeContact==convo.id ? 'active' : null)}
							onClick={() => setItem(convo.id)}>
								<div className="flex items-center">
								<div className="contact__avatar__image mr-0 lg:mr-2">
									<img className="contact__avatar__img" src={convo.image} alt="contact-avatar-img"/>
								</div>
								<div className="contact__avatar__content hidden lg:block">
									<h2 className="contact__avatar__name text-c_dark text-base mb-2 leading-4 font-medium">{convo.name}</h2>
									<p className="mb-0 text-c_gray leading-4">{convo.messages.slice(-1)[0].message}</p>
								</div>
								</div>
								<div className="contact__time-stamp hidden lg:block">
								<p className="mb-2 text-base text-c_gray leading-4">{convo.messages.slice(-1)[0].time}</p>
								<p className="mb-0 text-base text-c_gray leading-4 text-right"><span className="notif active">{convo.notif}</span></p>
								</div>
							</div>
						</div>
					))}
				</div>
			</PerfectScrollbar>
		</div>
	)
}

export default ContactList
