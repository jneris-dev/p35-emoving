import { useAuth } from "../../hooks/useAuth";

import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";
import { Numeric } from "../../components/Numeric";
import { Ticket } from "./charts/Ticket";

interface FinanceiroProps {
    stateMenu: boolean;
    switchMenu: (value: boolean) => void;
    theme: boolean;
}

export function Financeiro(props: FinanceiroProps) {
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
                                    Financeiro
                                </span>
                            </li>
                        </ol>
                    </nav>
                </div>

                <div className="flex md:flex-row flex-col gap-5 items-stretch mb-10 justify-center">
                    <Card width={["flex-1", "w-full"]}>
                        <Numeric
                            label="Margem de Lucro Líquido"
                            data="R$235.654,21"
                            rate="+15.8%"
                            description="Status financeiro da empresa"
                            arrow="up"
                            color="green"
                        />
                    </Card>
                    <Card width={["flex-1", "w-full"]}>
                        <Numeric
                            label="Margem de Lucro Bruto"
                            data="R$354.215,63"
                            rate="+18.85%"
                            description="Status financeiro da empresa"
                            arrow="up"
                            color="green"
                        />
                    </Card>
                </div>

                <div className="flex lg:flex-row flex-col gap-5 items-stretch mb-10">
                    <Card
                        width={["w-full"]}
                        label="Ticket Médio"
                        description="Ticket médio por cliente/patrimônio/região/etc."
                    >
                        <Ticket theme={props.theme} />
                    </Card>
                </div>

            </section>

            <Footer />
        </div>
    );
}