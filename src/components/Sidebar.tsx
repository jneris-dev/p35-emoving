import { Md5 } from "md5-typescript";
import { ChartLine, Gauge, Gear, Lifebuoy, SignOut, Users } from "phosphor-react";
import { isTablet } from "react-device-detect";

interface SidebarProps {
    stateMenu: boolean;
    switchMenu: (value: boolean) => void;
}

export function Sidebar(props: SidebarProps) {

    const emailUser = "joao.n@e-moving.com.br";

    const convertEmailUser = Md5.init(emailUser);

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
                        <img
                            src={`https://gravatar.com/avatar/${convertEmailUser}?s=${72}&d=identicon&r=x`}
                            className="rounded-full block mx-auto mb-2"
                            alt=""
                        />
                        <p className="font-bold">João Neris</p>
                        <small className="text-zinc-500">{emailUser}</small>
                    </div>
                    <ul className="flex flex-col py-5 px-3 gap-y-4 text-zinc-600">
                        <li className="flex gap-2 cursor-pointer flex-row p-3 rounded-sm bg-zinc-100 text-zinc-900">
                            <Gauge size={24} weight="fill" className="text-main-500" />
                            <span>
                                Dashboard
                            </span>
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
                        <li className="flex gap-2 cursor-pointer flex-row p-3 rounded-sm hover:bg-zinc-100 hover:text-zinc-900">
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