import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthenticatedBaseUser } from '../Base';
import './index.css';


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
  customAvatarSectionHTML: JSX.Element;
  logoutUrl?: string;
  profileUrl?: string;
}


export function Avatar({ profileUrl, logoutUrl, user, customAvatarSectionHTML, menuItems, useReactRouterLinks }: AvatarProps) {

  const [showUserMenu, setShowUserMenu] = useState(false)

  const handleOutsideClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (!target.closest('.nav-user')) {
      setShowUserMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const defaultMenuItems = [
    {
      icon: <svg className="icon feather" aria-hidden="true">
        <use href="#user">
          <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user" id="user" viewBox="0 0 24 24">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </use>
      </svg>, label: "My profile", link: profileUrl, onClick: undefined
    },
    {
      icon: <svg className="icon feather" aria-hidden="true">
        <use href="#log-out">
          <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-log-out" id="log-out" viewBox="0 0 24 24">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4m7 14 5-5-5-5m5 5H9"></path>
          </svg>
        </use>
      </svg>, label: "Logout", link: logoutUrl, onClick: useReactRouterLinks ? () => window.location.href = logoutUrl : undefined
    }
  ] as Array<AvatarMenuItem>

  const itemsToUse = (menuItems && menuItems.length > 0) ? menuItems : defaultMenuItems



  return (
    <>

      <div className={`nav-user dropdown user-dropdown mr-lg-2 ${showUserMenu ? "show" : ""}`}>
        {customAvatarSectionHTML && customAvatarSectionHTML}
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded={showUserMenu ? "true" : "false"}
          onClick={() => setShowUserMenu(!showUserMenu)}
        >
          <img className="user-avatar rounded-circle" src={user.photoUrl} alt="" />
          <p className="user-name">{user.firstName} {user.lastName}</p>
        </button>
        <ul className={`dropdown-menu ${showUserMenu ? "show" : ""}`} aria-labelledby="dropdownMenuButton">
          {itemsToUse.map((item, i) => {

            return <li key={`menu-item-${i}`} className='dropdown-item' onClick={item.onClick ? (e) => {
              e.preventDefault();
              item.onClick()
            } : undefined}>
              {item.icon}
              {useReactRouterLinks ?
                <Link to={item.onClick ? '#' : item.link} style={{ textDecorationThickness: 2 }}>
                  {item.label}
                </Link> :
                <a href={item.onClick ? '#' : item.link} style={{ textDecorationThickness: 2 }}>
                  {item.label}
                </a>
              }
            </li>
          }
          )}
        </ul>
      </div>
    </>
  )
}

