<template>
  <v-navigation-drawer v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" app>
    <v-list dense>
      <v-list-group v-for="item in items" :key="item.text">
        <template v-slot:activator>
          <v-list-tile>
            <v-list-tile-title>{{ item.text }}</v-list-tile-title>
          </v-list-tile>
        </template>
        <v-list-tile :to="item.list">
          <v-icon>list</v-icon>
          <v-list-tile-title style="margin-left: 10px">Lista</v-list-tile-title>
        </v-list-tile>
        <v-list-tile :to="item.new">
          <v-icon>add</v-icon>
          <v-list-tile-title style="margin-left: 10px;">Novo</v-list-tile-title>
        </v-list-tile>
      </v-list-group>
      <template>
        <v-list-tile to="relatorios">
          <v-list-tile-content>
            <v-list-tile-title>Relatórios</v-list-tile-title>
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
    drawer: true,
    items: [
      { icon: "all_inbox", text: "Pacotes", list: "/", new: "pacote" },
      {
        icon: "assignment",
        text: "Orçamentos",
        list: "orcamentos",
        new: "orcamento"
      },
      { icon: "location_on", text: "Países", list: "paises", new: "pais" },
      {
        icon: "school",
        text: "Instituições",
        list: "instituicoes",
        new: "instituicao"
      },
      {
        icon: "supervised_user_circle",
        text: "Clientes",
        list: "clientes",
        new: "cliente"
      },
      { icon: "shopping_cart", text: "Vendas", list: "vendas", new: "venda" }
    ]
  }),

  created() {
    this.$root.$on("updateDrawer", () => {
      this.drawer = !this.drawer
    })
  }
}
</script>
