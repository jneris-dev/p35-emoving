import { useAuth } from "../../hooks/useAuth";

import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";

import { Inbound } from "./charts/Inbound";
import { Outbound } from "./charts/Outbound";
import { CustoRetorno } from "./charts/CustoRetorno";

interface ComercialProps {
    stateMenu: boolean;
    switchMenu: (value: boolean) => void;
    theme: boolean;
}

export function Comercial(props: ComercialProps) {
    const { user } = useAuth();

    return (
        <div className={`flex flex-col min-h-screen w-full min-w-0 relative`}>
            <Header
                stateMenu={props.stateMenu}
                switchMenu={props.switchMenu}
            />

            <section className="flex-1 mt-12 lg:px-6 px-3">
                <div className="mb-12 relative text-white">
                    <h1 className="text-3xl font-medium">
                        Welcome back, {user?.username || "Usuário"}!
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
                                    Comercial
                                </span>
                            </li>
                        </ol>
                    </nav>
                </div>

                <div className="flex lg:flex-row flex-col gap-5 items-stretch mb-10">
                    <Card width={["lg:w-1/2", "w-full"]}>
                        <Inbound theme={props.theme} />
                    </Card>
                    <Card width={["lg:w-1/2", "w-full"]}>
                        <Outbound theme={props.theme} />
                    </Card>
                </div>

                <div className="flex lg:flex-row flex-col gap-5 items-stretch mb-10">
                    <Card width={["lg:w-1/2", "w-full"]}>
                        <CustoRetorno theme={props.theme} />
                    </Card>
                    <Card width={["lg:w-1/2", "w-full", "invisible"]}>

                    </Card>
                </div>

            </section>

            <Footer />
        </div>
    );
}