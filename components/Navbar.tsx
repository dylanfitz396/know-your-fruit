"use client"

import React from "react";
import NavItem from "./NavItem";
import { MENU_LIST } from "../app/constants";

const Navbar = () => {
    return (
        <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Know Your Fruit</span>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <NavItem href={MENU_LIST[0].href} text={MENU_LIST[0].text}></NavItem>
                        <NavItem href={MENU_LIST[1].href} text={MENU_LIST[1].text}></NavItem>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;