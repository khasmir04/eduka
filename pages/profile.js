import {useState} from "react"
import Head from 'next/head'
import Sidebar from "../components/Sidebar"
import Header from "../components/Header"
import RadioButton from "../components/RadioButton"
import Conversation from "../components/Conversation"
import ContactInfo from "../components/ContactInfo"

function profile() {
  const [results, setResults] = useState(false)
  
  function clickAlert(){
    setResults(!results)
  }
  
  return (
    <div>
      <Head>
        <title>Edu | Profile</title>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
        <link rel="stylesheet" href="https://unpkg.com/simplebar@latest/dist/simplebar.css" />
      </Head>
      <Header toggleSidebar={clickAlert}>
      </Header>
      <Sidebar isVisible={results}>
      </Sidebar>
      <section id="inbox">
        <div className="inbox-container h-full">
          <div className="flex flex-wrap h-full">
            <div className="w-3/12 h-full p-0 overflow-hidden">
              <div id="contacts" className="border-r-2 border-c_light">
                <div className="contacts__header p-6">
                  <div className="contacts__header__inbox flex justify-between items-center mb-4">
                    <div className="flex items-center">
                      <i className="bi bi-envelope-fill inline md:hidden text-tertiary text-2xl leading-normal"></i>
                      <p className="hidden md:block font-bold mr-2">Inbox</p>
                      <p className="notif-inbox btn bg-tag rad rad-circle md:hidden text-secondary pe-2 ps-2 mb-0 mr-1 pt-0 pb-0 border-0 text-nowrap">4</p>
                      <p className="rounded-xl bg-red-100 p-2 hidden md:inline text-secondary pt-1 pe-2 pb-1 ps-2 mb-0 text-nowrap">4 New</p>
                    </div>
                    <i className="bi bi-plus-circle-fill btn text-primary text-xl md:text-4xl p-0 border-0 leading-4"></i>
                  </div>
                  <RadioButton></RadioButton>
                </div>
                <div className="contacts__content">
                    <a href="#" className="contacts__conversation border-t-2 border-c_light hover:bg-c_gray-light p-6 flex items-center justify-center lg:justify-between">
                      <div className="flex items-center">
                        <div className="contact__avatar__image mr-0 lg:mr-2">
                          <img className="contact__avatar__img" src="/img/contact-avatar.png" alt="contact-avatar-img"/>
                        </div>
                        <div className="contact__avatar__content hidden lg:block">
                          <h2 className="contact__avatar__name text-c_dark text-base mb-2 leading-4 font-medium">Richard Kimberly</h2>
                          <p className="mb-0 text-c_gray leading-4">I really like this work</p>
                        </div>
                      </div>
                      <div className="contact__time-stamp hidden lg:block">
                        <p className="mb-2 text-base text-c_gray leading-4">08:13</p>
                        <p className="mb-0 text-base text-c_gray leading-4 text-right"><span className="notif active">1</span></p>
                      </div>
                    </a>
                    <a href="#" className="contacts__conversation border-t-2 border-c_light hover:bg-c_gray-light p-6 flex items-center justify-center lg:justify-between">
                      <div className="flex items-center">
                        <div className="contact__avatar__image mr-0 lg:mr-2">
                          <img className="contact__avatar__img" src="/img/contact-avatar.png" alt="contact-avatar-img"/>
                        </div>
                        <div className="contact__avatar__content hidden lg:block">
                          <h2 className="contact__avatar__name text-c_dark text-base mb-2 leading-4 font-medium">Richard Kimberly</h2>
                          <p className="mb-0 text-c_gray leading-4">I really like this work</p>
                        </div>
                      </div>
                      <div className="contact__time-stamp hidden lg:block">
                        <p className="mb-2 text-base text-c_gray leading-4">08:13</p>
                        <p className="mb-0 text-base text-c_gray leading-4 text-right"><span className="notif active">1</span></p>
                      </div>
                    </a>
                    <a href="#" className="contacts__conversation border-t-2 border-c_light hover:bg-c_gray-light p-6 flex items-center justify-center lg:justify-between">
                      <div className="flex items-center">
                        <div className="contact__avatar__image mr-0 lg:mr-2">
                          <img className="contact__avatar__img" src="/img/contact-avatar.png" alt="contact-avatar-img"/>
                        </div>
                        <div className="contact__avatar__content hidden lg:block">
                          <h2 className="contact__avatar__name text-c_dark text-base mb-2 leading-4 font-medium">Richard Kimberly</h2>
                          <p className="mb-0 text-c_gray leading-4">I really like this work</p>
                        </div>
                      </div>
                      <div className="contact__time-stamp hidden lg:block">
                        <p className="mb-2 text-base text-c_gray leading-4">08:13</p>
                        <p className="mb-0 text-base text-c_gray leading-4 text-right"><span className="notif active">1</span></p>
                      </div>
                    </a>
                    <a href="#" className="contacts__conversation border-t-2 border-c_light hover:bg-c_gray-light p-6 flex items-center justify-center lg:justify-between">
                      <div className="flex items-center">
                        <div className="contact__avatar__image mr-0 lg:mr-2">
                          <img className="contact__avatar__img" src="/img/contact-avatar.png" alt="contact-avatar-img"/>
                        </div>
                        <div className="contact__avatar__content hidden lg:block">
                          <h2 className="contact__avatar__name text-c_dark text-base mb-2 leading-4 font-medium">Richard Kimberly</h2>
                          <p className="mb-0 text-c_gray leading-4">I really like this work</p>
                        </div>
                      </div>
                      <div className="contact__time-stamp hidden lg:block">
                        <p className="mb-2 text-base text-c_gray leading-4">08:13</p>
                        <p className="mb-0 text-base text-c_gray leading-4 text-right"><span className="notif active">1</span></p>
                      </div>
                    </a>
                    <a href="#" className="contacts__conversation border-t-2 border-c_light hover:bg-c_gray-light p-6 flex items-center justify-center lg:justify-between">
                      <div className="flex items-center">
                        <div className="contact__avatar__image mr-0 lg:mr-2">
                          <img className="contact__avatar__img" src="/img/contact-avatar.png" alt="contact-avatar-img"/>
                        </div>
                        <div className="contact__avatar__content hidden lg:block">
                          <h2 className="contact__avatar__name text-c_dark text-base mb-2 leading-4 font-medium">Richard Kimberly</h2>
                          <p className="mb-0 text-c_gray leading-4">I really like this work</p>
                        </div>
                      </div>
                      <div className="contact__time-stamp hidden lg:block">
                        <p className="mb-2 text-base text-c_gray leading-4">08:13</p>
                        <p className="mb-0 text-base text-c_gray leading-4 text-right"><span className="notif active">1</span></p>
                      </div>
                    </a>
                    <a href="#" className="contacts__conversation border-t-2 border-c_light hover:bg-c_gray-light p-6 flex items-center justify-center lg:justify-between">
                      <div className="flex items-center">
                        <div className="contact__avatar__image mr-0 lg:mr-2">
                          <img className="contact__avatar__img" src="/img/contact-avatar.png" alt="contact-avatar-img"/>
                        </div>
                        <div className="contact__avatar__content hidden lg:block">
                          <h2 className="contact__avatar__name text-c_dark text-base mb-2 leading-4 font-medium">Richard Kimberly</h2>
                          <p className="mb-0 text-c_gray leading-4">I really like this work</p>
                        </div>
                      </div>
                      <div className="contact__time-stamp hidden lg:block">
                        <p className="mb-2 text-base text-c_gray leading-4">08:13</p>
                        <p className="mb-0 text-base text-c_gray leading-4 text-right"><span className="notif active">1</span></p>
                      </div>
                    </a>
                    <a href="#" className="contacts__conversation border-t-2 border-c_light hover:bg-c_gray-light p-6 flex items-center justify-center lg:justify-between">
                      <div className="flex items-center">
                        <div className="contact__avatar__image mr-0 lg:mr-2">
                          <img className="contact__avatar__img" src="/img/contact-avatar.png" alt="contact-avatar-img"/>
                        </div>
                        <div className="contact__avatar__content hidden lg:block">
                          <h2 className="contact__avatar__name text-c_dark text-base mb-2 leading-4 font-medium">Richard Kimberly</h2>
                          <p className="mb-0 text-c_gray leading-4">I really like this work</p>
                        </div>
                      </div>
                      <div className="contact__time-stamp hidden lg:block">
                        <p className="mb-2 text-base text-c_gray leading-4">08:13</p>
                        <p className="mb-0 text-base text-c_gray leading-4 text-right"><span className="notif active">1</span></p>
                      </div>
                    </a>
                </div>
              </div>
            </div>
            <div className="flex-1 lg:w-6/12 h-full p-0 border-r-2 border-c_light" id="visible-scroll">
              <Conversation></Conversation>
            </div>
            <div className="w-3/12 hidden lg:block h-full p-0 border-r-2 border-c_light">
              <ContactInfo></ContactInfo>
            </div>
          </div>
        </div>
      </section>
      <script src="https://unpkg.com/simplebar@latest/dist/simplebar.min.js"></script>
    </div>
  )
}

export default profile
