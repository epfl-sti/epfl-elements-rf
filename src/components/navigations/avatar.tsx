import './index.css'
import { AuthenticatedBaseUser } from '../Base';
import { useState } from 'react';
import { Link } from 'react-router-dom';


export interface AvatarMenuItem {
  icon: JSX.Element;
  label: string;
  link: string;
  onClick?: () => void;
}

interface AvatarProps {
  user: AuthenticatedBaseUser;
  menuItems?: Array<AvatarMenuItem>;
  useReactRouterLinks?: boolean;
}

interface LoginButtonProps {
  loginURL?: string;
}

export function Avatar({user, menuItems, useReactRouterLinks}: AvatarProps) {

  const [showUserMenu, setShowUserMenu] = useState(false)

  const defaultMenuItems = [
    {icon: <svg className="icon feather" aria-hidden="true">
      <use href="#user">
        <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user" id="user" viewBox="0 0 24 24">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      </use>
    </svg>, label: "My profile", link: "/profile", onClick: ()=>{return} },
    {icon: <svg className="icon feather" aria-hidden="true">
      <use href="#log-out">
        <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-log-out" id="log-out" viewBox="0 0 24 24">
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4m7 14 5-5-5-5m5 5H9"></path>
        </svg>
      </use>
    </svg>, label: "Logout", link: "/logout", onClick: ()=>{return} }
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
          <li key={`menu-item-${i}`} className='dropdown-item' onClick={item.onClick ? item.onClick : undefined}>
            {useReactRouterLinks ? <a href={item.onClick ? '#': item.link} style={{textDecorationThickness: 2}}>
              {item.icon}{item.label}
            </a>:
            <Link to={item.onClick ? '#': item.link} className='dropdown-item'>
              {item.icon}{item.label}
            </Link>
            }
          </li>
        )}
      </ul>
    </div>
  </>
  )
}


export function LoginButton({loginURL}: LoginButtonProps) {

  return (
    loginURL ? 
    <div className="nav-user user-login mr-lg-2">
     <a href={loginURL} className="user-login-link">
        <svg className="icon feather" aria-hidden="true">
          <use href="#user">
            <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user" id="user" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </use>
        </svg>
        <span className="label">Login</span>
      </a>
    </div>
    :
    <div style={{width: '50px'}}>
     
    </div>
  )
}