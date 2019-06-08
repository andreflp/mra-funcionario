import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

function route(path, file, name, title, children) {
  return {
    exact: true,
    props: path.indexOf(":") > -1,
    path,
    name,
    children,
    component: file ? require(`./${file}.vue`).default : null
  }
}

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    route("/", "app/login/Index", "Login", "Login"),
    route("/", "app/default/Index", "Default", "Default", [
      route("/pacotes", "app/pacotes/Index", "Pacotes", "Pacotes"),
      route("/orcamentos", "app/orcamentos/Index", "Orçamentos", "Orçamentos"),
      route("/pacote", "app/pacote/Index", "Pacote", "Pacote"),
      route("/paises", "app/paises/Index", "Países", "Países"),
      route(
        "/instituicoes",
        "app/instituicoes/Index",
        "Instituições",
        "Instituições"
      ),
      route("/clientes", "app/clientes/Index", "Clientes", "Clientes"),
      route("/vendas", "app/vendas/Index", "Vendas", "Vendas"),
      route("/orcamento", "app/orcamento/Index", "Orçamento", "Orçamento"),
      route("/pais", "app/pais/Index", "País", "País"),
      route(
        "/instituicao",
        "app/instituicao/Index",
        "Instituição",
        "Instituição"
      ),
      route("/cliente", "app/cliente/Index", "Cliente", "Cliente"),
      route("/relatorios", "app/relatorios/Index", "Relatórios", "Relatórios"),
      route("/venda", "app/venda/Index", "Venda", "Venda")
    ])
    // { path: "", component: Main }
  ]
})
