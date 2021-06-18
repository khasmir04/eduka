import Head from "next/head";
import Sidebar from '../../components/layout/Sidebar'
import Header from "../../components/layout/Header";
import LineChart from "../../components/LineChart";

function clickAlert() {
  alert("I am working");
}

function overview() {
  return (
    <div>
      <Head>
        <title>Edu | Overview</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Ubuntu:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header toggleSidebar={clickAlert}></Header>
      <Sidebar></Sidebar>
      <section id="overview" className="p-5 overflow-y-scroll">
        <div className="overview-container w-full mx-auto">
          <div className="w-full md:mb-6 mb-8">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-8/12 md:pr-6 mb-8 md:mb-0">
                <div className="mb-5 text-center md:text-left ">
                  <h1 className="text-xl font-bold">Hello, Student</h1>
                </div>
                <div className="flex flex-wrap card-1 mx-auto">
                  <div className="w-full lg:w-8/12">
                    <LineChart />
                  </div>
                  <div className="w-full lg:w-4/12">
                    <div className="py-8 px-8">
                      <div className="summary-bg flex py-6 px-6">
                        <div className="w-full lg:w-8/12">
                          <div className="text-sm leading-4 font-bold mb-5">
                            <span>Summary</span>
                          </div>
                          <div className="summary__course">
                            <div className="flex items-center mb-5">
                              <span className="summary__icon mr-3">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="22"
                                  height="22"
                                  fill="#8EEAFF"
                                  class="bi bi-journal-bookmark"
                                  viewBox="0 0 16 16"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M6 8V1h1v6.117L8.743 6.07a.5.5 0 0 1 .514 0L11 7.117V1h1v7a.5.5 0 0 1-.757.429L9 7.083 6.757 8.43A.5.5 0 0 1 6 8z"
                                  />
                                  <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
                                  <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
                                </svg>
                              </span>
                              <div className="flex flex-col">
                                <span className="font-bold leading-4 text-sm">
                                  53
                                </span>
                                <span className="text-xs leading-3 text-gray-500">
                                  Course
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="summary__course flex">
                            <div className="flex items-center mb-5">
                              <span className="summary__icon-clock mr-3 ">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="22"
                                  height="22"
                                  fill="#3E9AEF"
                                  class="bi bi-clock-history"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z" />
                                  <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z" />
                                  <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z" />
                                </svg>
                              </span>
                              <div className="flex flex-col">
                                <span className="font-bold leading-4 text-sm">
                                  88
                                </span>
                                <span className="text-xs leading-3 text-gray-500">
                                  Time
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="summary__course flex">
                            <div className="flex items-center">
                              <span className="summary__icon-exam mr-3">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="22"
                                  height="22"
                                  fill=" #59228D"
                                  class="bi bi-book"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
                                </svg>
                              </span>
                              <div className="flex flex-col">
                                <span className="font-bold leading-4 text-sm">
                                  25
                                </span>
                                <span className="text-xs leading-3 text-gray-500">
                                  Exam
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-full lg:w-4/12">
                          <div>
                            <span className="flex mb-8">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="currentColor"
                                class="bi bi-dot"
                                viewBox="0 0 16 16"
                              >
                                <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                              </svg>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="currentColor"
                                class="bi bi-dot"
                                viewBox="0 0 16 16"
                              >
                                <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                              </svg>
                            </span>
                            <div className="chevron-right pl-4 mb-10">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="currentColor"
                                class="bi bi-chevron-right"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                                />
                              </svg>
                            </div>
                            <div className="chevron-right pl-4 mb-9">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="currentColor"
                                class="bi bi-chevron-right"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                                />
                              </svg>
                            </div>
                            <div className="chevron-right pl-4">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="currentColor"
                                class="bi bi-chevron-right"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-4/12">
                <div className=" card-1">
                  <div className="flex">
                    <div className="w-full py-6 px-8">
                      <div className="flex justify-between">
                        <span className="text-lg font-bold mb-8 ">
                          Course Active
                        </span>
                        <div>
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              fill="currentColor"
                              class="bi bi-arrow-right"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>

                      <div className="interior-design flex items-center mb-8">
                        <img
                          className="mr-3"
                          src="/img/interior-image.svg"
                          alt=""
                        />
                        <div className="flex flex-col mr-auto">
                          <span className="font-bold text-base">
                            Interior Design
                          </span>
                          <span className="text-xs text-gray-400">
                            Active 12,Dec 2020
                          </span>
                        </div>
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            class="bi bi-three-dots-vertical"
                            viewBox="0 0 16 16"
                          >
                            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                          </svg>
                        </div>
                      </div>
                      <div className="illustration flex items-center mb-8">
                        <img
                          className="mr-3"
                          src="/img/illu-image.svg"
                          alt=""
                        />
                        <div className="flex flex-col mr-auto">
                          <span className="text-base font-bold">
                            Illustration
                          </span>
                          <span className="text-xs text-gray-400">
                            Active 11,Jan 2021
                          </span>
                        </div>
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            class="bi bi-three-dots-vertical"
                            viewBox="0 0 16 16"
                          >
                            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                          </svg>
                        </div>
                      </div>
                      <div className="programming flex items-center">
                        <img
                          className="mr-3"
                          src="/img/program-image.svg"
                          alt=""
                        />
                        <div className="flex flex-col mr-auto">
                          <span className="text-base font-bold">
                            Programming
                          </span>
                          <span className="text-xs text-gray-400">
                            Active 3,Mar 2021
                          </span>
                        </div>
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            class="bi bi-three-dots-vertical"
                            viewBox="0 0 16 16"
                          >
                            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-8/12 md:pr-6 ">
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-6/12 md:pr-6 mb-8 md:mb-0">
                    <div className="card-1 p-4">
                      <div className=" bg-gray-700 py-36 w-full h-full rounded-3xl"></div>
                      <div></div>
                    </div>
                    <div className=" bg-white py-8 px-8 rounded-3xl -mt-12 mx-2 ">
                      <div className="md:flex md:justify-evenly mb-4">
                        <div className="mb-4 md:mb-0">
                          <span className="text-xl font-bold">
                            Programming - Exam
                          </span>
                        </div>
                        <div className="mb-4 md:mb-0">
                          <span className="md:pt-4 text-yellow-400 text-sm">
                            Details
                          </span>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="md:ml-16 mr-2">
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              fill="currentColor"
                              class="bi bi-alarm"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z" />
                              <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z" />
                            </svg>
                          </span>
                        </div>
                        <span className="text-sm text-gray-400 mr-4">
                          On going
                        </span>
                        <span className="text-sm">12 March 2021</span>
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-6/12 mb-8 md:mb-0">
                    <div className="card-1 py-5 px-3 md:px-8 md:py-10">
                      <div className="flex justify-between">
                        <span className="text-base font-bold mb-7 ml-3 md:ml-3">
                          Leaderboard Ranking
                        </span>
                        <div className="flex mr-3 md:mr-3">
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              fill="currentColor"
                              class="bi bi-dot"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                            </svg>
                          </span>
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              fill="currentColor"
                              class="bi bi-dot"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                            </svg>
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-between md:inline-block mb-4">
                        <span className="text-gray-600 text-sm lg:mr-32 ml-3 md:ml-3">
                          No
                        </span>
                        <span className="text-gray-600 lg:mr-32 text-sm">
                          Name
                        </span>
                        <span className="text-gray-600 text-sm pr-8 md:pr-0 ">
                          Score
                        </span>
                      </div>
                      <div className="flex items-center mb-6">
                        <span className="mr-3 md:mr-14 ml-3 md:ml-3">1</span>
                        <div className="bg-white flex items-center justify-evenly py-1 px-2 rounded-3xl">
                          <span className="md:mr-4 mr-2">
                            <img src="/img/contact-avatar.png" alt="" />
                          </span>
                          <span className="md:mr-16 text-sm mr-8 font-bold">
                            Martin Braitwhite
                          </span>
                          <div className="bg-secondary rounded-3xl px-2">
                            <span className=" text-white text-xs font-medium">
                              795 points
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center mb-6">
                        <span className="md:mr-16 mr-5 ml-3 md:ml-3">2</span>
                        <span className="md:mr-4 mr-2">
                          <img src="/img/contact-avatar.png" alt="" />
                        </span>
                        <span className="md:mr-20 mr-16 text-sm font-bold">
                          Jesse Lingard
                        </span>
                        <span className="md:ml-2 text-xs font-bold">
                          532 points
                        </span>
                      </div>
                      <div className="flex items-center mb-10">
                        <span className="md:mr-14 mr-3 ml-3">3</span>
                        <span className="ml-2 md:mr-4 mr-2">
                          <img src="/img/contact-avatar.png" alt="" />
                        </span>
                        <span className="md:mr-24 mr-16 text-sm font-bold">
                          Hudson Odoi
                        </span>
                        <span className="md:ml-6 ml-2 md:ml-0 text-xs font-bold">
                          441 points
                        </span>
                      </div>
                      <div className="text-center">
                        <a className="text-primary" href="">
                          See All Rank
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-4/12">
                <div>
                  <div className="card-1 py-10 px-8">
                    <div className="flex justify-between">
                      <span className="text-lg font-bold leading-5 text-blue-900 mb-5">
                        Schedule
                      </span>
                      <span>
                        <a href="#">View all</a>
                      </span>
                    </div>
                    <div className="bg-white rounded-3xl p-8 -mx-8 mb-7">
                      <div className="flex justify-between">
                        <span className="text-base font-bold leading-4 mb-10">
                          Research & Insight
                        </span>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            fill="currentColor"
                            class="bi bi-three-dots"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                          </svg>
                        </span>
                      </div>
                      <div className="btn-bg-color">
                        <a href="#">Class</a>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-base font-bold leading-4">
                          Database Marketing
                        </span>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            fill="currentColor"
                            class="bi bi-three-dots"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                          </svg>
                        </span>
                      </div>
                      <div className="mb-2">
                        <span className="text-xs text-gray-400">
                          2:11 PM, January 30
                        </span>
                      </div>
                      <div className="btn-bg-color-2">
                        <a href="#">Meeting</a>
                      </div>
                    </div>
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

export default overview;
