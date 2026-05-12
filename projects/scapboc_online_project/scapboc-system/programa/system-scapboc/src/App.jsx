import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboards";
import Products from "./pages/Products";
import Categories from "./pages/Categories";
import Chatbot from "./pages/Chatbot";
import Login from "./pages/Login";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import Stock from "./pages/Stock";
import Crud from "./pages/Crud";
import EditProduct from "./pages/EditProduct";
import Retirada from "./pages/Retirada";
import Financeiro from "./pages/financeiro";
import CashFlow from "./pages/Cashflow";
import Expenses from "./pages/Expenses";
import Suppliers from "./pages/Suppliers";
import Customers from "./pages/Customers";
import Orders from "./pages/Orders";
import Budgets from "./pages/Budgets";
import Notifications from "./pages/Notifications";
import Backup from "./pages/Backup";



function Home() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-white text-5xl font-black mb-8">
          SCAP<span className="text-yellow-400">BOC</span>
        </h1>

        <Link
          to="/dashboard"
          className="bg-yellow-400 text-black px-8 py-4 rounded-2xl font-bold"
        >
          Abrir Dashboard
        </Link>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/financeiro" element={<Financeiro/>}/>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categorias" element={<Categories />} />
        <Route path="/chatbot" element={<Chatbot /> }/>
        <Route path="/login" element={<Login />}/>
        <Route path="/reports" element={<Reports />} />
        <Route path="/configuracoes" element={<Settings />}/>
        <Route path="/estoque" element={<Stock/>}/>
        <Route path="/gerenciar" element={<Crud />}/>
        <Route path="/edit-product" element={<EditProduct />} />
        <Route path="/retirada" element={<Retirada />} />
        <Route path="/fluxodecaixa" element={<CashFlow />} />
        <Route path="/despesas" element={<Expenses/>}/>
        <Route path="/fornecedores" element={<Suppliers/>}/>
        <Route path="/clientes" element={<Customers />}/>
        <Route path="/pedidos" element={<Orders />}/>
        <Route path="/orcamentos" element={<Budgets/>}/>
        <Route path="/notificacoes" element={<Notifications />}/>
        <Route path="/backup" element={<Backup/>}/>
      </Routes>
    </BrowserRouter>
  );
}