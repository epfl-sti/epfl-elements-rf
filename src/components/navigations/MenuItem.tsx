import { useState } from "react";
import { ChevronDown, ChevronRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { safeLocalStorage, slugify } from "../utils/storage";

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

const getKey = (heading: React.ReactNode, alias: string): string => {
    const identifier = typeof heading === "string" ? slugify(heading) : alias;

    if (!identifier) {
        console.warn('MenuItem: Neither string heading nor alias provided. Using fallback key.');
        return `asidemenu-fallback-${Date.now()}-open`;
    }

    return `asidemenu-${identifier}-open`;
}

const getFoldState = (heading: React.ReactNode, alias: string): boolean => {
    try {
        const storedState = safeLocalStorage.getItem(SIDE_MENU_FOLD_STATE_ITEM);
        if (storedState) {
            const foldState = JSON.parse(storedState);
            return foldState[getKey(heading, alias)] === true;
        }
    } catch (error) {
        console.error('Failed to parse fold state from localStorage:', error);
    }
    return false; // Default to closed if no state is stored
}

const setFoldState = (heading: React.ReactNode, alias: string, isOpen: boolean): void => {
    try {
        const storedState = safeLocalStorage.getItem(SIDE_MENU_FOLD_STATE_ITEM);
        const foldState = storedState ? JSON.parse(storedState) : {};
        foldState[getKey(heading, alias)] = isOpen;
        safeLocalStorage.setItem(SIDE_MENU_FOLD_STATE_ITEM, JSON.stringify(foldState));
    } catch (error) {
        console.error('Failed to save fold state to localStorage:', error);
    }
}

const MenuItem = ({ alias, heading, menus, submenus, useReactRouterLinks, foldable = false }: AsidemenuItemsProps) => {


    const [isOpen, setIsOpen] = useState(
        foldable ? getFoldState(heading, alias) : true
    );

    const toggleOpen = () => {
        if (!foldable) return;
        const newOpenState = !isOpen;
        setFoldState(heading, alias, newOpenState);
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