import { useState } from "react";

import { Md5 } from "md5-typescript";
import { ArrowRight, CaretDown, CaretRight, ChartLine, Gauge, Gear, Lifebuoy, SignOut, Users } from "phosphor-react";
import { isTablet } from "react-device-detect";
import { Link } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";

interface SidebarProps {
    stateMenu: boolean;
    switchMenu: (value: boolean) => void;
    paramsSlug: string | undefined;
}

export function Sidebar(props: SidebarProps) {
    const { user } = useAuth();

    const [openDropdown, setOpenDropdown] = useState(false);
    const convertEmailUser = Md5.init(user?.email || 'email@email.com');

    function logOut() {
        localStorage.removeItem("userToken");
        window.location.reload();
    }

    return (
        <>
            <nav className={`max-w-[250px] min-w-[250px] z-20 min-h-screen transition-all duration-500 ${!props.stateMenu && '-ml-[250px]'} lg:relative lg:min-h-full fixed`}>
                <a
                    href=""
                    title="E-moving P35"
                    className="flex items-center justify-center decoration-none no-underline w-100 h-[65px] bg-main-500"
                >
                    <img
                        src="https://e-moving.com.br/wp-content/themes/e-moving/img/logo.svg"
                        alt="Logo E-moving"
                        className="max-w-full w-[150px]"
                    />
                </a>
                <div className="flex bg-white flex-col h-full lg:min-h-full min-h-screen py-3 drop-shadow-md">
                    <div className="text-center p-6">
                        {convertEmailUser &&
                            <img
                                src={`https://gravatar.com/avatar/${convertEmailUser}?s=${72}&d=identicon&r=x`}
                                className="rounded-full block mx-auto mb-2"
                                alt=""
                            />
                        }
                        <p className="font-bold">{user?.username}</p>
                        <small className="text-zinc-500">{user?.email}</small>
                    </div>
                    <ul className="flex flex-col py-5 px-3 gap-y-4 text-zinc-600 menu-sidebar">
                        <li className="w-full">
                            <button
                                type="button"
                                className={`w-full flex gap-2 cursor-pointer flex-row p-3 rounded-sm items-center`}
                                aria-controls="dropdown-dashboard"
                                data-collapse-toggle="dropdown-dashboard"
                                onClick={() => setOpenDropdown(!openDropdown)}
                            >
                                <Gauge size={24} weight="fill" className="text-main-500" />
                                <span className="mr-auto">
                                    Dashboard
                                </span>
                                <span>
                                    {openDropdown ?
                                        <CaretDown size={18} weight="bold" />
                                        :
                                        <CaretRight size={18} weight="bold" />
                                    }
                                </span>
                            </button>
                            <ul id="dropdown-dashboard" className={`py-2 space-y-2 pl-3 ${!openDropdown && 'hidden'}`}>
                                <li>
                                    <Link
                                        to="/cliente"
                                        className={`
                                            w-full flex gap-2 cursor-pointer flex-row p-3 rounded-sm items-center
                                            ${props.paramsSlug === 'cliente' || props.paramsSlug === undefined && 'active'}
                                        `}
                                    >
                                        <ArrowRight size={12} weight="regular" />
                                        Cliente
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/"
                                        className={`
                                            w-full flex gap-2 cursor-pointer flex-row p-3 rounded-sm items-center
                                            ${props.paramsSlug === 'comercial' && 'active'}
                                        `}
                                    >
                                        <ArrowRight size={12} weight="regular" />
                                        Comercial
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" className="w-full flex gap-2 cursor-pointer flex-row p-3 rounded-sm items-center">
                                        <ArrowRight size={12} weight="regular" />
                                        Financeiro
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="flex gap-2 cursor-pointer flex-row p-3 rounded-sm hover:bg-zinc-100 hover:text-zinc-900">
                            <Users size={24} weight="fill" className="text-main-500" />
                            <span>
                                Clientes
                            </span>
                        </li>
                        <li className="flex gap-2 cursor-pointer flex-row p-3 rounded-sm hover:bg-zinc-100 hover:text-zinc-900">
                            <ChartLine size={24} weight="fill" className="text-main-500" />
                            <span>
                                Relatórios
                            </span>
                        </li>
                        <li className="flex gap-2 cursor-pointer flex-row p-3 rounded-sm hover:bg-zinc-100 hover:text-zinc-900">
                            <Gear size={24} weight="fill" className="text-main-500" />
                            <span>
                                Configurações
                            </span>
                        </li>
                        <li className="flex gap-2 cursor-pointer flex-row p-3 rounded-sm hover:bg-zinc-100 hover:text-zinc-900">
                            <Lifebuoy size={24} weight="fill" className="text-main-500" />
                            <span>
                                Suporte
                            </span>
                        </li>
                        <li
                            onClick={() => logOut()}
                            className="flex gap-2 cursor-pointer flex-row p-3 rounded-sm hover:bg-zinc-100 hover:text-zinc-900"
                        >
                            <SignOut size={24} weight="fill" className="text-main-500" />
                            <span>
                                Sair
                            </span>
                        </li>
                    </ul>
                </div>
            </nav>
            {props.stateMenu || isTablet &&
                <div
                    className="fixed z-10 inset-0 w-full h-full bg-white opacity-50"
                    onClick={() => props.switchMenu(!props.stateMenu)}
                />
            }
        </>
    );
}