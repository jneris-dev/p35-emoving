import { useEffect, useState } from "react";
import { isMobile, isTablet } from 'react-device-detect';
import { Loading } from "../components/Loading";

import { Sidebar } from "../components/Sidebar"
import { useAuth } from "../hooks/useAuth";
import { Dashboard } from "../pages/Dashboard"

export function Home() {
    const { user } = useAuth();
    const [loading, setLoading] = useState(false);
    const [optionsTheme, setOptionsTheme] = useState('light');
    const [openMenu, setOpenMenu] = useState(
        isTablet || isMobile ? false : true
    );

    function swipeTheme() {
        if (optionsTheme === 'light') {
            setOptionsTheme('dark')
        } else {
            setOptionsTheme('light')
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setLoading(true);
        }, 1000);
    }, [user]);

    return (
        <>
            {loading ?
                <main className="home-main w-full flex items-stretch relative overflow-hidden">
                    <Sidebar stateMenu={openMenu} switchMenu={setOpenMenu} />
                    <Dashboard stateMenu={openMenu} switchMenu={setOpenMenu} switchTheme={swipeTheme} theme={optionsTheme} />
                </main>
                :
                <Loading />
            }
        </>
    )
}
