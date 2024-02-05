import React, { useState } from "react";
import "./Navbar.css";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { CiCircleQuestion } from "react-icons/ci";
import { TbWorld, TbUserCircle } from "react-icons/tb";
import { nav_data } from "../../static/static_data";
import NavChild from "./navChild/NavChild";

function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <div className="navbar">
            <div className="navbar__item">
                <div
                    className={`navbar__logo ${
                        open ? `color-black` : `color-white`
                    }`}
                >
                    <a href="/">
                        <Logo />
                    </a>
                </div>
            </div>
            <div
                className={`navbar__item ${
                    open ? `color-black` : `color-white`
                }`}
            >
                <ul className="navbar__ul">
                    {
                        nav_data.map(nav => (
                            <NavChild setOpen={setOpen} nav={nav} open={open}/>
                        ))
                    }
                </ul>
                <div
                    className="background_blur"
                    style={open ? { height: "100vh" } : { height: "0" }}
                ></div>
                <div
                    className="background_effect"
                    onMouseLeave={() => setOpen(false)}
                    style={open ? { height: "80vh" } : { height: "0" }}
                ></div>
            </div>
            <div className="navbar__item">
                <div
                    className={`navbar__logos ${
                        open ? `color-black` : `color-white`
                    }`}
                >
                    <ul>
                        <li>
                            <a href="/">
                                <CiCircleQuestion />
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <TbWorld />
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <TbUserCircle />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
