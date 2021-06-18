import {useState} from "react"
import Head from 'next/head'
import PerfectScrollbar from 'react-perfect-scrollbar'

import Sidebar from "../components/layout/Sidebar"
import Header from "../components/layout/Header"
import FileUpload from "../components/modal/FileUpload"

function profile() {
  const [sidebar, setSidebar] = useState(false)
  const [upload, setUpload] = useState(false)

  function toggleSidebar(){
    setSidebar(!sidebar)
  }
  
  function toggleUpload(){
    setUpload(!upload)
  }

  return (
    <div>
      <Head>
        <title>EduKa | Profile</title>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
      </Head>
      <Header toggleSidebar={toggleSidebar} toggleUpload={toggleUpload}>
      </Header>
      <Sidebar isVisible={sidebar}>
      </Sidebar>
      <section id="profile" className="overflow-y-scroll">
        <div className="profile-container w-full p-6">
          <h1 className="text-4xl font-semibold text-gray-800 dark:text-white">
            Good afternoon, Charlie
          </h1>
          <h2 className="text-md text-gray-400 ">
            Programming Student Activities
          </h2>
          <div className="flex my-6 items-center w-full space-y-4 md:space-x-4 md:space-y-0 flex-col md:flex-row">
            <div className="w-full md:w-6/12">
              <div className="shadow-lg w-full bg-white dark:bg-gray-700 relative overflow-hidden">
                <a href="#" className="w-full h-full block">
                  <div className="flex items-center justify-between px-4 py-6 space-x-4">
                    <div className="flex items-center">
                      <span className="rounded-full relative p-5 bg-secondary">
                        <svg
                          width={40}
                          fill="currentColor"
                          height={40}
                          className="text-yellow-500 h-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                          viewBox="0 0 1792 1792"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M1362 1185q0 153-99.5 263.5t-258.5 136.5v175q0 14-9 23t-23 9h-135q-13 0-22.5-9.5t-9.5-22.5v-175q-66-9-127.5-31t-101.5-44.5-74-48-46.5-37.5-17.5-18q-17-21-2-41l103-135q7-10 23-12 15-2 24 9l2 2q113 99 243 125 37 8 74 8 81 0 142.5-43t61.5-122q0-28-15-53t-33.5-42-58.5-37.5-66-32-80-32.5q-39-16-61.5-25t-61.5-26.5-62.5-31-56.5-35.5-53.5-42.5-43.5-49-35.5-58-21-66.5-8.5-78q0-138 98-242t255-134v-180q0-13 9.5-22.5t22.5-9.5h135q14 0 23 9t9 23v176q57 6 110.5 23t87 33.5 63.5 37.5 39 29 15 14q17 18 5 38l-81 146q-8 15-23 16-14 3-27-7-3-3-14.5-12t-39-26.5-58.5-32-74.5-26-85.5-11.5q-95 0-155 43t-60 111q0 26 8.5 48t29.5 41.5 39.5 33 56 31 60.5 27 70 27.5q53 20 81 31.5t76 35 75.5 42.5 62 50 53 63.5 31.5 76.5 13 94z" />
                        </svg>
                      </span>
                      <div className="flex flex-col ml-2">
                        <div className=" mt-6 md:mt-0 text-black dark:text-white font-bold text-xl">
                          $2,340.20
                        </div>
                        <p className="text-sm text-gray-700 dark:text-white font-semibold ">
                          Available Credit
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-3 bg-gray-100">
                    <div className=" h-full text-center text-xs text-white bg-primary" />
                  </div>
                </a>
              </div>
            </div>
            <div className="flex items-center w-full md:w-1/2 space-x-4">
              <div className="w-1/2">
                <div className="shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
                  <p className="text-2xl text-black dark:text-white font-bold">
                    5
                  </p>
                  <p className="text-gray-400 text-sm">Active Courses</p>
                </div>
              </div>
              <div className="w-1/2">
                <div className="shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-700 relative">
                  <p className="text-2xl text-black dark:text-white font-bold">
                    $44,453.39
                    <span className="text-xs text-gray-400">/$100K</span>
                  </p>
                  <p className="text-gray-400 text-sm">Total cost per year:</p>
                  <span className="rounded-full absolute p-4 bg-primary top-2 right-4">
                    <svg
                      width={40}
                      fill="currentColor"
                      height={40}
                      className="text-white h-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1362 1185q0 153-99.5 263.5t-258.5 136.5v175q0 14-9 23t-23 9h-135q-13 0-22.5-9.5t-9.5-22.5v-175q-66-9-127.5-31t-101.5-44.5-74-48-46.5-37.5-17.5-18q-17-21-2-41l103-135q7-10 23-12 15-2 24 9l2 2q113 99 243 125 37 8 74 8 81 0 142.5-43t61.5-122q0-28-15-53t-33.5-42-58.5-37.5-66-32-80-32.5q-39-16-61.5-25t-61.5-26.5-62.5-31-56.5-35.5-53.5-42.5-43.5-49-35.5-58-21-66.5-8.5-78q0-138 98-242t255-134v-180q0-13 9.5-22.5t22.5-9.5h135q14 0 23 9t9 23v176q57 6 110.5 23t87 33.5 63.5 37.5 39 29 15 14q17 18 5 38l-81 146q-8 15-23 16-14 3-27-7-3-3-14.5-12t-39-26.5-58.5-32-74.5-26-85.5-11.5q-95 0-155 43t-60 111q0 26 8.5 48t29.5 41.5 39.5 33 56 31 60.5 27 70 27.5q53 20 81 31.5t76 35 75.5 42.5 62 50 53 63.5 31.5 76.5 13 94z" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="flex items-center text-gray-400 text-md border-gray-300 border px-4 py-2 rounded-tl-sm rounded-bl-full rounded-r-full">
              <svg
                width={20}
                height={20}
                fill="currentColor"
                className="mr-2 text-gray-400"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M192 1664h288v-288h-288v288zm352 0h320v-288h-320v288zm-352-352h288v-320h-288v320zm352 0h320v-320h-320v320zm-352-384h288v-288h-288v288zm736 736h320v-288h-320v288zm-384-736h320v-288h-320v288zm768 736h288v-288h-288v288zm-384-352h320v-320h-320v320zm-352-864v-288q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v288q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm736 864h288v-320h-288v320zm-384-384h320v-288h-320v288zm384 0h288v-288h-288v288zm32-480v-288q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v288q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm384-64v1280q0 52-38 90t-90 38h-1408q-52 0-90-38t-38-90v-1280q0-52 38-90t90-38h128v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h384v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h128q52 0 90 38t38 90z" />
              </svg>
              Last month
              <svg
                width={20}
                height={20}
                className="ml-2 text-gray-400"
                fill="currentColor"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z" />
              </svg>
            </button>
            <span className="text-sm text-gray-400">
              Compared to oct 1- otc 30, 2020
            </span>
          </div>
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
      <FileUpload isOpen={upload} toggleUpload={toggleUpload}></FileUpload>
    </div>
  );
}

export default profile;
