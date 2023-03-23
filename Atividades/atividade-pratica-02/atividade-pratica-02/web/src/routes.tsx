import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import CreateCidade from "./components/cidades/CreateCidade";
import ListCidades from "./components/cidades/ListCidades";
import ShowCidade from "./components/cidades/ShowCidade";
import UpdateCidade from "./components/cidades/UpdateCidade";
import CreateDistribuicao from "./components/distribuicoes/CreateDistribuicao";
import ListDistribuicoes from "./components/distribuicoes/ListDistribuicoes";
import CreateDoacao from "./components/doacoes/CreateDoacao";
import ListDoacoes from "./components/doacoes/ListDoacoes";
import CreateEstado from "./components/estados/CreateEstado";
import ListEstados from "./components/estados/ListEstados";
import ShowEstado from "./components/estados/ShowEstado";
import UpdateEstado from "./components/estados/UpdateEstado";
import Header from "./components/header/Header";
import CreateLocalColeta from "./components/locais_coleta/CreateLocalColeta";
import ListLocaisColeta from "./components/locais_coleta/ListLocaisColeta";
import CreatePessoa from "./components/pessoas/CreatePessoa";
import ListPessoas from "./components/pessoas/ListPessoas";
import CreateProduto from "./components/produtos/CreateProduto";
import ListProdutos from "./components/produtos/ListProdutos";
import CreateTipoSanguineo from "./components/tipos_sanguineos/CreateTipoSanguineo";
import ListTipoSanguineos from "./components/tipos_sanguineos/ListTiposSanguneos";
import CreateUnidade from "./components/unidades/CreateUnidade";
import ListUnidades from "./components/unidades/ListUnidades";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header name="Leticia" />

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/estados" element={<ListEstados />} />
        <Route path="/cidades" element={<ListCidades />} />
        <Route path="/estados/create" element={<CreateEstado />} />
        <Route path="/estados/show/:id" element={<ShowEstado />} />
        <Route path="/estados/update/:id" element={<UpdateEstado />} />
        <Route path="/cidades/create" element={<CreateCidade />} />
        <Route path="/cidades/show/:id" element={<ShowCidade />} />
        <Route path="/cidades/update/:id" element={<UpdateCidade />} />
        <Route path="/pessoas" element={<ListPessoas />} />
        <Route path="/pessoas/create" element={<CreatePessoa />} />
        <Route path="/tipos-sanguineos" element={<ListTipoSanguineos />} />
        <Route
          path="/tipos-sanguineos/create"
          element={<CreateTipoSanguineo />}
        />
        <Route path="/locais-coleta" element={<ListLocaisColeta />} />
        <Route path="/locais-coleta/create" element={<CreateLocalColeta />} />
        <Route path="/doacoes" element={<ListDoacoes />} />
        <Route path="/doacoes/create" element={<CreateDoacao />} />
        <Route path="/produtos" element={<ListProdutos />} />
        <Route path="/produtos/create" element={<CreateProduto />} />
        <Route path="/distribuicoes" element={<ListDistribuicoes />} />
        <Route path="/distribuicoes/create" element={<CreateDistribuicao />} />
        <Route path="/unidades" element={<ListUnidades />} />
        <Route path="/unidades/create" element={<CreateUnidade />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
