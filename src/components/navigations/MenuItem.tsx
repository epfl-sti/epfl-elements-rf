import { useState } from "react";
import { ChevronDown, ChevronRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";


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


const MenuItem = ({ heading, menus, submenus, useReactRouterLinks, foldable = false }: AsidemenuItemsProps) => {
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

export default MenuItem;