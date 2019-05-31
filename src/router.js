import Vue from "vue"
import Router from "vue-router"
// import Main from "@/app/main/Index"

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
    route("/login", "app/login/Index", "Login", "Login"),
    route("/", "app/default/Index", "Default", "Default", [
      route("", "app/pacote/Index", "Pacotes", "Pacotes"),
      route("/paises", "app/pais/Index", "Países", "Países")
    ])
    // { path: "", component: Main }
  ]
})
