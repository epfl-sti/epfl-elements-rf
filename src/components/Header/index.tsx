import { Avatar } from '../navigations/avatar'
import { Drawer } from '../Drawer/'
import { Logo } from '../Logo/'
import { Topmenu } from '../navigations/topmenu'
import { AuthenticatedBaseUser } from '../Base'
import '@epfl/epfl-elements-styles/dist/css/combined.css'
import { DrawerInnerProps } from '../Drawer/'

type HeaderProps = {
  topMenuItems?: Array<{ active: boolean, link: string, anchor: string }>;
  drawerContents?: DrawerInnerProps;
  user?: AuthenticatedBaseUser;
  logOutUrl?: string;
}


const LanguageSwitcher = () => {
  return (
    <nav className="nav-lang nav-lang-short ml-auto">
      <ul>
        <li>
          <span className="active" aria-label="Français">FR</span>
        </li>
        <li>
          <a href="#" aria-label="English">EN</a>
        </li>
      </ul>
    </nav>
  )

}



export function Header({ topMenuItems, drawerContents, user, logOutUrl }: HeaderProps) {


  return (
    <header role='banner' className='header'>
      {drawerContents && <Drawer contents={drawerContents} />}
      <Logo />
      <Topmenu menuItems={topMenuItems} />

      {user && <Avatar user={user} logOutUrl={logOutUrl} />}
      <LanguageSwitcher />


    </header>
  )
}
