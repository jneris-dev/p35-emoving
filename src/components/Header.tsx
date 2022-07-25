import { BellSimple, EnvelopeSimpleOpen, List, Moon, Sun } from "phosphor-react";
import { useTheme } from "../context/ThemeContext";

interface HeaderProps {
    stateMenu: boolean;
    switchMenu: (value: boolean) => void;
}

export function Header(props: HeaderProps) {
    const { theme, setTheme } = useTheme()

    function handleToggleTheme() {
        setTheme(!theme)
    }

    return (
        <header className="flex flex-wrap justify-between text-white h-[65px] items-center px-5">
            <List size={32} weight="fill" onClick={() => props.switchMenu(!props.stateMenu)} className="cursor-pointer" />
            <div className="flex flex-row gap-4">
                <EnvelopeSimpleOpen size={24} weight="fill" />
                <BellSimple size={24} weight="fill" />
                <button onClick={handleToggleTheme}>
                    {!theme ?
                        <Moon size={24} weight="fill" />
                        :
                        <Sun size={24} weight="fill" />
                    }
                </button>
            </div>
        </header>
    );
}