import { useState } from "react";
import { isTablet } from 'react-device-detect';

import { Sidebar } from "../components/Sidebar"
import { Dashboard } from "../pages/Dashboard"

export function Home() {
    const [optionsTheme, setOptionsTheme] = useState('light');
    const [openMenu, setOpenMenu] = useState(
        isTablet ? false : true
    );

    function swipeTheme() {
        if (optionsTheme === 'light') {
            setOptionsTheme('dark')
        } else {
            setOptionsTheme('light')
        }
    }
    return (
        <main className="home-main w-full flex items-stretch relative overflow-hidden">
            <Sidebar stateMenu={openMenu} switchMenu={setOpenMenu} />
            <Dashboard stateMenu={openMenu} switchMenu={setOpenMenu} switchTheme={swipeTheme} theme={optionsTheme} />
        </main>
    )
}
