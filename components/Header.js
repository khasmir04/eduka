import React, { useState } from "react";
import Image from 'next/image';
import Dropdown from './DropdownOrg';
import DropdownR from './DropdownUser';

function Header({toggleSidebar}) {
     return (
        <div>
            <header id="header" className="border border-r-1 border-c_light relative">
                <div className="container-fluid header-container p-4">
                    <div className="flex items-center">
                        <div>
                            <div className="flex items-center">
                            <div id="header__avatar__image" className="header__avatar__image mr-4" onClick={toggleSidebar}>
                                <Image className="header__avatar__img" src="/img/org-avatar.png" alt="org-avatar-image" width="48" height="48"/>
                            </div>
                            <div className="hidden md:flex flex-col justify-center mr-2">
                                <h2 className="m-0 text-base font-medium ">Team UI</h2>
                                <p className="m-0 text-base text-black text-c_gray">team@dimo.com</p>
                            </div>
                            {/* <div className="dropdown">
                                <i className="bi bi-chevron-down text-base leading-6 text-tertiary btn" type="button" id="dropdownOrg" data-bs-toggle="dropdown" aria-expanded="false"></i>
                                <ul className="dropdown-menu right-0 left-auto" aria-labelledby="dropdownOrg">
                                <li><a className="dropdown-item" href="#">Team UX</a></li>
                                <li><a className="dropdown-item" href="#">Team QA</a></li>
                                <li><a className="dropdown-item" href="#">Team Developer</a></li>
                                </ul>
                            </div> */}
                            <DropdownR></DropdownR>
                            </div>
                        </div>
                        <div className="hidden xl:block ml-10">
                            <div>
                            <p className="m-0 font-medium">Message</p>
                            <p className="m-0 text-base text-black text-c_gray whitespace-nowrap ">Send your friends a message</p>
                            </div>
                        </div>
                        {/* <div className="header__search m-auto">
                            <div className="input-group flex-nowrap">
                            <span className="input-group-text bg-c-light border-0" id="header__search__text">
                                <i className="bi bi-search text-base"></i>
                            </span>
                            <input className="form-control bg-c-light border-0 text-base" type="text" placeholder="Search something here..." aria-label="Search something here..." aria-describedby="header__search__text">
                            </input>
                            </div>
                        </div> */}

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
                                    <Image className="user__avatar__img" src="/img/user-avatar.png" alt="user-avatar-img" width="40" height="40"/>
                                </div>
                                {/* <div className="dropdown">
                                    <i className="bi bi-chevron-down text-base leading-6 text-tertiary btn pr-0" type="button" id="dropdownUser" data-bs-toggle="dropdown" aria-expanded="false"></i>
                                    <ul className="dropdown-menu right-0 left-auto" aria-labelledby="dropdownUser">
                                    <li><a className="dropdown-item" href="#">Settings</a></li>
                                    <li><a className="dropdown-item" href="#">Logout</a></li>
                                    </ul>
                                </div> */}
                                <Dropdown></Dropdown>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header
