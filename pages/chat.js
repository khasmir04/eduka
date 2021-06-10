import Head from 'next/head'
import Sidebar from "../components/Sidebar"
import Header from "../components/Header"

function clickAlert(){
    alert("I am working")
}

function chat() {
  return (
    <div>
      <Head>
        <title>Edu | Chat</title>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
      </Head>
      <Header toggleSidebar={clickAlert}>
      </Header>
      <Sidebar>
      </Sidebar>
      <section id="inbox">
        <div className="inbox-container h-full">
          <div className="flex flex-wrap h-full">
            <div className="w-3/12 h-full p-0 overflow-hidden">
              <div id="contacts">
                <div className="contacts__header p-6 border border-l-0 border-t-0 border-b-0 border-c_light">
                  <div className="contacts__header__inbox flex justify-between items-center mb-3">
                    <div className="flex items-center">
                      <i className="bi bi-envelope-fill inline md:hidden text-tertiary fs-4 lh-24"></i>
                      <p className="hidden md:block fw-bold m-0 me-2">Inbox</p>
                      <p className="notif-inbox btn bg-tag rad rad-circle md:hidden text-secondary pe-2 ps-2 mb-0 me-1 pt-0 pb-0 border-0 text-nowrap">4</p>
                      <p className="btn bg-tag rad rad-12 hidden md:inline text-secondary pt-1 pe-2 pb-1 ps-2 mb-0 text-nowrap">4 New</p>
                    </div>
                    <i className="bi bi-plus-circle-fill btn text-primary fs-5 p-0 border-0 lh-1 md:hidden"></i>
                    <i className="bi bi-plus-circle-fill btn text-primary fs-1 p-0 border-0 lh-1 hidden md:inline"></i>
                  </div>
                  <div className="contacts__header__options btn-group flex flex-wrap justify-content-center bg-c-light rounded-3 p-2">
                    <div className="col-lg-6">
                      <input type="radio" className="btn-check" name="btnradio" id="rdbOpen" autocomplete="off" checked/>
                      <label className="btn btn-outline-c-white border-0 fw-bold w-full" for="rdbOpen">Open</label>
                    </div>
                    <div className="col-lg-6">
                      <input type="radio" className="btn-check" name="btnradio" id="rdbArchived" autocomplete="off"/>
                      <label className="btn btn-outline-c-white border-0 fw-bold w-full" for="rdbArchived">Archived</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default chat
