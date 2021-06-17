import Head from 'next/head'
import {useState} from "react"
import Sidebar from "../components/layout/Sidebar"
import Header from "../components/layout/Header"
import FileUpload from "../components/Modal/FileUpload"

export default function dashboard() {
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
    <div>
      <Head>
        <title>EduKa | Overview</title>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
      </Head>
      <Header toggleSidebar={toggleSidebar} toggleUpload={toggleUpload}>
      </Header>
      <Sidebar isVisible={sidebar}>
      </Sidebar>
      <FileUpload isOpen={upload} toggleUpload={toggleUpload}></FileUpload>
    </div>
  )
}
