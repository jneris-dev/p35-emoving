import { BrowserRouter } from "react-router-dom";

import { AuthContextProvider } from "./context/AuthContext";
import { Router } from "./router/Router";

function App() {
	return (
		<BrowserRouter>
			<AuthContextProvider>
				<Router />
			</AuthContextProvider>
		</BrowserRouter>
	)
}

export default App
