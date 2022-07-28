import { useAuth } from "../../hooks/useAuth";

import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";
import { Numeric } from "../../components/Numeric";

import { NPSTrimestre } from "./charts/NPSTrimestre";
import { Manutencoes } from "./charts/Manutencoes";
import { KMCO2 } from "./charts/KMCO2";

interface ClienteProps {
    stateMenu: boolean;
    switchMenu: (value: boolean) => void;
    theme: boolean;
}

export function Cliente(props: ClienteProps) {
    const { userLogged } = useAuth();
    const user = JSON.parse(userLogged!);

    return (
        <div className={`flex flex-col min-h-screen w-full min-w-0 relative`}>
            <Header
                stateMenu={props.stateMenu}
                switchMenu={props.switchMenu}
            />

            <section className="flex-1 mt-12 lg:px-6 px-3">
                <div className="mb-12 relative text-white">
                    <h1 className="text-3xl font-medium">
                        Welcome back, {user[0] || "Usuário"}!
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
                            arrow="down"
                            color="green"
                        />
                    </Card>
                    <Card width={["flex-1", "w-full"]}>
                        <Numeric
                            label="Tempo de Resolução"
                            data="25min"
                            rate="+3.85%"
                            description="Tempo resolvemos o problema do chamado (ou fechamos)"
                            arrow="up"
                            color="red"
                        />
                    </Card>
                </div>

                <div className="flex lg:flex-row flex-col gap-5 items-stretch mb-10">
                    <Card
                        width={["lg:w-1/2", "w-full"]}
                        label="NPS/Trimestre"
                        description="Avaliação trimestral - 0 a 10"
                    >
                        <NPSTrimestre theme={props.theme} />
                    </Card>
                    <Card
                        width={["lg:w-1/2", "w-full"]}
                        label="Manutenções (R$)"
                        description="Quanto economizam com os serviços E-Moving vs Mercado tradicional"
                    >
                        <Manutencoes theme={props.theme} />
                    </Card>
                </div>

                <div className="flex lg:flex-row flex-col gap-5 items-stretch mb-10">
                    <Card
                        width={["lg:w-1/2", "w-full"]}
                        label="KM/CO2/mês"
                        description="Quantos km rodam e geram economia de CO2 na atmosfera"
                    >
                        <KMCO2 theme={props.theme} />
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