import {useState} from "react"
import Head from 'next/head'
import PerfectScrollbar from 'react-perfect-scrollbar'

import Sidebar from "../components/layout/Sidebar"
import Header from "../components/layout/Header"
import Conversation from "../components/Conversation"
import ContactInfo from "../components/ContactInfo"
import ContactList from "../components/ContactList"
import FileUpload from "../components/Modal/FileUpload"

function chat() {
  const [sidebar, setSidebar] = useState(false)
  const [contactInfo, setContactInfo] = useState(true)
  const [upload, setUpload] = useState(false)

  function toggleSidebar(){
    setSidebar(!sidebar)
  }

  function toggleContactInfo(){
    setContactInfo(!contactInfo)
  }
  
  function toggleUpload(){
    setUpload(!upload)
  }

  return (
    <div className="relative">
      <Head>
        <title>EduKa | Chat</title>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
      </Head>
      <Header toggleSidebar={toggleSidebar} toggleUpload={toggleUpload}>
      </Header>
      <Sidebar isVisible={sidebar}>
      </Sidebar>
      <section id="inbox">
        <div className="inbox-container h-full">
          <div className="flex flex-wrap h-full">
            <div className="w-3/12 h-full p-0 overflow-hidden">
              <ContactList></ContactList>
            </div>
            <div className="flex-1 lg:w-6/12 h-full p-0 border-r-2 border-c_light" id="visible-scroll">
                <Conversation toggleContactInfo={toggleContactInfo}></Conversation>
            </div>
            <div className={'w-3/12 hidden h-full p-0 border-r-2 border-c_light ' + (contactInfo ? 'lg:block' : 'lg:hidden')}>
              <PerfectScrollbar>
                <ContactInfo toggleContactInfo={toggleContactInfo}></ContactInfo>
              </PerfectScrollbar>
            </div>
          </div>
        </div>
      </section>
      <FileUpload isOpen={upload} toggleUpload={toggleUpload}></FileUpload>
    </div>
  )
}

export default chat
