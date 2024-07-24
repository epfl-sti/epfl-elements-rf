import { Avatar, LoginButton } from '../navigations/avatar'
import { Drawer } from '../Drawer/'
import { Logo } from '../Logo/'
import { Topmenu } from '../navigations/topmenu'
import { AuthenticatedBaseUser } from '../Base'
import '@epfl/epfl-elements-styles/dist/css/combined.css'
import { DrawerInnerProps } from '../Drawer/'
import { AvatarMenuItem } from '../navigations/avatar'
import { Language } from '../navigations/language'

type HeaderProps = {
  topMenuItems?: Array<{ active?: boolean, link: string, anchor: string }>;
  useReactRouterLinks?: boolean;
  drawerContents?: DrawerInnerProps;
  user?: AuthenticatedBaseUser;
  logoutUrl?: string;
  profileUrl?: string;
  loginUrl?: string;
  avatarMenuItems?: Array<AvatarMenuItem>;
  activeLanguage?: string;
  customAvatarSectionHTML?: JSX.Element;
}

export function Header({logoutUrl, profileUrl, customAvatarSectionHTML,  useReactRouterLinks, topMenuItems, drawerContents, user, avatarMenuItems, activeLanguage, loginUrl }: HeaderProps) {


  return (
    <header role='banner' className='header'>
      {drawerContents && <Drawer contents={drawerContents} />}
      <Logo />
      <Topmenu menuItems={topMenuItems} />

      {user ? <Avatar 
        user={user}
        customAvatarSectionHTML={customAvatarSectionHTML}
        menuItems={avatarMenuItems}
        useReactRouterLinks={useReactRouterLinks}
        logoutUrl={logoutUrl}
        profileUrl={profileUrl}
        />
        :
        <LoginButton loginURL={loginUrl} />}
      {(activeLanguage !== undefined) ? <Language active={activeLanguage} /> : <div style={{width: '50px'}}></div>}
      
    </header>
  )
}
