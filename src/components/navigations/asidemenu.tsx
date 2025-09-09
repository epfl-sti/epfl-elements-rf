import { useState } from "react";
import { ChevronDown, ChevronRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { Loader } from "../Loader";

export type AsindeMenuSingleItemProps = {
  link?: string;
  anchor?: string;
};

export type AsidemenuItemsProps = {
  heading?: React.ReactNode;
  menus?: Array<AsindeMenuSingleItemProps>;
  submenus?: Array<AsidemenuItemsProps>;
  useReactRouterLinks?: boolean;
  foldable?: boolean;
};

export type AsidemenuProps = {
  isHome?: boolean;
  isLoading?: boolean;
  menuItems?: Array<AsidemenuItemsProps>;
  homeLink?: string;
  homeAnchor?: string;
  feedBackEmail?: string;
  useReactRouterLinks?: boolean;
  foldable?: boolean;
};

export const MenuItem = ({ heading, menus, submenus, useReactRouterLinks, foldable = false }: AsidemenuItemsProps) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleOpen = () => {
    if (!foldable) return;
    setIsOpen(!isOpen);
  };

  const chevronStyle = {
    marginTop: "-2px",
    marginRight: "5px",
  };

  return (
    <li>
      {foldable ? (
        <a onClick={toggleOpen}>
          {isOpen ? <ChevronDown style={chevronStyle} /> : <ChevronRight style={chevronStyle} />} {heading}
        </a>
      ) : (
        <a>{heading}</a>
      )}{" "}
      { }
      {isOpen && (
        <ul>
          {menus &&
            menus.map((menu, i) => (
              <li className={menu.link === document.location.pathname ? "active" : undefined} key={menu.link + i}>
                {useReactRouterLinks ? (
                  <Link to={menu.link}>{menu.anchor}</Link>
                ) : (
                  <a href={menu.link}>{menu.anchor}</a>
                )}
              </li>
            ))}
          {submenus &&
            submenus.map((submenu: AsidemenuItemsProps, j) => (
              <li key={j}>
                <a>{submenu.heading}</a> { }
                <ul>
                  {submenu.menus.map((menu, i) => (
                    <li className={menu.link === document.location.pathname ? "active" : undefined} key={menu.link + i}>
                      {useReactRouterLinks ? (
                        <Link to={menu.link}>{menu.anchor}</Link>
                      ) : (
                        <a href={menu.link}>{menu.anchor}</a>
                      )}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
        </ul>
      )}
    </li>
  );
};

export function Asidemenu({
  isHome,
  isLoading,
  menuItems,
  homeAnchor,
  homeLink,
  feedBackEmail,
  useReactRouterLinks,
  foldable,
}: AsidemenuProps) {
  function getMenuItems() {
    return (menuItems || []).map((item, i) => (
      <MenuItem
        key={i}
        heading={item.heading}
        menus={item.menus}
        submenus={item.submenus}
        foldable={foldable}
        useReactRouterLinks={useReactRouterLinks}
      />
    ));
  }

  return (
    <aside className="nav-aside-wrapper">
      <nav id="nav-aside" className="nav-aside" role="navigation" aria-describedby="nav-aside-title">
        <h2 className="h5 sr-only-xl">On the same topic</h2>
        <ul>
          {!isLoading && (
            <li className={isHome ? "active" : ""}>
              {useReactRouterLinks ? <Link to={homeLink}>{homeAnchor}</Link> : <a href={homeLink}>{homeAnchor}</a>}
            </li>
          )}
          {isLoading ? <Loader /> : getMenuItems()}
        </ul>
      </nav>
      {feedBackEmail && (
        <div className="">
          <a className="btn btn-primary btn-block" href={`mailto:${feedBackEmail}`}>
            <i className="fas fa-bullhorn" /> Provide feedback
          </a>
        </div>
      )}
    </aside>
  );
}
