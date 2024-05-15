import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { HiMenuAlt2 } from "react-icons/hi";
import { motion } from "framer-motion";
import { logo, logoLight } from "../../../assets/images";
import Image from "../../designLayouts/Image";
import { navBarList } from "../../../constants";
import Flex from "../../designLayouts/Flex";
import './header.css';
export default function Header () {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleSidebarToggle = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleLinkClick = () => {
        if (isSidebarOpen) {
            setIsSidebarOpen(false);
        }
    };

    return (
        <div className='scc'>
            <div className='second'>
                <div className="container">
                    <input type="checkbox" id="check" checked={isSidebarOpen} onChange={handleSidebarToggle} />
                    <label htmlFor="check" className="hamburger-menu-container">
                        <div className="hamburger-menu">
                            <div></div>
                        </div>
                    </label>
                    <div className="nav-btn">
                        <div className="nav-links">
                            <ul>
                                <li className="nav-link" style={{ '--i': '.6s' }}>
                                    <Link className='sas' to="/" onClick={handleLinkClick}>მთავარი</Link>
                                </li>
                                {/* Add other menu items here */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


