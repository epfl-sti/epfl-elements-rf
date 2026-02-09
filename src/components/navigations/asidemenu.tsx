
import { Link } from "react-router-dom";
import { Loader } from "../Loader";
import MenuItem, { AsidemenuItemsProps } from "./MenuItem";

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
        {...item}
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
