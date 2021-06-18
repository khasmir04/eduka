import Image from 'next/image';
import { useRouter } from 'next/router'

function sidebar({isVisible}) {

  const isActive = (r) => {
    if (r === useRouter().pathname){
      return " active";
    }
    else return "";
  }

  // setActiveMenu(currentPage);
    return (
        <aside id="side-menu" className={`border-r-2 border-c_light flex flex-col bg-white ` + (isVisible ? '!left-[-220px]' : '!left-0')}>
        <div className="logo__image text-center pt-10 pb-12">
          <Image className="logo__img" src="/img/logo.png" alt="logo-img" width="137" height="24"/>
        </div>
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item mb-4">
            <a href="/overview" className={'nav-link text-tertiary hover:text-primary hover:!bg-[#f1f3f] py-3 pr-3 pl-10 flex leading-6 align-middle items-center ' + isActive("/overview")}>
              <i className="bi bi-speedometer mr-4 text-2xl leading-6"></i>
              <span className="inline text-base leading-4 hover:text-primary">Dashboard</span>
              <p className="notif"></p>
            </a>
          </li>
          <li className="nav-item mb-4">
            <a href="#" className={'nav-link text-tertiary hover:text-primary hover:!bg-[#f1f3f] py-3 pr-3 pl-10 flex leading-6 align-middle items-center ' + isActive("/ewallet")}>
              <i className="bi bi-wallet-fill mr-4 text-2xl leading-6"></i>
              <span className="inline text-base leading-4 hover:text-primary">E-Wallet</span>
              <p className="notif"></p>
            </a>
          </li>
          <li className="nav-item mb-4">
            <a href="/chat" className={'nav-link text-tertiary hover:text-primary hover:!bg-[#f1f3f] py-3 pr-3 pl-10 flex leading-6 align-middle items-center ' + isActive("/chat")}>
              <i className="bi bi-chat-square-text-fill mr-4 text-2xl leading-6"></i>
              <span className="inline text-base leading-4 hover:text-primary">Chat</span>
              <p className="notif active">1</p>
            </a>
          </li>
          <li className="nav-item mb-4">
            <a href="/profile" className={'nav-link text-tertiary hover:text-primary hover:!bg-[#f1f3f] py-3 pr-3 pl-10 flex leading-6 align-middle items-center ' + isActive("/profile")}>
              <i className="bi bi-person-fill mr-4 text-2xl leading-6"></i>
              <span className="inline text-base leading-4 hover:text-primary">Profile</span>
              <p className="notif"></p>
            </a>
          </li>
          <li className="nav-item mb-4">
            <a href="#" className={'nav-link text-tertiary hover:text-primary hover:!bg-[#f1f3f] py-3 pr-3 pl-10 flex leading-6 align-middle items-center ' + isActive("/transaction")}>
              <i className="bi bi-folder-fill mr-4 text-2xl leading-6"></i>
              <span className="inline text-base leading-4 hover:text-primary">Transaction</span>
              <p className="notif"></p>
            </a>
          </li>
        </ul>
        <ul className="nav nav-pills flex-column mt-auto pb-10">
          <li className="nav-item mb-4">
            <a href="/settings" className={'nav-link text-tertiary hover:text-primary hover:!bg-[#f1f3f] py-3 pr-3 pl-10 flex leading-6 align-middle items-center ' + isActive("/settings")}>
              <i className="bi bi-gear-fill mr-4 text-2xl leading-6"></i>
              <span className="inline text-base leading-4 hover:text-primary">Settings</span>
              <p className="notif"></p>
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className={'nav-link text-tertiary hover:text-primary hover:!bg-[#f1f3f] py-3 pr-3 pl-10 flex leading-6 align-middle items-center ' + isActive("/logout")}>
              <i className="bi bi-box-arrow-right mr-4 text-2xl leading-6"></i>
              <span className="inline text-base leading-4 hover:text-primary">Logout</span>
              <p className="notif"></p>
            </a>
          </li>
        </ul>
      </aside>
    )
}

export default sidebar
