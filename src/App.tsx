import { BrowserRouter } from "react-router-dom";

import { AuthContextProvider } from "./context/AuthContext";
import { ThemeContextProvider } from "./context/ThemeContext";
import { Router } from "./router/Router";

function App() {
	return (
		<BrowserRouter>
			<AuthContextProvider>
				<ThemeContextProvider>
					<Router />
				</ThemeContextProvider>
			</AuthContextProvider>
		</BrowserRouter>
	)
}

export default App
