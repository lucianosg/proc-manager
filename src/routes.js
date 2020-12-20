import Calendar from "./components/Calendar/Calendar";
import Dashboard from "./components/Dashboard/Dashboard";

import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Settings from "./components/Settings";

import Company from "./components/Cadastros/Company";
import Partners from "./components/Cadastros/Partners";
import Salers from "./components/Cadastros/Salers";
import Agents from "./components/Cadastros/Agents";
import Lawyers from './components/Cadastros/Lawyers';
import Registrys from "./components/Cadastros/Registrys";
import Clients from "./components/Cadastros/Clients";
import Users from './components/Cadastros/Users';

import Ballots from "./components/Processos/Ballots";
import BallotsLot from "./components/Processos/BallotsLot";
import BallotsType from './components/Processos/BallotsType';
import BallotsDoc from './components/Processos/BallotsDoc';
import BallotsAtv from './components/Processos/BallotsAtv';

import ConsultPend from './components/Consultas/ConsultPend';
import ConsultOK from './components/Consultas/ConsultOK';
import Contracts from './components/Consultas/Contracts';
import MyContracts from './components/Consultas/MyContracts';

import Extracts from './components/Financeiro/Extracts';
import MyExtracts from './components/Financeiro/MyExtracts';
import Balances from './components/Financeiro/Balances';
import Payments from './components/Financeiro/Payments';
import FinancialIndex from './components/Financeiro/FinancialIndex';
import Interest from './components/Financeiro/Interest'

const routes = [
  {
    path: "/dashboard",
    name: "Painel de Controle",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin",
  },
  {
    collapse: true,
    name: "Cadastros",
    icon: "tim-icons icon-image-02",
    state: "cadCollapse",
    views: [
      {
        path: "/users",
        name: "Usuários",
        mini: "US",
        component: Users,
        layout: "/admin",
      },
      {
        path: "/company",
        name: "Empresas",
        mini: "EM",
        component: Company,
        layout: "/admin",
      },
      {
        path: "/partners",
        name: "Parceiros",
        mini: "PC",
        component: Partners,
        layout: "/admin",
      },
      {
        path: "/salers",
        name: "Representantes",
        mini: "RP",
        component: Salers,
        layout: "/admin",
      },
      {
        path: "/agents",
        name: "Agentes",
        mini: "AG",
        component: Agents,
        layout: "/admin",
      },
      {
        path: "/lawyers",
        name: "Adbogados",
        mini: "AD",
        component: Lawyers,
        layout: "/admin",
      },
      {
        path: "/registrys",
        name: "Cartórios",
        mini: "CT",
        component: Registrys,
        layout: "/admin",
      },
      {
        path: "/clients",
        name: "Clientes",
        mini: "CL",
        component: Clients,
        layout: "/admin",
      },
    ],
  },
  {
    collapse: true,
    name: "Processos",
    icon: "tim-icons icon-molecule-40",
    state: "procCollapse",
    views: [
      {
        path: "/ballots",
        name: "Cédulas",
        mini: "CD",
        component: Ballots,
        layout: "/admin",
      },
      {
        path: "/ballotsLot",
        name: "Cédulas - Lote",
        mini: "CL",
        component: BallotsLot,
        layout: "/admin",
      },
      {
        path: "/ballotsType",
        name: "Cédulas - Tipo",
        mini: "CT",
        component: BallotsType,
        layout: "/admin",
      },
      {
        path: "/ballotsDoc",
        name: "Cédulas - CPF",
        mini: "CC",
        component: BallotsDoc,
        layout: "/admin",
      },
      {
        path: "/ballotsAtv",
        name: "CPFs - Repassados",
        mini: "CR",
        component: BallotsAtv,
        layout: "/admin",
      },
    ],
  },
  {
    collapse: true,
    name: "Consultas",
    icon: "tim-icons icon-notes",
    state: "consCollapse",
    views: [
      {
        path: "/consultpend",
        name: "Justiça - Pendentes",
        mini: "JP",
        component: ConsultPend,
        layout: "/admin",
      },
      {
        path: "/consultok",
        name: "Justiça - Realizadas",
        mini: "JR",
        component: ConsultOK,
        layout: "/admin",
      },
      {
        path: "/contracts",
        name: "Contratos",
        mini: "CT",
        component: Contracts,
        layout: "/admin",
      },
      {
        path: "/mycontracts",
        name: "Contratos - Prórpios",
        mini: "CP",
        component: MyContracts,
        layout: "/admin",
      },
    ],
  },
  {
    collapse: true,
    name: "Financeiro",
    icon: "tim-icons icon-money-coins",
    state: "finCollapse",
    views: [
      {
        path: "/extracts",
        name: "Extratos",
        mini: "EX",
        component: Extracts,
        layout: "/admin",
      },
      {
        path: "/myextracts",
        name: "Extratos Prórpios",
        mini: "EP",
        component: MyExtracts,
        layout: "/admin",
      },
      {
        path: "/balances",
        name: "Saldos",
        mini: "CD",
        component: Balances,
        layout: "/admin",
      },
      {
        path: "/payments",
        name: "Pagamentos",
        mini: "PG",
        component: Payments,
        layout: "/admin",
      },
      {
        path: "/financialIndex",
        name: "Índices de Correção",
        mini: "IC",
        component: FinancialIndex ,
        layout: "/admin",
      },
      {
        path: "/interest",
        name: "Juros",
        mini: "JR",
        component: Interest,
        layout: "/admin",
      },
    ],
  },
  {
    path: "/calendar",
    name: "Calendário",
    mini: "CL",
    icon: "tim-icons icon-calendar-60",
    component: Calendar,
    layout: "/admin",
  },
  {
    path: "/settings",
    name: "Configurações",
    mini: "CF",
    icon: "tim-icons icon-settings",
    component: Settings,
    layout: "/admin",
  },
  {
    path: "/register",
    name: "Registrar-se",
    mini: "RG",
    icon: "tim-icons icon-laptop",
    component: Register,
    layout: "/auth",
  },
  {
    path: "/login",
    name: "Sair",
    mini: "EX",
    icon: "tim-icons icon-single-02",
    component: Login,
    layout: "/auth",
  },
];

export default routes;
