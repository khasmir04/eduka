import React,{useState} from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

function login() {
	const [name, setName] = useState()
	const [password, setPassword] = useState()

	const router = useRouter()
	const href = "/overview"

	const proceedToDashboard = (e) => {
		e.preventDefault()
		if(name=="devkj@gmail.com" && password=="devkim"){
			router.push(href)
		} else {
      alert("Log In Failed. Please check username and password.")
    }
  }

  const proceedToRecovery = (e) => {
		router.push("/auth/recovery")
  }

  return (
  <div>
    <Head>
      <title>EduKa | Login</title>
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
    </Head>
    <div className="lg:flex">
      <div className="lg:w-1/2 xl:max-w-screen-sm">
        <div className="py-12 bg-indigo-100 lg:bg-white flex justify-center lg:justify-start lg:px-12">
          <div className="cursor-pointer flex items-center">
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
        </div>
        <div className="mt-10 md:mt-32 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
          <h2 className="text-center text-4xl text-primary font-display font-semibold lg:text-left xl:text-5xl xl:text-bold">Back to School!</h2>
          <div className="mt-12">
            <form>
              <div>
                <div className="text-sm font-bold text-gray-700 tracking-wide mb-2">Email</div>
                <input className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" type="text" placeholder="khaz@gmail.com" onChange={(event) => setName(event.target.value)} />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <div className="text-sm font-bold text-gray-700 tracking-wide mb-2">
                    Password
                  </div>
                  <div>
                    <a className="text-xs font-display font-semibold text-indigo-600 hover:text-indigo-800 cursor-pointer" onClick={proceedToRecovery}>
                      Forgot Password?
                    </a>
                  </div>
                </div>
                <input className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" type="password" placeholder="Enter your password" onChange={(event) => setPassword(event.target.value)} />
              </div>
              <div className="mt-10">
              {/* <Link href="/dashboard" onClick={e => (!name || !password) ? e.preventDefault() : null}>
                <button className="bg-secondary text-gray-100 p-4 w-full rounded-full tracking-wide font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-pink-600 shadow-lg" type="submit">Log In</button>
              </Link> */}
              <div onClick={proceedToDashboard}>
                <button className="bg-secondary text-gray-100 p-4 w-full rounded-full tracking-wide font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-pink-600 shadow-lg" type="submit">Log In</button>
              </div>
              </div>
            </form>
            <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
              Don't have an account ? <a href="/auth/register" className="cursor-pointer text-indigo-600 hover:text-indigo-800">Sign up</a>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex items-center justify-center bg-indigo-100 flex-1 h-screen">
        <div className="max-w-xs transform duration-200 hover:scale-110 cursor-pointer">
          <svg className="w-5/6 mx-auto" xmlns="http://www.w3.org/2000/svg" id="f080dbb7-9b2b-439b-a118-60b91c514f72" data-name="Layer 1" viewBox="0 0 528.71721 699.76785">
            <title>Login</title>
            <rect y="17.06342" width={444} height={657} fill="#535461" />
            <polygon points="323 691.063 0 674.063 0 17.063 323 0.063 323 691.063" fill="#7f9cf5" />
            <circle cx={296} cy="377.06342" r={4} fill="#535461" />
            <polygon points="296 377.66 298.773 382.463 301.545 387.265 296 387.265 290.455 387.265 293.227 382.463 296 377.66" fill="#535461" />
            <polygon points="337 691.063 317.217 691 318 0.063 337 0.063 337 691.063" fill="#7f9cf5" />
            <g opacity="0.1">
              <polygon points="337.217 691 317.217 691 318.217 0 337.217 0 337.217 691" fill="#fff" />
            </g>
            <circle cx={296} cy="348.06342" r={13} opacity="0.1" />
            <circle cx={296} cy="346.06342" r={13} fill="#535461" />
            <line x1="52.81943" y1="16.10799" x2="52.81943" y2="677.15616" fill="none" stroke="#000" strokeMiterlimit={10} strokeWidth={2} opacity="0.1" />
            <line x1="109.81943" y1="12.10799" x2="109.81943" y2="679.15616" fill="none" stroke="#000" strokeMiterlimit={10} strokeWidth={2} opacity="0.1" />
            <line x1="166.81943" y1="9.10799" x2="166.81943" y2={683} fill="none" stroke="#000" strokeMiterlimit={10} strokeWidth={2} opacity="0.1" />
            <line x1="223.81943" y1="6.10799" x2="223.81943" y2="687.15616" fill="none" stroke="#000" strokeMiterlimit={10} strokeWidth={2} opacity="0.1" />
            <line x1="280.81943" y1="3.10799" x2="280.81943" y2={688} fill="none" stroke="#000" strokeMiterlimit={10} strokeWidth={2} opacity="0.1" />
            <ellipse cx="463.21721" cy="95.32341" rx="39.5" ry={37} fill="#2f2e41" />
            <path d="M683.8586,425.93948l-10,14s-48,10-30,25,44-14,44-14l14-18Z" transform="translate(-335.6414 -100.11607)" fill="#ffb8b8" />
            <path d="M735.8586,266.93948s-13,0-16,18-6,78-6,78-42,55-35,62,15,20,20,18,48-61,48-61Z" transform="translate(-335.6414 -100.11607)" fill="#fb2b76" />
            <path d="M735.8586,266.93948s-13,0-16,18-6,78-6,78-42,55-35,62,15,20,20,18,48-61,48-61Z" transform="translate(-335.6414 -100.11607)" opacity="0.1" />
            <path d="M775.8586,215.93948s-1,39-13,41-8,15-8,15,39,23,65,0l5-12s-18-13-10-31Z" transform="translate(-335.6414 -100.11607)" fill="#ffb8b8" />
            <path d="M708.8586,455.93948s-59,110-37,144,55,104,60,104,33-14,31-23-32-76-40-82-4-22-3-23,34-54,34-54-1,84,3,97-1,106,4,110,28,11,32,5,16-97,8-118l15-144Z" transform="translate(-335.6414 -100.11607)" fill="#2f2e41" />
            <path d="M762.8586,722.93948l-25,46s-36,26-11,30,40-6,40-6l22-16v-46Z" transform="translate(-335.6414 -100.11607)" fill="#2f2e41" />
            <path d="M728.8586,696.93948l13,31s5,13,0,16-19,21-10,23a29.29979,29.29979,0,0,0,5.49538.5463,55.56592,55.56592,0,0,0,40.39768-16.43936l8.10694-8.10694s-27.77007-63.94827-27.385-63.47414S728.8586,696.93948,728.8586,696.93948Z" transform="translate(-335.6414 -100.11607)" fill="#2f2e41" />
            <circle cx="465.21721" cy="105.82341" r={34} fill="#ffb8b8" />
            <path d="M820.3586,253.43948l-10.5,10.5s-32,12-47,0c0,0,5.5-11.5,5.5-10.5s-43.5,7.5-47.5,25.5,3,49,3,49-28,132-17,135,114,28,113,9,8-97,8-97l35-67s-5-22-17-29S820.3586,253.43948,820.3586,253.43948Z" transform="translate(-335.6414 -100.11607)" fill="#fb2b76" />
            <path d="M775.8586,448.93948l-13,8s-50,34-24,40,41-24,41-24l10-12Z" transform="translate(-335.6414 -100.11607)" fill="#ffb8b8" />
            <path d="M849.8586,301.93948l9,9s6,84-6,101-67,63-70,60-22-18-18-20,57.18287-57.56942,57.18287-57.56942l-4.18287-77.43058Z" transform="translate(-335.6414 -100.11607)" opacity="0.1" />
            <path d="M853.8586,298.93948l9,9s6,84-6,101-67,63-70,60-22-18-18-20,57.18287-57.56942,57.18287-57.56942l-4.18287-77.43058Z" transform="translate(-335.6414 -100.11607)" fill="#fb2b76" />
            <path d="M786.797,157.64461s-11.5575-4.20273-27.31774,4.72807l8.40546,2.10136s-12.60819,1.05068-14.18421,17.8616h5.77875s-3.67739,14.70955,0,18.91228l2.364-4.4654,6.82943,13.65887,1.576-6.82944,3.15205,1.05069,2.10137-11.03217s5.25341,7.88012,9.45614,8.40546V195.2065s11.5575,13.13352,15.23489,12.60818l-5.25341-7.35477,7.35477,1.576-3.152-5.25341,18.91228,5.25341-4.20273-5.25341,13.13352,4.20273,6.3041,2.6267s8.9308-20.4883-3.67739-34.67251S798.61712,151.60318,786.797,157.64461Z" transform="translate(-335.6414 -100.11607)" fill="#2f2e41" />
          </svg>
        </div>
      </div>
    </div>
  </div>
  )
}

export default login
