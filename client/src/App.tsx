import { BrowserRouter } from "react-router-dom";
import { PageRoutes } from "./routes";
import { AuthProvider } from "./providers/AuthProvider";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <PageRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
