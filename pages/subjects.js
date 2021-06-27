import {useState} from "react"
import Head from 'next/head'
import PerfectScrollbar from 'react-perfect-scrollbar'

import Sidebar from "../components/layout/Sidebar"
import Header from "../components/layout/Header"

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
      <section id="profile">
        <PerfectScrollbar options={{ wheelSpeed: 0.5 , swipeEasing: true}} className="h-full w-full p-6">
          <h6 className="text-xl font-bold my-auto text-primary">My Subjects</h6>
          <h2 className="text-md text-gray-400 ">Here are your subjects. You can do it!</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
            <div className="w-full">
              <div className="border-2 border-c_light shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-700 cursor-pointer transform transition duration-300 hover:scale-105 relative">
                <div className="w-full object-cover w-32 h-32 ">
                  <img src="/img/subjects/python-logo.svg" alt="python" />
                </div>
                <div className="flex items-end space-x-2 my-6">
                  <span className="text-3xl text-primary dark:text-white font-bold">
                    Python
                  </span>
                </div>
                <div className="dark:text-white">
                  <div className="flex items-center pb-2 mb-2  sm:space-x-12  justify-between border-b border-gray-200">
                    <span className="font-medium text-md">Mark:</span>
                    <div className="flex items-end text-md">1.5 Avg</div>
                  </div>
                  <div className="flex items-center mb-2 pb-2 space-x-12 md:space-x-24 justify-between border-b border-gray-200">
                    <span className="font-medium text-md">Subject:</span>
                    <div className="flex items-end text-md">Python</div>
                  </div>
                  <div className="flex items-center space-x-12 md:space-x-24 justify-between">
                    <span className="font-medium text-md">Status:</span>
                    <div className="flex items-end text-md">Enrolled</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="border-2 border-c_light shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-700 cursor-pointer transform transition duration-300 hover:scale-105 relative">
                <div className="flex items-center">
                  <div className="w-full object-cover w-32 h-32">
                    <img src="/img/subjects/javascript.png" alt="javascript" />
                  </div>
                </div>
                <div className="flex items-end space-x-2 my-6">
                  <span className="text-3xl text-primary dark:text-white font-bold">
                    Javascript
                  </span>
                </div>

                <div className="dark:text-white">
                  <div className="flex items-center pb-2 mb-2  sm:space-x-12  justify-between border-b border-gray-200">
                    <span className="font-medium text-md">Mark:</span>
                    <div className="flex items-end text-md">2.5 Avg</div>
                  </div>
                  <div className="flex items-center mb-2 pb-2 space-x-12 md:space-x-24 justify-between border-b border-gray-200">
                    <span className="font-medium text-md">Subject:</span>
                    <div className="flex items-end text-md">JavaScript</div>
                  </div>
                  <div className="flex items-center space-x-12 md:space-x-24 justify-between">
                    <span className="font-medium text-md">Status:</span>
                    <div className="flex items-end text-md">Enrolled</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="border-2 border-c_light shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-700 cursor-pointer transform transition duration-300 hover:scale-105 relative">
                <div className="object-cover w-full w-32 h-32">
                  <img src="/img/subjects/html-logo.png" alt="html" />
                </div>
                <div className="flex items-end space-x-2 my-6">
                  <span className="text-3xl text-primary dark:text-white font-bold">
                    HTML
                  </span>
                </div>

                <div className="dark:text-white">
                  <div className="flex items-center pb-2 mb-2  sm:space-x-12  justify-between border-b border-gray-200">
                    <span className="font-medium text-md">Mark:</span>
                    <div className="flex items-end text-md">1 Avg</div>
                  </div>
                  <div className="flex items-center mb-2 pb-2 space-x-12 md:space-x-24 justify-between border-b border-gray-200">
                    <span className="font-medium text-md">Subject:</span>
                    <div className="flex items-end text-md">HTML</div>
                  </div>
                  <div className="flex items-center space-x-12 md:space-x-24 justify-between">
                    <span className="font-medium text-md">Status:</span>
                    <div className="flex items-end text-md">Enrolled</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="border-2 border-c_light shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-700 cursor-pointer transform transition duration-300 hover:scale-105 relative">
                <div className="object-cover w-full w-32 h-32">
                  <img src="/img/subjects/wordpress-logo.svg" alt="wordpress" />
                </div>
                <div className="flex items-end space-x-2 my-6">
                  <span className="text-3xl text-primary dark:text-white font-bold">
                    Wordpress
                  </span>
                </div>

                <div className="dark:text-white">
                  <div className="flex items-center pb-2 mb-2  sm:space-x-12  justify-between border-b border-gray-200">
                    <span className="font-medium text-md">Mark:</span>
                    <div className="flex items-end text-md">2 Avg</div>
                  </div>
                  <div className="flex items-center mb-2 pb-2 space-x-12 md:space-x-24 justify-between border-b border-gray-200">
                    <span className="font-medium text-md">Subject:</span>
                    <div className="flex items-end text-md">Wordpress</div>
                  </div>
                  <div className="flex items-center space-x-12 md:space-x-24 justify-between">
                    <span className="font-medium text-md">Status:</span>
                    <div className="flex items-end text-md">Dropped</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="border-2 border-c_light shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-700 cursor-pointer transform transition duration-300 hover:scale-105 relative">
                <div className="object-cover w-full w-32 h-32">
                  <img src="/img/subjects/nodejs-logo.jpg" alt="nodejs" />
                </div>
                <div className="flex items-end space-x-2 my-6">
                  <span className="text-3xl text-primary dark:text-white font-bold">
                    NodeJS
                  </span>
                </div>

                <div className="dark:text-white">
                  <div className="flex items-center pb-2 mb-2  sm:space-x-12  justify-between border-b border-gray-200">
                    <span className="font-medium text-md">Mark:</span>
                    <div className="flex items-end text-md">2.5 Avg</div>
                  </div>
                  <div className="flex items-center mb-2 pb-2 space-x-12 md:space-x-24 justify-between border-b border-gray-200">
                    <span className="font-medium text-md">Subject:</span>
                    <div className="flex items-end text-md">NodeJS</div>
                  </div>
                  <div className="flex items-center space-x-12 md:space-x-24 justify-between">
                    <span className="font-medium text-md">Status:</span>
                    <div className="flex items-end text-md">Enrolled</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="border-2 border-c_light shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-700 cursor-pointer transform transition duration-300 hover:scale-105 relative">
                <div className="object-cover w-full w-32 h-32">
                  <img src="/img/subjects/angular-logo.svg" alt="angular" />
                </div>

                <div className="flex items-end space-x-2 my-6">
                  <span className="text-3xl text-primary dark:text-white font-bold">
                    Angular
                  </span>
                </div>

                <div className="dark:text-white">
                  <div className="flex items-center pb-2 mb-2  sm:space-x-12  justify-between border-b border-gray-200">
                    <span className="font-medium text-md">Mark:</span>
                    <div className="flex items-end text-md">2 Avg</div>
                  </div>
                  <div className="flex items-center mb-2 pb-2 space-x-12 md:space-x-24 justify-between border-b border-gray-200">
                    <span className="font-medium text-md">Subject:</span>
                    <div className="flex items-end text-md">Angular</div>
                  </div>
                  <div className="flex items-center space-x-12 md:space-x-24 justify-between">
                    <span className="font-medium text-md">Status:</span>
                    <div className="flex items-end text-md">Enrolled</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PerfectScrollbar>
      </section>
    </div>
  );
}

export default subjects;
