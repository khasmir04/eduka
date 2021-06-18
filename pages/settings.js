import React,{useState} from 'react'
import Head from "next/head"
import Header from "../components/layout/Header"
import Sidebar from "../components/layout/Sidebar"
import FileUpload from "../components/modal/FileUpload"
import PerfectScrollbar from 'react-perfect-scrollbar'

export default function settings() {
  const [sidebar, setSidebar] = useState(false)
  const [upload, setUpload] = useState(false)
  const [readOnly, setReadOnly] = useState(true)

  function toggleSidebar(){
    setSidebar(!sidebar)
  }

  function toggleUpload(){
    setUpload(!upload)
  }

  function updateData(){
    setReadOnly(!readOnly)
  }

  return (
    <>
      <Head>
        <title>EduKa | Settings</title>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
      </Head>
      <Header toggleSidebar={toggleSidebar} toggleUpload={toggleUpload}>
      </Header>
      <Sidebar isVisible={sidebar}>
      </Sidebar>
      <section id="settings">
        <PerfectScrollbar>
          <div className="container p-6 flex flex-wrap">
            <div className="w-full lg:w-8/12 border-r-2 border-c_light">
              <div className="relative flex flex-col break-words w-full mb-6 rounded-lg bg-blueGray-100">
                <div className="rounded-t bg-white mb-0 px-6 py-6">
                  <div className="text-center flex justify-between">
                    <h6 className="text-c_dark text-xl font-bold">Hi Khasmir!</h6>
                    <button
                      className="bg-primary hover:bg-primary-dark active:bg-primary-dark text-white font-bold text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={updateData}
                    >
                      {(readOnly)? "Update" : "Save"}
                    </button>
                  </div>
                </div>
                <div className="flex-auto lg:px-10 py-10 pt-0">
                  <form>
                    <h6 className="text-c_dark text-sm mt-3 mb-6 font-bold uppercase">
                      User Information
                    </h6>
                    <div className="flex flex-wrap">
                      <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-c_dark text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Username
                          </label>
                          <input
                            type="text"
                            className={'border-0 px-3 py-3 placeholder-blueGray-100 text-c_dark bg-white rounded text-sm focus:outline-none w-full ' + (readOnly? null : 'shadow focus:ring ease-linear transition-all duration-150')}
                            defaultValue="khasmir04"
                            readOnly={readOnly}
                          />
                        </div>
                      </div>
                      <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-c_dark text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Email address
                          </label>
                          <input
                            type="email"
                            className={'border-0 px-3 py-3 placeholder-blueGray-100 text-c_dark bg-white rounded text-sm focus:outline-none w-full ' + (readOnly? null : 'shadow focus:ring ease-linear transition-all duration-150')}
                            defaultValue="devkj@gmail.com"
                            readOnly={readOnly}
                          />
                        </div>
                      </div>
                      <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-c_dark text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            First Name
                          </label>
                          <input
                            type="text"
                            className={'border-0 px-3 py-3 placeholder-blueGray-100 text-c_dark bg-white rounded text-sm focus:outline-none w-full ' + (readOnly? null : 'shadow focus:ring ease-linear transition-all duration-150')}
                            defaultValue="Khasmir Jhon"
                            readOnly={readOnly}
                          />
                        </div>
                      </div>
                      <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-c_dark text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Last Name
                          </label>
                          <input
                            type="text"
                            className={'border-0 px-3 py-3 placeholder-blueGray-100 text-c_dark bg-white rounded text-sm focus:outline-none w-full ' + (readOnly? null : 'shadow focus:ring ease-linear transition-all duration-150')}
                            defaultValue="Caluscusao"
                            readOnly={readOnly}
                          />
                        </div>
                      </div>
                    </div>

                    <hr className="mt-6 border-b-2 border-c_light" />

                    <h6 className="text-c_dark text-sm mt-3 mb-6 font-bold uppercase">
                      Contact Information
                    </h6>
                    <div className="flex flex-wrap">
                      <div className="w-full lg:w-12/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-c_dark text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Address
                          </label>
                          <input
                            type="text"
                            className={'border-0 px-3 py-3 placeholder-blueGray-100 text-c_dark bg-white rounded text-sm focus:outline-none w-full ' + (readOnly? null : 'shadow focus:ring ease-linear transition-all duration-150')}
                            defaultValue="Zone I-A, Aguinaldo H-way"
                            readOnly={readOnly}
                          />
                        </div>
                      </div>
                      <div className="w-full lg:w-4/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-c_dark text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            City
                          </label>
                          <input
                            type="email"
                            className={'border-0 px-3 py-3 placeholder-blueGray-100 text-c_dark bg-white rounded text-sm focus:outline-none w-full ' + (readOnly? null : 'shadow focus:ring ease-linear transition-all duration-150')}
                            defaultValue="Dasmariñas"
                            readOnly={readOnly}
                          />
                        </div>
                      </div>
                      <div className="w-full lg:w-4/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-c_dark text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Country
                          </label>
                          <input
                            type="text"
                            className={'border-0 px-3 py-3 placeholder-blueGray-100 text-c_dark bg-white rounded text-sm focus:outline-none w-full ' + (readOnly? null : 'shadow focus:ring ease-linear transition-all duration-150')}
                            defaultValue="Philippines"
                            readOnly={readOnly}
                          />
                        </div>
                      </div>
                      <div className="w-full lg:w-4/12 px-4">
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-c_dark text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Postal Code
                          </label>
                          <input
                            type="text"
                            className={'border-0 px-3 py-3 placeholder-blueGray-100 text-c_dark bg-white rounded text-sm focus:outline-none w-full ' + (readOnly? null : 'shadow focus:ring ease-linear transition-all duration-150')}
                            defaultValue="4114"
                            readOnly={readOnly}
                          />
                        </div>
                      </div>
                    </div>

                    <hr className="mt-6 border-b-2 border-c_light" />

                    <h6 className="text-c_dark text-sm mt-3 mb-6 font-bold uppercase">
                      About Me
                    </h6>
                    <div className="flex flex-wrap">
                      <div className="w-full lg:w-12/12 px-4">
                        <div className="relative w-full mb-3">
                          <textarea
                            type="text"
                            className={'border-0 px-3 py-3 placeholder-blueGray-100 text-c_dark bg-white rounded text-sm focus:outline-none w-full ' + (readOnly? null : 'shadow focus:ring ease-linear transition-all duration-150')}
                            rows="4"
                            defaultValue="I'm a Web Developer currently enrolled in KodeGo Bootcamp."
                            readOnly={readOnly}
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-4/12">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded-lg">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full px-4 flex justify-center mb-5">
                    <div className="max-w-[150px] w-full rounded-full">
                      <img
                        alt="profile-image"
                        src="/img/users/contact-avatar-1.jpg"
                        className="rounded-full w-[150px] h-[150px] object-cover align-middle border-2 border-c_light"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 text-center">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-secondary">
                          22
                        </span>
                        <span className="text-sm text-c_dark">Friends</span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-secondary">
                          10
                        </span>
                        <span className="text-sm text-c_dark">Awards</span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-secondary">
                          89
                        </span>
                        <span className="text-sm text-c_dark">Comments</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-xl font-semibold leading-normal mb-2 text-c_dark mb-2">
                    Khasmir Jhon Caluscusao
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-c_gray font-bold uppercase">
                    <i className="bi bi-geo-alt-fill mr-2 text-lg text-c_gray"></i>{" "}
                    Dasmariñas, Cavite
                  </div>
                  <div className="mb-2 text-c_gray mb-2">
                    <i className="bi bi-briefcase-fill mr-2 text-lg text-c_gray"></i>
                    Student
                  </div>
                  <div className="mb-2 text-c_gray">
                    <i className="bi bi-building mr-2 text-lg text-c_gray"></i>
                    De La Salle University - Dasmariñas
                  </div>
                </div>
                <div className="mt-10 py-10 border-t-2 border-c_light text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-c_dark">
                        I'm a Web Developer currently enrolled in KodeGo Bootcamp.
                      </p>
                      <a
                        href="#pablo"
                        className="font-normal text-lightBlue-500"
                        onClick={(e) => e.preventDefault()}
                      >
                        Show more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </PerfectScrollbar>
      </section>
      <FileUpload isOpen={upload} toggleUpload={toggleUpload}></FileUpload>
    </>
  );
}
