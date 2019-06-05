<template>
  <v-navigation-drawer v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" fixed app>
    <v-list dense>
      <template v-for="item in items">
        <v-list-tile :key="item.text" :to="item.route">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.text }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    drawer: null,
    items: [
      { icon: "all_inbox", text: "Pacotes", route: "/" },
      { icon: "assignment", text: "Orçamentos", route: "orcamentos" },
      { icon: "location_on", text: "Países", route: "paises" },
      { icon: "school", text: "Instituições", route: "instituicoes" },
      { icon: "supervised_user_circle", text: "Clientes", route: "clientes" },
      { icon: "shopping_cart", text: "Vendas", route: "vendas" },
      { icon: "assessment", text: "Relatórios", route: "relatorios" }
    ]
  })
}
</script>
