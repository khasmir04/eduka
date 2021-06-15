import {useState} from "react"
import Head from 'next/head'
import Sidebar from "../components/Sidebar"
import Header from "../components/Header"
import Conversation from "../components/Conversation"
import ContactInfo from "../components/ContactInfo"
import ContactList from "../components/ContactList"

function chat() {
  const [results, setResults] = useState(false);
  const [test, setTest] = useState();

  function toggleSidebar(){
    setResults(!results)
  }
  
  return (
    <div>
      <Head>
        <title>Edu | Chat</title>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
        <link rel="stylesheet" href="https://unpkg.com/simplebar@latest/dist/simplebar.css" />
      </Head>
      <Header toggleSidebar={toggleSidebar}>
      </Header>
      <Sidebar isVisible={results}>
      </Sidebar>
      <section id="inbox">
        <div className="inbox-container h-full">
          <div className="flex flex-wrap h-full">
            <div className="w-3/12 h-full p-0 overflow-hidden">
              <ContactList activeItem={test}></ContactList>
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

export default chat
