// src/App.jsx (ou App.js)
import "./index.css"; // importe o seu CSS global
import { useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Não coloque .jsx aqui — o CRA resolve automaticamente
import Hero from "./components/Hero";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";

// URL base da API (puxa de .env ou cai no localhost)
const API_BASE =
  process.env.REACT_APP_BACKEND_URL || "http://localhost:3001";

function Home() {
  useEffect(() => {
    async function fetchMessage() {
      try {
        const { data } = await axios.get(`${API_BASE}/api`);
        console.log(data.message ?? "API respondeu, mas sem mensagem!");
      } catch (err) {
        console.error("Erro ao chamar GET /api:", err);
      }
    }
    fetchMessage();
  }, []);

  return <Hero />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
