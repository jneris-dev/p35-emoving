import { FormEvent, useState } from "react";
import { Eye, EyeClosed } from "phosphor-react";

import { useAuth } from "../hooks/useAuth";

export function Login() {
    const { signIn, emailRef, passRef, isLogged } = useAuth();
    const [showPassword, setShowPassword] = useState(false);

    async function handleLogin(e: FormEvent) {
        e.preventDefault();

        if (isLogged === null) {
            signIn();
        }
    }

    return (
        <main className="w-full lg:h-screen h-auto flex lg:flex-row flex-col items-center relative">
            <div className="lg:w-1/2 w-full h-full flex items-center justify-center lg:order-1 order-2">
                <div className="w-full max-w-[500px] py-5 px-4">
                    <img
                        src="https://e-moving.com.br/wp-content/uploads/2021/01/logo-e-moving-escuro.svg"
                        alt="Logo E-moving"
                        className="max-w-full w-[250px] mb-5"
                    />
                    <h1 className="text-2xl mb-3 font-medium">
                        Olá! Seja bem vindo(a).
                    </h1>
                    <p className="text-md text-zinc-500 mb-10">
                        Faça login para continuar.
                    </p>
                    <form onSubmit={handleLogin} className="flex flex-col gap-4 mb-4">
                        <input
                            ref={emailRef}
                            type="email"
                            name="email"
                            id="email"
                            placeholder="E-mail"
                            className="
                            px-5 h-14 rounded w-full border-gray-300 shadow-sm focus:border-main-200 focus:ring focus:ring-main-200 focus:ring-opacity-50
                            dark:bg-zinc-900 dark:focus:bg-zinc-800 dark:active:bg-zinc-700
                            "
                        />
                        <div className="relative flex items-center">
                            <input
                                ref={passRef}
                                type={showPassword ? 'text' : 'password'}
                                name="senha"
                                id="senha"
                                placeholder="Senha"
                                required
                                className="px-5 h-14 rounded w-full border-gray-300 shadow-sm focus:border-main-200 focus:ring focus:ring-main-200 focus:ring-opacity-50"
                            />
                            <span
                                className="absolute right-3 z-10 cursor-pointer"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ?
                                    <EyeClosed size={24} />
                                    :
                                    <Eye size={24} />
                                }
                            </span>
                        </div>
                        <button
                            type="submit"
                            className="h-14 flex items-center justify-center bg-main-500 text-white rounded uppercase font-medium cursor-pointer hover:bg-main-600"
                        >
                            Entrar
                        </button>
                    </form>
                    <a href="">
                        Perdeu sua senha?
                    </a>
                </div>
            </div>
            <div className="lg:w-1/2 w-full lg:h-full h-[250px] overflow-hidden lg:order-2 order-1">
                <img
                    className="w-full h-full object-cover"
                    src="https://bike.e-moving.com.br/public/assets/images/bg-app.jpg"
                    alt=""
                />
            </div>
        </main>
    );
}