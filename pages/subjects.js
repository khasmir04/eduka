import {useState} from "react"
import Head from 'next/head'
import PerfectScrollbar from 'react-perfect-scrollbar'

import Sidebar from "../components/layout/Sidebar"
import Header from "../components/layout/Header"
import FileUpload from "../components/modal/FileUpload"

function subjects() {
  const [sidebar, setSidebar] = useState(false)

  function toggleSidebar(){
    setSidebar(!sidebar)
  }

  return (
    <div>
      <Head>
        <title>EduKa | Subjects</title>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
      </Head>
      <Header toggleSidebar={toggleSidebar}>
      </Header>
      <Sidebar isVisible={sidebar}>
      </Sidebar>
      <section id="profile" className="overflow-y-scroll">
        <div className="profile-container w-full p-6">
          <h6 className="text-xl font-bold my-auto text-primary">Hi Khasmir!</h6>
          <h2 className="text-md text-gray-400 ">Here are your subjects. You can do it!</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
            <div className="w-full">
              <div className="shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
                <div className="w-full object-cover w-32 h-32 ">
                  <img src="/img/python-logo.svg" alt="" />
                </div>
                <div className="flex items-end space-x-2 my-6">
                  <span className="text-5xl text-black dark:text-white font-bold">
                    Python
                  </span>
                </div>
                <div className="dark:text-white">
                  <div className="flex items-center pb-2 mb-2  sm:space-x-12  justify-between border-b border-gray-200">
                    <span className="font-medium text-lg">Mark:</span>
                    <div className="flex items-end text-sm">1.5 Avg</div>
                  </div>
                  <div className="flex items-center mb-2 pb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
                    <span className="font-medium text-lg">Subject:</span>
                    <div className="flex items-end text-sm">Python</div>
                  </div>
                  <div className="flex items-center text-sm space-x-12 md:space-x-24 justify-between">
                    <span className="font-medium text-lg">Status:</span>
                    <div className="flex items-end text-sm">Enrolled</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
                <div className="flex items-center">
                  <div className="w-full object-cover w-32 h-32">
                    <img className="" src="/img/JS-logo.svg" alt="" />
                  </div>
                </div>
                <div className="flex items-end space-x-2 my-6">
                  <span className="text-5xl text-black dark:text-white font-bold">
                    Javascript
                  </span>
                </div>

                <div className="dark:text-white">
                  <div className="flex items-center pb-2 mb-2  sm:space-x-12  justify-between border-b border-gray-200">
                    <span className="font-medium text-lg">Mark:</span>
                    <div className="flex items-end text-sm">2.5 Avg</div>
                  </div>
                  <div className="flex items-center mb-2 pb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
                    <span className="font-medium text-lg">Subject:</span>
                    <div className="flex items-end text-sm">JavaScript</div>
                  </div>
                  <div className="flex items-center text-sm space-x-12 md:space-x-24 justify-between">
                    <span className="font-medium text-lg">Status:</span>
                    <div className="flex items-end text-sm">Enrolled</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
                <div className="object-cover w-full w-32 h-32">
                  <img src="/img/html-logo.png" alt="" />
                </div>
                <div className="flex items-end space-x-2 my-6">
                  <span className="text-5xl text-black dark:text-white font-bold">
                    HTML
                  </span>
                </div>

                <div className="dark:text-white">
                  <div className="flex items-center pb-2 mb-2  sm:space-x-12  justify-between border-b border-gray-200">
                    <span className="font-medium text-lg">Mark:</span>
                    <div className="flex items-end text-sm">1 Avg</div>
                  </div>
                  <div className="flex items-center mb-2 pb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
                    <span className="font-medium text-lg">Subject:</span>
                    <div className="flex items-end text-sm">HTML</div>
                  </div>
                  <div className="flex items-center text-sm space-x-12 md:space-x-24 justify-between">
                    <span className="font-medium text-lg">Status:</span>
                    <div className="flex items-end text-sm">Enrolled</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
                <div className="object-cover w-full w-32 h-32">
                  <img src="/img/wordpress-logo.svg" alt="" />
                </div>
                <div className="flex items-end space-x-2 my-6">
                  <span className="text-5xl text-black dark:text-white font-bold">
                    Wordpress
                  </span>
                </div>

                <div className="dark:text-white">
                  <div className="flex items-center pb-2 mb-2  sm:space-x-12  justify-between border-b border-gray-200">
                    <span className="font-medium text-lg">Mark:</span>
                    <div className="flex items-end text-sm">2 Avg</div>
                  </div>
                  <div className="flex items-center mb-2 pb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
                    <span className="font-medium text-lg">Subject:</span>
                    <div className="flex items-end text-sm">Wordpress</div>
                  </div>
                  <div className="flex items-center text-sm space-x-12 md:space-x-24 justify-between">
                    <span className="font-medium text-lg">Status:</span>
                    <div className="flex items-end text-sm">Dropped</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
                <div className="object-cover w-full w-32 h-32">
                  <img src="/img/nodejs-logo.svg" alt="" />
                </div>
                <div className="flex items-end space-x-2 my-6">
                  <span className="text-5xl text-black dark:text-white font-bold">
                    NodeJS
                  </span>
                </div>

                <div className="dark:text-white">
                  <div className="flex items-center pb-2 mb-2  sm:space-x-12  justify-between border-b border-gray-200">
                    <span className="font-medium text-lg">Mark:</span>
                    <div className="flex items-end text-sm">2.5 Avg</div>
                  </div>
                  <div className="flex items-center mb-2 pb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
                    <span className="font-medium text-lg">Subject:</span>
                    <div className="flex items-end text-sm">NodeJS</div>
                  </div>
                  <div className="flex items-center text-sm space-x-12 md:space-x-24 justify-between">
                    <span className="font-medium text-lg">Status:</span>
                    <div className="flex items-end text-sm">Enrolled</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
                <div className="object-cover w-full w-32 h-32">
                  <img src="/img/angular-logo.svg" alt="" />
                </div>

                <div className="flex items-end space-x-2 my-6">
                  <span className="text-5xl text-black dark:text-white font-bold">
                    Angular
                  </span>
                </div>

                <div className="dark:text-white">
                  <div className="flex items-center pb-2 mb-2  sm:space-x-12  justify-between border-b border-gray-200">
                    <span className="font-medium text-lg">Mark:</span>
                    <div className="flex items-end text-sm">2 Avg</div>
                  </div>
                  <div className="flex items-center mb-2 pb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
                    <span className="font-medium text-lg">Subject:</span>
                    <div className="flex items-end text-sm">Angular</div>
                  </div>
                  <div className="flex items-center text-sm space-x-12 md:space-x-24 justify-between">
                    <span className="font-medium text-lg">Status:</span>
                    <div className="flex items-end text-sm">Enrolled</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default subjects;
