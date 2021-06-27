import React,{useState} from 'react'
import Head from "next/head"
import Header from "../components/layout/Header"
import Sidebar from "../components/layout/Sidebar"
import PerfectScrollbar from 'react-perfect-scrollbar'
import DropdownSelect from "../components/dropdown/DropdownSelect"

export default function students() {
  const [sidebar, setSidebar] = useState(false)

  function toggleSidebar(){
    setSidebar(!sidebar)
  }

  return (
    <div>
      <Head>
        <title>EduKa | Students</title>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
      </Head>
      <Header toggleSidebar={toggleSidebar}>
      </Header>
      <Sidebar isVisible={sidebar}>
      </Sidebar>
      <section id="students">
        <div className="h-full flex flex-col p-6 bg-white dark:bg-gray-800 rounded-lg">
          <div className="">
            <h6 className="text-xl font-bold my-auto text-primary">Wow!</h6>
            <h2 className="text-md text-gray-400 ">That's one hell of a team!</h2>
            <p className="text-center text-3xl font-bold text-secondary dark:text-white">
              Team Valo
            </p>
            <p className="text-center mb-6 text-xl font-normal text-gray-500 dark:text-gray-300">
              Meet the best team in the World
            </p>
          </div>
          <div className="flex justify-end items-center border border-c_light mb-3">
            <DropdownSelect/>
          </div>
          <PerfectScrollbar options={{ wheelSpeed: 0.2 , swipeEasing: true}}>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              <div className="p-4 border-2 border-c_light hover:shadow-xl rounded-lg transition-shadow hover:cursor-pointer">
                <div className="flex-col  flex justify-center items-center">
                  <div className="flex-shrink-0">
                    <a href="#" className="block relative">
                      <img alt="profil" src="img/users/contact-avatar-4.jpg" className="mx-auto object-cover rounded-full h-20 w-20 " />
                    </a>
                  </div>
                  <div className="mt-2 text-center flex flex-col">
                    <span className="text-gray-600 dark:text-white text-lg font-medium">
                      Hean Hiut
                    </span>
                    <span className="text-gray-400 text-xs">
                      Student
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4 border-2 border-c_light hover:shadow-xl rounded-lg transition-shadow hover:cursor-pointer">
                <div className="flex-col  flex justify-center items-center">
                  <div className="flex-shrink-0">
                    <a href="#" className="block relative">
                      <img alt="profil" src="img/users/contact-avatar-5.jpg" className="mx-auto object-cover rounded-full h-20 w-20 " />
                    </a>
                  </div>
                  <div className="mt-2 text-center flex flex-col">
                    <span className="text-gray-600 dark:text-white text-lg font-medium">
                      Igor Novak
                    </span>
                    <span className="text-gray-400 text-xs">
                      Student
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4 border-2 border-c_light hover:shadow-xl rounded-lg transition-shadow hover:cursor-pointer">
                <div className="flex-col  flex justify-center items-center">
                  <div className="flex-shrink-0">
                    <a href="#" className="block relative">
                      <img alt="profil" src="img/users/contact-avatar.jpg" className="mx-auto object-cover rounded-full h-20 w-20 " />
                    </a>
                  </div>
                  <div className="mt-2 text-center flex flex-col">
                    <span className="text-gray-600 dark:text-white text-lg font-medium">
                      Jig sa Hiut
                    </span>
                    <span className="text-gray-400 text-xs">
                      Nurse
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4 border-2 border-c_light hover:shadow-xl rounded-lg transition-shadow hover:cursor-pointer">
                <div className="flex-col  flex justify-center items-center">
                  <div className="flex-shrink-0">
                    <a href="#" className="block relative">
                      <img alt="profil" src="img/users/contact-avatar-7.jpg" className="mx-auto object-cover rounded-full h-20 w-20 " />
                    </a>
                  </div>
                  <div className="mt-2 text-center flex flex-col">
                    <span className="text-gray-600 dark:text-white text-lg font-medium">
                      Norman Tuck
                    </span>
                    <span className="text-gray-400 text-xs">
                      Security
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4 border-2 border-c_light hover:shadow-xl rounded-lg transition-shadow hover:cursor-pointer">
                <div className="flex-col  flex justify-center items-center">
                  <div className="flex-shrink-0">
                    <a href="#" className="block relative">
                      <img alt="profil" src="img/users/contact-avatar-8.jpg" className="mx-auto object-cover rounded-full h-20 w-20 " />
                    </a>
                  </div>
                  <div className="mt-2 text-center flex flex-col">
                    <span className="text-gray-600 dark:text-white text-lg font-medium">
                      Masrt kik
                    </span>
                    <span className="text-gray-400 text-xs">
                      Dean
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4 border-2 border-c_light hover:shadow-xl rounded-lg transition-shadow hover:cursor-pointer">
                <div className="flex-col  flex justify-center items-center">
                  <div className="flex-shrink-0">
                    <a href="#" className="block relative">
                      <img alt="profil" src="img/users/contact-avatar-9.jpg" className="mx-auto object-cover rounded-full h-20 w-20 " />
                    </a>
                  </div>
                  <div className="mt-2 text-center flex flex-col">
                    <span className="text-gray-600 dark:text-white text-lg font-medium">
                      Louis Bol
                    </span>
                    <span className="text-gray-400 text-xs">
                      Registrar
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4 border-2 border-c_light hover:shadow-xl rounded-lg transition-shadow hover:cursor-pointer">
                <div className="flex-col  flex justify-center items-center">
                  <div className="flex-shrink-0">
                    <a href="#" className="block relative">
                      <img alt="profil" src="img/users/contact-avatar-10.jpg" className="mx-auto object-cover rounded-full h-20 w-20 " />
                    </a>
                  </div>
                  <div className="mt-2 text-center flex flex-col">
                    <span className="text-gray-600 dark:text-white text-lg font-medium">
                      Izno god
                    </span>
                    <span className="text-gray-400 text-xs">
                      Librarian
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4 border-2 border-c_light hover:shadow-xl rounded-lg transition-shadow hover:cursor-pointer">
                <div className="flex-col  flex justify-center items-center">
                  <div className="flex-shrink-0">
                    <a href="#" className="block relative">
                      <img alt="profil" src="img/users/contact-avatar-1.jpg" className="mx-auto object-cover rounded-full h-20 w-20 " />
                    </a>
                  </div>
                  <div className="mt-2 text-center flex flex-col">
                    <span className="text-gray-600 dark:text-white text-lg font-medium">
                      Serena Quille
                    </span>
                    <span className="text-gray-400 text-xs">
                      Student
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4 border-2 border-c_light hover:shadow-xl rounded-lg transition-shadow hover:cursor-pointer">
                <div className="flex-col  flex justify-center items-center">
                  <div className="flex-shrink-0">
                    <a href="#" className="block relative">
                      <img alt="profil" src="img/users/contact-avatar.jpg" className="mx-auto object-cover rounded-full h-20 w-20 " />
                    </a>
                  </div>
                  <div className="mt-2 text-center flex flex-col">
                    <span className="text-gray-600 dark:text-white text-lg font-medium">
                      Edouard Sert
                    </span>
                    <span className="text-gray-400 text-xs">
                      Developer
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4 border-2 border-c_light hover:shadow-xl rounded-lg transition-shadow hover:cursor-pointer">
                <div className="flex-col  flex justify-center items-center">
                  <div className="flex-shrink-0">
                    <a href="#" className="block relative">
                      <img alt="profil" src="img/users/contact-avatar-8.jpg" className="mx-auto object-cover rounded-full h-20 w-20 " />
                    </a>
                  </div>
                  <div className="mt-2 text-center flex flex-col">
                    <span className="text-gray-600 dark:text-white text-lg font-medium">
                      Parki Son
                    </span>
                    <span className="text-gray-400 text-xs">
                      Student
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4 border-2 border-c_light hover:shadow-xl rounded-lg transition-shadow hover:cursor-pointer">
                <div className="flex-col  flex justify-center items-center">
                  <div className="flex-shrink-0">
                    <a href="#" className="block relative">
                      <img alt="profil" src="img/users/contact-avatar-9.jpg" className="mx-auto object-cover rounded-full h-20 w-20 " />
                    </a>
                  </div>
                  <div className="mt-2 text-center flex flex-col">
                    <span className="text-gray-600 dark:text-white text-lg font-medium">
                      Marine Lo
                    </span>
                    <span className="text-gray-400 text-xs">
                      Cheerleader
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4 border-2 border-c_light hover:shadow-xl rounded-lg transition-shadow hover:cursor-pointer">
                <div className="flex-col  flex justify-center items-center">
                  <div className="flex-shrink-0">
                    <a href="#" className="block relative">
                      <img alt="profil" src="img/users/contact-avatar-4.jpg" className="mx-auto object-cover rounded-full h-20 w-20 " />
                    </a>
                  </div>
                  <div className="mt-2 text-center flex flex-col">
                    <span className="text-gray-600 dark:text-white text-lg font-medium">
                      Mickal Poul
                    </span>
                    <span className="text-gray-400 text-xs">
                      Professor
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4 border-2 border-c_light hover:shadow-xl rounded-lg transition-shadow hover:cursor-pointer">
                <div className="flex-col  flex justify-center items-center">
                  <div className="flex-shrink-0">
                    <a href="#" className="block relative">
                      <img alt="profil" src="img/users/contact-avatar-5.jpg" className="mx-auto object-cover rounded-full h-20 w-20 " />
                    </a>
                  </div>
                  <div className="mt-2 text-center flex flex-col">
                    <span className="text-gray-600 dark:text-white text-lg font-medium">
                      Isac Tou
                    </span>
                    <span className="text-gray-400 text-xs">
                      Professor
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4 border-2 border-c_light hover:shadow-xl rounded-lg transition-shadow hover:cursor-pointer">
                <div className="flex-col  flex justify-center items-center">
                  <div className="flex-shrink-0">
                    <a href="#" className="block relative">
                      <img alt="profil" src="img/users/contact-avatar-6.jpg" className="mx-auto object-cover rounded-full h-20 w-20 " />
                    </a>
                  </div>
                  <div className="mt-2 text-center flex flex-col">
                    <span className="text-gray-600 dark:text-white text-lg font-medium">
                      Jean Eu
                    </span>
                    <span className="text-gray-400 text-xs">
                      Student
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4 border-2 border-c_light hover:shadow-xl rounded-lg transition-shadow hover:cursor-pointer">
                <div className="flex-col  flex justify-center items-center">
                  <div className="flex-shrink-0">
                    <a href="#" className="block relative">
                      <img alt="profil" src="img/users/contact-avatar-9.jpg" className="mx-auto object-cover rounded-full h-20 w-20 " />
                    </a>
                  </div>
                  <div className="mt-2 text-center flex flex-col">
                    <span className="text-gray-600 dark:text-white text-lg font-medium">
                      Yves P
                    </span>
                    <span className="text-gray-400 text-xs">
                      Model
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4 border-2 border-c_light hover:shadow-xl rounded-lg transition-shadow hover:cursor-pointer">
                <div className="flex-col  flex justify-center items-center">
                  <div className="flex-shrink-0">
                    <a href="#" className="block relative">
                      <img alt="profil" src="img/users/contact-avatar-1.jpg" className="mx-auto object-cover rounded-full h-20 w-20 " />
                    </a>
                  </div>
                  <div className="mt-2 text-center flex flex-col">
                    <span className="text-gray-600 dark:text-white text-lg font-medium">
                      Marco Tol
                    </span>
                    <span className="text-gray-400 text-xs">
                      Student
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4 border-2 border-c_light hover:shadow-xl rounded-lg transition-shadow hover:cursor-pointer">
                <div className="flex-col  flex justify-center items-center">
                  <div className="flex-shrink-0">
                    <a href="#" className="block relative">
                      <img alt="profil" src="img/users/contact-avatar-6.jpg" className="mx-auto object-cover rounded-full h-20 w-20 " />
                    </a>
                  </div>
                  <div className="mt-2 text-center flex flex-col">
                    <span className="text-gray-600 dark:text-white text-lg font-medium">
                      Huge Ar
                    </span>
                    <span className="text-gray-400 text-xs">
                      Sister
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4 border-2 border-c_light hover:shadow-xl rounded-lg transition-shadow hover:cursor-pointer">
                <div className="flex-col  flex justify-center items-center">
                  <div className="flex-shrink-0">
                    <a href="#" className="block relative">
                      <img alt="profil" src="img/users/contact-avatar-8.jpg" className="mx-auto object-cover rounded-full h-20 w-20 " />
                    </a>
                  </div>
                  <div className="mt-2 text-center flex flex-col">
                    <span className="text-gray-600 dark:text-white text-lg font-medium">
                      Big Bro
                    </span>
                    <span className="text-gray-400 text-xs">
                      Dean
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </PerfectScrollbar>
        </div>
      </section>
    </div>
  );
}
