<template>
  <v-toolbar :clipped-left="$vuetify.breakpoint.lgAndUp" color="#CD5350" dark app fixed>
    <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
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
export default {}
</script>

<style>
</style>
