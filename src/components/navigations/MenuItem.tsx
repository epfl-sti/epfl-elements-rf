import { useState } from "react";
import { ChevronDown, ChevronRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

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

const SIDE_MENU_FOLD_STATE_ITEM = "asidemenu-fold-state";

const slugify = (text: string) => {
    return text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-") // Replace spaces with -  
}

const getKey = (heading: React.ReactNode, key: number | string) => {
    return `asidemenu-${typeof heading === "string" ? slugify(heading) : slugify(key.toString())}-open`;
}

const getFoldState = (heading: React.ReactNode, key: number | string) => {
    const storedState = localStorage.getItem(SIDE_MENU_FOLD_STATE_ITEM);
    if (storedState) {
        const foldState = JSON.parse(storedState);
        return foldState[getKey(heading, key)] === true;
    }
    return false; // Default to closed if no state is stored
}

const setFoldState = (heading: React.ReactNode, key: number | string, isOpen: boolean) => {
    const storedState = localStorage.getItem(SIDE_MENU_FOLD_STATE_ITEM);
    const foldState = storedState ? JSON.parse(storedState) : {};
    foldState[getKey(heading, key)] = isOpen;
    localStorage.setItem(SIDE_MENU_FOLD_STATE_ITEM, JSON.stringify(foldState));
}

const MenuItem = ({ alias, heading, menus, submenus, useReactRouterLinks, foldable = false }: AsidemenuItemsProps) => {



    const [isOpen, setIsOpen] = useState(
        foldable ? getFoldState(heading, alias || "") : true
    );

    const toggleOpen = () => {
        if (!foldable) return;
        const newOpenState = !isOpen;
        setFoldState(heading, alias || "", newOpenState);
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

export default MenuItem;