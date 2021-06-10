import Image from 'next/image';

function sidebar() {
    return (
        <aside id="side-menu" className={`border border-l-0 border-t-0 border-b-0 border-c_light flex flex-col bg-white`}>
        <div className="logo__image text-center pt-10 pb-12">
          <Image className="logo__img" src="/img/logo.png" alt="logo-img" width="137" height="24"/>
        </div>
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item mb-4">
            <a href="#" className="nav-link py-3 pr-3 pl-10 flex leading-6 align-middle items-center">
              <i className="bi bi-speedometer mr-4 text-2xl leading-6 text-tertiary"></i>
              <span className="inline text-base leading-4 text-tertiary">Dashboard</span>
              <p className="notif"></p>
            </a>
          </li>
          <li className="nav-item mb-4">
            <a href="#" className="nav-link py-3 pr-3 pl-10 flex leading-6 align-middle items-center">
              <i className="bi bi-wallet-fill mr-4 text-2xl leading-6 text-tertiary"></i>
              <span className="inline text-base leading-4 text-tertiary">E-Wallet</span>
              <p className="notif"></p>
            </a>
          </li>
          <li className="nav-item mb-4">
            <a href="#" className="nav-link py-3 pr-3 pl-10 flex leading-6 align-middle items-center active">
              <i className="bi bi-chat-square-text-fill mr-4 text-2xl leading-6 text-tertiary"></i>
              <span className="inline text-base leading-4 text-tertiary">Chat</span>
              <p className="notif active">1</p>
            </a>
          </li>
          <li className="nav-item mb-4">
            <a href="#" className="nav-link py-3 pr-3 pl-10 flex leading-6 align-middle items-center">
              <i className="bi bi-person-fill mr-4 text-2xl leading-6 text-tertiary"></i>
              <span className="inline text-base leading-4 text-tertiary">Profile</span>
              <p className="notif"></p>
            </a>
          </li>
          <li className="nav-item mb-4">
            <a href="#" className="nav-link py-3 pr-3 pl-10 flex leading-6 align-middle items-center">
              <i className="bi bi-folder-fill mr-4 text-2xl leading-6 text-tertiary"></i>
              <span className="inline text-base leading-4 text-tertiary">Transaction</span>
              <p className="notif"></p>
            </a>
          </li>
        </ul>
        <ul className="nav nav-pills flex-column mt-auto pb-10">
          <li className="nav-item mb-4">
            <a href="#" className="nav-link py-3 pr-3 pl-10 flex leading-6 align-middle items-center">
              <i className="bi bi-gear-fill mr-4 text-2xl leading-6 text-tertiary"></i>
              <span className="inline text-base leading-4 text-tertiary">Setting</span>
              <p className="notif"></p>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link py-3 pr-3 pl-10 flex leading-6 align-middle items-center">
              <i className="bi bi-box-arrow-right mr-4 text-2xl leading-6 text-tertiary"></i>
              <span className="inline text-base leading-4 text-tertiary">Logout</span>
              <p className="notif"></p>
            </a>
          </li>
        </ul>
      </aside>
    )
}

export default sidebar
