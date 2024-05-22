"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faDashboard,
    faBarsProgress,
    faLayerGroup,
    faFeather,
} from "@fortawesome/free-solid-svg-icons";

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
                        <span className={`${menuItem.isSelected ? "text-white" : "text-black"}`}>
                            {menuItem.name}
                        </span>
                    </div>
                ))}
            </div>
            {/* DarkMode */}
            <div className="border p-3">dark mode</div>

        </div>
    );
}

export default Sidebar;
