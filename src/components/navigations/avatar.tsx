import './index.css'
import { AuthenticatedBaseUser } from '../Base';
import { useState } from 'react';


interface AvatarMenuItemProps {
  icon: JSX.Element;
  label: string;
  link: string;
  onClick?: () => void;
}


interface AvatarProps {
  user?: AuthenticatedBaseUser;
  logOutUrl?: string;
  menuItems?: Array<AvatarMenuItemProps>;
}

export function Avatar({user, menuItems, logOutUrl}: AvatarProps) {

  const [showUserMenu, setShowUserMenu] = useState(false)

  const defaultMenuItems = [
    {icon: <svg className="icon feather" aria-hidden="true">
      <use href="#user">
        <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user" id="user" viewBox="0 0 24 24">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      </use>
    </svg>, label: "My profile", link: "#"},
    {icon: <svg className="icon feather" aria-hidden="true">
      <use href="#log-out">
        <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-log-out" id="log-out" viewBox="0 0 24 24">
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4m7 14 5-5-5-5m5 5H9"></path>
        </svg>
      </use>
    </svg>, label: "Logout", link: "#"}
  ]


  return (<>
    <div className={`nav-user dropdown user-dropdown mr-lg-2 ${showUserMenu ? "show" : ""}`}>
      <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded={showUserMenu ? "true" : "false"}
        onClick={()=>setShowUserMenu(!showUserMenu)}
        onBlur={(e)=>{
          if (!e.currentTarget.contains(e.relatedTarget)) {
            setShowUserMenu(false)
          }
        }}
      >
        <img className="user-avatar rounded-circle" src={user.photoUrl} alt=""/>
          <p className="user-name">{user.firstName} {user.lastName}</p>
      </button>
       <ul className={`dropdown-menu ${showUserMenu ? "show" : ""}`} aria-labelledby="dropdownMenuButton" >
        {((menuItems && menuItems.length>0) ? menuItems : defaultMenuItems).map((item, i) =>
          <li key={`menu-item-${i}`} className='dropdown-item'>
            <a href='#' style={{textDecorationThickness: 2}}>
              {item.icon}{item.label}
            </a>
          </li>
        )}
      </ul>
    </div>
  </>
  )
}
