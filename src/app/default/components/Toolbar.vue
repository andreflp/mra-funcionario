<template>
  <v-toolbar
    :clipped-left="$vuetify.breakpoint.lgAndUp"
    v-model="drawer"
    color="#CD5350"
    dark
    app
    fixed
  >
    <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <span class="hidden-sm-and-down">MRA</span>
    </v-toolbar-title>
    <v-text-field
      flat
      solo-inverted
      hide-details
      prepend-inner-icon="search"
      label="Pesquisar"
      class="hidden-sm-and-down"
    ></v-text-field>
    <v-spacer></v-spacer>
  </v-toolbar>
</template>

<script>
export default {
  data: () => ({
    drawer: false
  }),

  watch: {
    drawer() {
      this.$root.$emit("updateDrawer")
    }
  }
}
</script>

<style>
</style>
