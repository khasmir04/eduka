import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from 'next/router'


export default function Recovery() {
  const router = useRouter()
  const [email, setEmail] = useState()

  const proceedToLogin = (e) =>{
    e.preventDefault()
    if(!email==""){
      router.push("/")
    }
  }

  return (
    <>
      <Head>
        <title>EduKa | Recover account</title>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
      </Head>
      <section id="register" className="h-screen w-screen bg-indigo-100">
        <div className="container mx-auto px-4 h-full">
          <div className="flex content-center items-center justify-center h-full">
            <div className="w-full lg:w-5/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0">
              <div className="cursor-pointer flex items-center absolute top-8 left-8">
                <div>
                  <svg className="w-10 text-indigo-500" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 225 225" style={{enableBackground: 'new 0 0 225 225'}} xmlSpace="preserve">
                    <style type="text/css" dangerouslySetInnerHTML={{__html: "\n.st0{fill:none;stroke:currentColor;stroke-width:20;stroke-linecap:round;stroke-miterlimit:3;}\n" }} />
                    <g transform="matrix( 1, 0, 0, 1, 0,0) ">
                      <g>
                        <path id="Layer0_0_1_STROKES" className="st0" d="M173.8,151.5l13.6-13.6 M35.4,89.9l29.1-29 M89.4,34.9v1 M137.4,187.9l-0.6-0.4     M36.6,138.7l0.2-0.2 M56.1,169.1l27.7-27.6 M63.8,111.5l74.3-74.4 M87.1,188.1L187.6,87.6 M110.8,114.5l57.8-57.8" />
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="text-2xl text-primary tracking-wide ml-2 font-semibold">EduKa</div>
              </div>
                <div className="rounded-t mb-0 px-6 py-6 pt-20">
                  <div className="text-center mb-5">
                    <div className="text-primary text-center mb-3 font-bold text-4xl xl:text-5xl">
                      <small>Recover Account</small>
                    </div>
                  </div>
                  <hr className="mt-6 border-b-1 border-blueGray-300" />
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                  <div className="text-blueGray-400 text-left mb-3 font-bold">
                    <small >Uh oh! It seems like you have forgotten your password, please enter your email address and we will send you a link to recover your account.</small>
                  </div>
                  <form>
                    <div className="relative w-full mb-3">
                      <label
                        className="text-sm font-bold text-gray-700 tracking-wide block mb-2"
                        htmlFor="grid-password"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Email"
                        onChange={(event) => setEmail(event.target.value)}
                      />
                    </div>

                    <div className="text-center mt-6">
                      <button
                        className="bg-secondary text-gray-100 p-4 w-full rounded-full tracking-wide font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-pink-600 shadow-lg"
                        type="button"
                        onClick={proceedToLogin}
                      >
                        Send link to my Email
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
