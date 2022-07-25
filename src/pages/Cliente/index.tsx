import { BellSimple, EnvelopeSimpleOpen, List, Moon, Sun } from "phosphor-react";

import { useAuth } from "../../hooks/useAuth";

import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";
import { Numeric } from "../../components/Numeric";

import { NPSTrimestre } from "./charts/NPSTrimestre";
import { Manutencoes } from "./charts/Manutencoes";
import { KMCO2 } from "./charts/KMCO2";

interface ClienteProps {
    stateMenu: boolean;
    switchMenu: (value: boolean) => void;
    switchTheme: () => void;
    theme: string;
}

export function Cliente(props: ClienteProps) {
    const { user } = useAuth();

    return (
        <div className={`flex flex-col min-h-screen w-full min-w-0 relative`}>
            <header className="flex flex-wrap justify-between text-white h-[65px] items-center px-5">
                <List size={32} weight="fill" onClick={() => props.switchMenu(!props.stateMenu)} className="cursor-pointer" />
                <div className="flex flex-row gap-4">
                    <EnvelopeSimpleOpen size={24} weight="fill" />
                    <BellSimple size={24} weight="fill" />
                    <button onClick={props.switchTheme}>
                        {props.theme === 'light' ?
                            <Moon size={24} weight="fill" />
                            :
                            <Sun size={24} weight="fill" />
                        }
                    </button>
                </div>
            </header>

            <section className="flex-1 mt-12 lg:px-6 px-3">
                <div className="mb-12 relative text-white">
                    <h1 className="text-3xl font-medium">
                        Welcome back, {user?.username}!
                    </h1>

                    <nav className="flex mt-3" aria-label="Breadcrumb">
                        <ol className="flex flex-row gap-3">
                            <li>
                                <span className="text-sm font-medium text-zinc-400">
                                    Dashboard
                                </span>
                            </li>
                            <span>
                                /
                            </span>
                            <li>
                                <span className="text-sm font-medium text-zinc-100">
                                    Cliente
                                </span>
                            </li>
                        </ol>
                    </nav>
                </div>

                <div className="flex md:flex-row flex-col gap-5 items-stretch mb-10 justify-center">
                    <Card width={["flex-1", "w-full"]}>
                        <Numeric
                            label="Tempo de Atendimento"
                            data="10min"
                            rate="-2.5%"
                            description="Tempo respondemos o chamado"
                            status="down"
                        />
                    </Card>
                    <Card width={["flex-1", "w-full"]}>
                        <Numeric
                            label="Tempo de Resolução"
                            data="25min"
                            rate="-3.85%"
                            description="Tempo resolvemos o problema do chamado (ou fechamos)"
                            status="up"
                        />
                    </Card>
                </div>

                <div className="flex lg:flex-row flex-col gap-5 items-stretch mb-10">
                    <Card
                        width={["lg:w-1/2", "w-full"]}
                        label="NPS/Trimestre"
                        description="Avaliação trimestral - 0 a 10"
                    >
                        <NPSTrimestre />
                    </Card>
                    <Card
                        width={["lg:w-1/2", "w-full"]}
                        label="Manutenções (R$)"
                        description="Quanto economizam com os serviços E-Moving vs Mercado tradicional"
                    >
                        <Manutencoes />
                    </Card>
                </div>

                <div className="flex lg:flex-row flex-col gap-5 items-stretch mb-10">
                    <Card
                        width={["lg:w-1/2", "w-full"]}
                        label="KM/CO2/mês"
                        description="Quantos km rodam e geram economia de CO2 na atmosfera"
                    >
                        <KMCO2 />
                    </Card>
                    <Card
                        width={["lg:w-1/2", "w-full", "invisible"]}
                    >
                    </Card>
                </div>
            </section>

            <Footer />
        </div>
    );
}