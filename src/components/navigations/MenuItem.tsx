import { ChevronDown, ChevronRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { useFoldState } from "../utils/storage";

export type AsindeMenuSingleItemProps = {
    link?: string;
    anchor?: React.ReactNode;
};

export type AsidemenuItemsProps = {
    heading?: React.ReactNode;
    alias?: string; // Optional alias for localStorage key generation if heading is not a string
    menus?: Array<AsindeMenuSingleItemProps>;
    submenus?: Array<AsidemenuItemsProps>;
    useReactRouterLinks?: boolean;
    foldable?: boolean;
};

const MenuItem = ({ alias, heading, menus, submenus, useReactRouterLinks, foldable = false }: AsidemenuItemsProps) => {
    const { isOpen, toggle } = useFoldState(heading, alias, foldable);

    const chevronStyle = {
        marginTop: "-2px",
        marginRight: "5px",
    };

    return (
        <li>
            {foldable ? (
                <a onClick={toggle}>
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

export default MenuItem;