import { useEffect, useState } from "react";
import { isMobile, isTablet } from 'react-device-detect';
import { useParams } from "react-router-dom";
import { Loading } from "../components/Loading";

import { Sidebar } from "../components/Sidebar"
import { useTheme } from "../context/ThemeContext";
import { useAuth } from "../hooks/useAuth";

import { Cliente } from "./Cliente";
import { Comercial } from "./Comercial";

type SlugParams = {
    slug: string;
}

export function Home() {
    const { user } = useAuth();
    const params = useParams<SlugParams>();
    const { theme } = useTheme();

    const [loading, setLoading] = useState(true);
    const [openMenu, setOpenMenu] = useState(
        isTablet || isMobile ? false : true
    );

    useEffect(() => {
        if (user?.token !== undefined) {
            setTimeout(() => setLoading(false), 1000)
        }
    }, []);

    console.log(user)

    return (
        <main className="home-main w-full flex items-stretch relative overflow-hidden">
            <Sidebar stateMenu={openMenu} switchMenu={setOpenMenu} paramsSlug={params.slug} />
            {params.slug === 'cliente' || params.slug === undefined ?
                <Cliente stateMenu={openMenu} switchMenu={setOpenMenu} theme={theme} />
                :
                <Comercial stateMenu={openMenu} switchMenu={setOpenMenu} theme={theme} />
            }
        </main>
    )
}
