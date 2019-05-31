<template>
  <v-card>
    <v-card-title>
      <h2>{{ title }}</h2>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Pesquisar"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table :headers="headers" :items="items" :search="search">
      <template v-slot:items="props">
        <td
          class="text-xs-left"
          v-for="header in headers"
          :key="header.title"
        >{{ props.item[header.value] }}</td>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  props: {
    title: String,
    items: Array,
    headers: Array
  },
  data() {
    return {
      search: ""
    }
  }
}
</script>

<style>
</style>
