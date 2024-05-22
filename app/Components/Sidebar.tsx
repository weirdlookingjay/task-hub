"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faDashboard,
    faBarsProgress,
    faLayerGroup,
    faFeather,
    faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import DarkMode from "./Darkmode";
import { useGlobalContextProvider } from "../contextAPI";

interface menuItems {
    name: string;
    icon: any;
    isSelected: boolean;
}

function Sidebar() {
    const [menuItems, setMenuItems] = useState([
        { name: "Dasboard", icon: faDashboard, isSelected: true },
        { name: "Projects", icon: faBarsProgress, isSelected: false },
        { name: "Categories", icon: faLayerGroup, isSelected: false },
    ]);

    function updateItemsSelection(indexItem: number) {
        const copyMenuItems = menuItems.map((singleMenuItem, index) => {
            if (indexItem === index) {
                return { ...singleMenuItem, isSelected: true };
            }
            return { ...singleMenuItem, isSelected: false };
        });
        setMenuItems(copyMenuItems);
    }

    const { isDark, setIsDark } = useGlobalContextProvider();

    return (
        <div className="poppins border border-gray-200 w-[330px] p-6 py-16 flex flex-col gap-3 justify-between">
            {/* Logo */}
            <div className="flex gap-2 items-center">
                <FontAwesomeIcon
                    className="bg-mainColor p-3 text-sm h-[30px] text-white rounded-md"
                    icon={faFeather}
                />
                <span className="text-2xl font-light">
                    <span className="font-bold text-mainColor">Task</span> Hub
                </span>
            </div>
            {/* Menu */}
            <div className="flex text-[15px] flex-col gap-3 w-[182px] h-1/3 pl-5">
                {menuItems.map((menuItem, menuItemIndex) => (
                    <div
                        key={menuItemIndex}
                        onClick={() => {
                            updateItemsSelection(menuItemIndex);
                        }}
                        className={`${menuItem.isSelected ? "bg-mainColor" : "bg-transparent"
                            } rounded-md p-3 items-center gap-3 select-none cursor-pointer hover:border-mainColor transition-all border border-gray-200`}
                    >
                        <FontAwesomeIcon
                            className={`${menuItem.isSelected ? "text-white" : "text-mainColor"
                                }`}
                            width={20}
                            height={20}
                            icon={menuItem.icon}
                        />
                        <span
                            className={`${menuItem.isSelected ? "text-white" : isDark ? "text-white" : "text-dark"}`}
                        >
                            {menuItem.name}
                        </span>
                    </div>
                ))}
            </div>
            {/* Footer */}
            <div className="pl-5 cursor-pointer p-3 select-none flex gap-8 flex-col">
                {/* Logout button */}
                <div className="flex gap-3 items-center">
                    <FontAwesomeIcon
                        height={20}
                        width={20}
                        icon={faArrowRightFromBracket}
                        className="text-mainColor"
                    />
                    <span className="text-[15px]">Log out</span>
                </div>
                {/* DarkMode */}
                <DarkMode />
            </div>
        </div>
    );
}

export default Sidebar;
