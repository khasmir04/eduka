import Head from 'next/head'
import {useState} from "react"
import Sidebar from "../components/Sidebar"
import Header from "../components/Header"

export default function Home() {
  const [results, setResults] = useState(false)

  function toggleSidebar(){
    setResults(!results)
  }

  return (
    <div>
      <Head>
        <title>Edu | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header toggleSidebar={toggleSidebar}>
      </Header>
      <Sidebar isVisible={results}>
      </Sidebar>
    </div>
  )
}
