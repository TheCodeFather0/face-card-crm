
import { Route, Routes, Navigate } from "react-router-dom"; 
import { useAuth } from "./context/AuthContext";
import Login from "./pages/Login";
import Home from "./pages/Home";
import History from "./pages/History";
import Clients from "./pages/Clients";
import Client from "./pages/Client";
import Packages from "./pages/Packages";
import ClientDashboard from "./components/client-dashboard";
import Income from "./pages/Income";
import CreateTransaction from "./components/create-transaction";
import CreateCustomer from "./components/create-customer";


function PrivateRoute({ children }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <Routes>
      
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
      <Route path="*" element={<Navigate to="/login" />} />
      <Route path="/history" element={<PrivateRoute><History /></PrivateRoute>} />
      <Route path="/clients" element={<PrivateRoute><Clients /></PrivateRoute>} />
      <Route path="/client" element={<PrivateRoute><Client /></PrivateRoute>} />
      <Route path="/packages" element={<PrivateRoute><Packages /></PrivateRoute>} />
      <Route path="/clients/:id" element={<ClientDashboard />} />
      <Route path="/income" element={<PrivateRoute><Income/></PrivateRoute>}/>
      <Route path="/create-transaction" element={<CreateTransaction />} />
      <Route path="/create-customer" element={<CreateCustomer />} />
      
    </Routes>
  );
}

export default App;
