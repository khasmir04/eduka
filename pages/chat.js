import {useState} from "react"
import Head from 'next/head'
import PerfectScrollbar from 'react-perfect-scrollbar'

import Sidebar from "../components/layout/Sidebar"
import Header from "../components/layout/Header"
import Conversation from "../components/Conversation"
import ContactInfo from "../components/ContactInfo"
import ContactList from "../components/ContactList"
import ImageViewer from "../components/modal/ImageViewer"

function chat() {
  const [sidebar, setSidebar] = useState(false)
  const [viewImage, setViewImage] = useState(false)
  const [contactInfo, setContactInfo] = useState(true)

  function toggleSidebar(){
    setSidebar(!sidebar)
  }

  function toggleImage(){
    setViewImage(!viewImage)
  }

  function toggleContactInfo(){
    setContactInfo(!contactInfo)
  }

  return (
    <div className="relative">
      <Head>
        <title>EduKa | Chat</title>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
      </Head>
      <Header toggleSidebar={toggleSidebar}>
      </Header>
      <Sidebar isVisible={sidebar}>
      </Sidebar>
      <section id="inbox">
        <div className="inbox-container h-full">
          <div className="flex flex-wrap h-full">
            <div className="w-auto lg:w-3/12 h-full p-0 overflow-hidden">
              <ContactList></ContactList>
            </div>
            <div className="flex-1 lg:w-6/12 h-full p-0 border-r-2 border-c_light" id="visible-scroll">
                <Conversation toggleContactInfo={toggleContactInfo}></Conversation>
            </div>
            <div className={'w-3/12 hidden h-full p-0 border-r-2 border-c_light ' + (contactInfo ? 'lg:block' : 'lg:hidden')}>
              <PerfectScrollbar>
                <ContactInfo toggleContactInfo={toggleContactInfo} toggleImage={toggleImage}></ContactInfo>
              </PerfectScrollbar>
            </div>
          </div>
        </div>
      </section>
      <ImageViewer isOpen={viewImage} toggleImage={toggleImage}></ImageViewer>
    </div>
  )
}

export default chat
