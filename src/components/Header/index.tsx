import '@epfl-sti/epfl-elements-styles/dist/css/combined.css'
import { AuthenticatedBaseUser } from '../Base'
import { Drawer, DrawerInnerProps } from '../Drawer/'
import { Logo } from '../Logo/'
import { Avatar, AvatarMenuItem } from '../navigations/avatar'
import { Language } from '../navigations/language'
import LoginButton from '../navigations/LoginButton'
import { Topmenu } from '../navigations/topmenu'
import { Search, SearchMobile } from '../Search'

type HeaderProps = {
  topMenuItems?: Array<{ active?: boolean; link: string; anchor: string }>;
  useReactRouterLinks?: boolean;
  drawerContents?: DrawerInnerProps;
  user?: AuthenticatedBaseUser;
  logoutUrl?: string;
  profileUrl?: string;
  loginUrl?: string;
  avatarMenuItems?: Array<AvatarMenuItem>;
  activeLanguage?: string;
  customAvatarSectionHTML?: JSX.Element;
  loginAction?: (e: React.MouseEvent) => void;
  searchAction?: string;
  searchPlaceholder?: string;
  searchLabel?: string;
  searchSubmitLabel?: string;
  onSearchSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  showSearch?: boolean;
};

export function Header({
  logoutUrl,
  profileUrl,
  customAvatarSectionHTML,
  useReactRouterLinks,
  topMenuItems,
  drawerContents,
  user,
  avatarMenuItems,
  activeLanguage,
  loginUrl,
  loginAction,
  searchAction = '#',
  searchPlaceholder = 'Search',
  searchLabel = 'Search the site',
  searchSubmitLabel = 'Submit',
  onSearchSubmit,
  showSearch = true,
}: HeaderProps) {
  return (
    <header role="banner" className="header">
      {drawerContents && <Drawer contents={drawerContents} />}
      <Logo />
      <Topmenu menuItems={topMenuItems} />

      {/* Search components - automatically responsive */}
      {showSearch && (
        <>
          <Search
            action={searchAction}
            placeholder={searchPlaceholder}
            label={searchLabel}
            submitLabel={searchSubmitLabel}
            onSubmit={onSearchSubmit}
          />
          <SearchMobile
            action={searchAction}
            placeholder={searchPlaceholder}
            label={searchLabel}
            onSubmit={onSearchSubmit}
          />
        </>
      )}

      {user ? (
        <Avatar
          user={user}
          customAvatarSectionHTML={customAvatarSectionHTML}
          menuItems={avatarMenuItems}
          useReactRouterLinks={useReactRouterLinks}
          logoutUrl={logoutUrl}
          profileUrl={profileUrl}
        />
      ) : (
        <LoginButton loginURL={loginUrl} loginAction={loginAction} />
      )}
      {activeLanguage !== undefined ? <Language active={activeLanguage} /> : <div style={{ width: "50px" }}></div>}
    </header>
  );
}
