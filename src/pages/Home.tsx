import { useEffect, useState } from "react";
import { isMobile, isTablet } from 'react-device-detect';
import { useParams } from "react-router-dom";
import { Loading } from "../components/Loading";

import { Sidebar } from "../components/Sidebar"
import { useAuth } from "../hooks/useAuth";

import { Cliente } from "./Cliente";
import { Comercial } from "./Comercial";

type SlugParams = {
    slug: string;
}

export function Home() {
    const { user } = useAuth();
    const params = useParams<SlugParams>();

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
        if (user) {
            setTimeout(() => {
                setLoading(true);
            }, 1000);
        }
        else {
            setLoading(false)
        }
    }, [user]);

    return (
        <>
            {loading ?
                <main className="home-main w-full flex items-stretch relative overflow-hidden">
                    <Sidebar stateMenu={openMenu} switchMenu={setOpenMenu} paramsSlug={params.slug} />
                    {params.slug === 'cliente' || params.slug === undefined ?
                        <Cliente stateMenu={openMenu} switchMenu={setOpenMenu} switchTheme={swipeTheme} theme={optionsTheme} />
                        :
                        <Comercial stateMenu={openMenu} switchMenu={setOpenMenu} switchTheme={swipeTheme} theme={optionsTheme} />
                    }
                </main>
                :
                <Loading />
            }
        </>
    )
}
