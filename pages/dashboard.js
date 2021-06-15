import Head from 'next/head'
import {useState} from "react"
import Sidebar from "../components/Sidebar"
import Header from "../components/Header"

export default function dashboard() {
  const [results, setResults] = useState(false)

  function toggleSidebar(){
    setResults(!results)
  }

  return (
    <div>
      <Head>
        <title>EduKa | Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header toggleSidebar={toggleSidebar}>
      </Header>
      <Sidebar isVisible={results}>
      </Sidebar>
    </div>
  )
}
