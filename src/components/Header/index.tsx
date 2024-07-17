import { Avatar } from '../navigations/avatar'
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
  drawerContents?: DrawerInnerProps;
  user?: AuthenticatedBaseUser;
  logOutUrl?: string;
  avatarMenuItems?: Array<AvatarMenuItem>;
  activeLanguage?: string;
}

export function Header({ topMenuItems, drawerContents, user, avatarMenuItems, activeLanguage }: HeaderProps) {


  return (
    <header role='banner' className='header'>
      {drawerContents && <Drawer contents={drawerContents} />}
      <Logo />
      <Topmenu menuItems={topMenuItems} />

      {user && <Avatar user={user} menuItems={avatarMenuItems} />}
      {(activeLanguage !== undefined) ? <Language active={activeLanguage} /> : <div style={{width: '50px'}}></div>}

    </header>
  )
}
