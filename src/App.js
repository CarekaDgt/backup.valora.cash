import './index.css'; // Certifique-se do nome correto do arquivo de estilos
import { useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Dashboard from "./components/Dashboard.jsx"; // Import único

// Config backend
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:3001";
const API = `${BACKEND_URL}/api`;

// Home faz a chamada na API e mostra o Hero
function Home() {
  useEffect(() => {
    async function helloWorldApi() {
      try {
        const response = await axios.get(`${API}/`);
        console.log(response.data?.message || "API sem mensagem!");
      } catch (e) {
        console.error("Erro ao requisitar /api:", e);
      }
    }
    helloWorldApi();
  }, []);

  return <Hero />;
}

// **Export default único e rotas limpas**
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} /> {/* Adiciona aqui! */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
