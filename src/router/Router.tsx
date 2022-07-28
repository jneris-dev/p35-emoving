import { Navigate, Route, Routes, } from "react-router-dom";

import { Login } from "../pages/Login";
import { Home } from "../pages/Home";
import { useAuth } from "../hooks/useAuth";

export function Router() {
    const { tokenLoggedUser } = useAuth();

    return (
        <Routes>
            <Route path="*" element={<Navigate replace to="/" />} />

            <Route path="/" element={
                <>
                    {tokenLoggedUser !== null ?
                        <Home />
                        :
                        <Navigate replace to="/login" />
                    }
                </>
            } />
            <Route path="/login" element={
                <>
                    {tokenLoggedUser === null ?
                        <Login />
                        :
                        <Navigate replace to="/" />
                    }
                </>
            } />
            <Route path="/:slug" element={
                <>
                    {tokenLoggedUser !== null ?
                        <Home />
                        :
                        <Navigate replace to="/login" />
                    }
                </>
            } />
        </Routes>
    );
}