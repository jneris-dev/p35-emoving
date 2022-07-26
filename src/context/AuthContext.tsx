import { createContext, ReactNode, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const database = [
    {
        username: 'João Neris',
        email: "joao.n@e-moving.com.br",
        password: "emoving",
        token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2NTg1MDkxMzEsImV4cCI6MTY5MDA0NTEzMSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIkVtYWlsIjoiam9hby5uQGV4YW1wbGUuY29tIn0.M_j2UnNR4uxjy05FW2UWsdHydU7WMoUOgeUnAp6vPbE"
    },
    {
        username: 'Rodrigo Godoi',
        email: "rodrigo.g@e-moving.com.br",
        password: "emoving",
        token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2NTg1MDkxMzEsImV4cCI6MTY5MDA0NTEzMSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIkVtYWlsIjoiam9hby5uQGV4YW1wbGUuY29tIn0.mhVDdPpo83YX6nWBrSMFHkiHDO8Aa53qpMgME3sRUdA"
    },
    {
        username: 'Gustavo Marreiros',
        email: "gustavo.m@e-moving.com.br",
        password: "emoving",
        token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2NTg1MDkxMzEsImV4cCI6MTY5MDA0NTEzMSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIkVtYWlsIjoiam9hby5uQGV4YW1wbGUuY29tIn0.c7eN0Lnd1njuxLgWgQ42JLcBpcevh8hvVAF6VCagpb0"
    }
];

type User = {
    username?: string;
    email?: string;
    password?: string;
    token?: string;
}

type AuthContextType = {
    user: User | undefined;
    signIn: () => void;
    emailRef: any;
    passRef: any;
    userLogged: string | null;
    tokenLoggedUser: string | null;
}

type AuthContextProviderProps = {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider(props: AuthContextProviderProps) {
    const [user, setUser] = useState<User>();
    const navigate = useNavigate();

    const emailRef = useRef<HTMLInputElement>(null);
    const passRef = useRef<HTMLInputElement>(null);

    const userLogged = localStorage.getItem("userLogged");
    const tokenLoggedUser = sessionStorage.getItem("tokenLoggedUser");

    useEffect(() => {
        function unsubscribe() {
            const userLoggedData = database.find((user) => user.token === tokenLoggedUser);

            if (userLogged !== null) {
                setUser({
                    username: userLoggedData?.username,
                    email: userLoggedData?.email,
                    token: userLoggedData?.token
                })
            }
        }

        return () => {
            unsubscribe();
        }
    }, [])

    function signIn() {
        const userData = database.find((user) => user.email === emailRef?.current?.value);

        if (userData) {
            if (userData.password !== passRef?.current?.value) {
                alert('invalid password')
            } else {
                setUser({
                    username: userData.username,
                    email: userData.email,
                    token: userData.token,
                })
                localStorage.setItem('userLogged', JSON.stringify([userData.username, userData.email]));
                sessionStorage.setItem("tokenLoggedUser", userData.token);
                navigate('/')
            }
        } else {
            alert('invalid user e-mail')
        }
    };

    return (
        <AuthContext.Provider value={{ user, signIn, emailRef, passRef, userLogged, tokenLoggedUser }}>
            {props.children}
        </AuthContext.Provider>
    );
}