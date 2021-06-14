import React from 'react'
import DropdownConversation from './DropdownConversation'
import DropdownMessage from './DropdownMessage'

const conversation_data = [{
		contact: "Emila Asobi",
		lastSeen: "recently",
		messages: [{
			message: "Would you like to chat about our product?",
			time: "04:52"},{
			message: "let's find the right date to discuss it.",
			time: "05:12"}
		],
	},{
		contact: "Khasmir",
		lastSeen: "1 min ago",
		messages: [{
			message: "Testing message",
			time: "12:52"},{
			message: "It worked.",
			time: "12:53"}
		],
	}
];

function Conversation() {
	return (
		<div id="conversation" className="conversation relative">
			<div className="conversation__header flex items-center justify-between w-full">
			<div className="flex p-4">
				<div className="conversation__header__image mr-4">
				<img className="conversation__header__img" src="/img/profile-avatar.png" alt="org-avatar-image" />
				</div>
				<div>
				<h2 className="m-0 text-base text-c_dark font-medium">Emilia Asobi</h2>
				<p className="m-0 text-base text-c_gray">Last seen recently</p>
				</div>
			</div>
			<DropdownConversation></DropdownConversation>
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
	)
}

export default Conversation
