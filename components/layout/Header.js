import React from "react";
import DropdownUser from '../dropdown/DropdownUser';
import DropdownOrg from '../dropdown/DropdownOrg';

const userInfo = [{
  id: "1",
  name: "Khasmir",
  image: "/img/users/contact-avatar-1.jpg",
  org: [{
    name: "BIT41",
    email: "it@eduka.com"
  }]
}]

function Header({toggleSidebar,toggleUpload}) {
  return (
    userInfo.map((data) => (
      <div key={data.id}>
        <header id="header" className="border-b-2 border-c_light relative">
            <div className="container-fluid header-container p-4">
                <div className="flex items-center">
                    <div>
                        <div className="flex items-center">
                        <div id="header__avatar__image" className="header__avatar__image mr-4 xl:pointer-events-none " onClick={toggleSidebar}>
                            <img className="header__avatar__img" src="/img/org-avatar.png" alt="org-avatar-image"/>
                        </div>
                        <div className="hidden md:flex flex-col justify-center mr-2">
                            <h2 className="m-0 text-base font-medium ">{data.org.map(n=> n.name)}</h2>
                            <p className="m-0 text-base text-c_gray">{data.org.map(n=> n.email)}</p>
                        </div>
                        <DropdownOrg></DropdownOrg>
                        </div>
                    </div>
                    <div className="hidden xl:block ml-10">
                        <div>
                        <p className="m-0 font-medium">Message</p>
                        <p className="m-0 text-base text-c_gray whitespace-nowrap ">Send your friends a message</p>
                        </div>
                    </div>
                    <div className="header__search m-auto">
                        <div className="flex-nowrap">
                            <span className="z-10 leading-snug font-normal absolute text-center text-text-c_gray absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                                <i className="bi bi-search text-base text-c_gray"></i>
                            </span>
                            <input type="text" placeholder="Search" className="px-3 py-3 placeholder-text-c_gray text-blueGray-600 relative bg-c_light rounded text-base border-0 outline-none focus:outline-none focus:ring w-full pl-10"/>
                        </div>
                    </div>

                    <div className="flex justify-end ms-auto">
                        <div className="flex items-center">
                            <i className="bi bi-bell-fill text-lg mr-6 text-tertiary"></i>
                            <div className="user__avatar__image mr-2">
                                <img className="user__avatar__img cursor-pointer" src={data.image} alt="user-avatar-img" onClick={toggleUpload} />
                            </div>
                            <DropdownUser></DropdownUser>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
    ))
  )
}

export default Header
