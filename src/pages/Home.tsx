import { useEffect, useState } from "react";
import { isMobile, isTablet } from 'react-device-detect';
import { useParams } from "react-router-dom";

import { Sidebar } from "../components/Sidebar"
import { useTheme } from "../context/ThemeContext";
import { useAuth } from "../hooks/useAuth";
import { Loading } from "../components/Loading";

import { Cliente } from "./Cliente";
import { Comercial } from "./Comercial";
import { Financeiro } from "./Financeiro";

type SlugParams = {
    slug: string;
}

export function Home() {
    const { userLogged } = useAuth();
    const user = JSON.parse(userLogged!);

    const params = useParams<SlugParams>();
    const { theme } = useTheme();

    const [loading, setLoading] = useState(true);
    const [openMenu, setOpenMenu] = useState(
        isTablet || isMobile ? false : true
    );

    useEffect(() => {
        if (user[0] !== undefined) {
            setTimeout(() => setLoading(false), 1000)
        }
    }, []);

    return (
        <>
            {!loading ?
                <main className="home-main w-full flex items-stretch relative overflow-hidden">
                    <Sidebar stateMenu={openMenu} switchMenu={setOpenMenu} paramsSlug={params.slug} />
                    {params.slug === 'cliente' || params.slug === undefined ?
                        <Cliente stateMenu={openMenu} switchMenu={setOpenMenu} theme={theme} />
                        : params.slug === 'comercial' ?
                            <Comercial stateMenu={openMenu} switchMenu={setOpenMenu} theme={theme} />
                            : params.slug === 'financeiro' &&
                            <Financeiro stateMenu={openMenu} switchMenu={setOpenMenu} theme={theme} />
                    }
                </main>
                :
                <Loading />
            }
        </>
    )
}
