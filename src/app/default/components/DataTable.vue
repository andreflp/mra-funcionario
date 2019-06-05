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

    <v-data-table :items="items" :search="search">
      <template slot="headers">
        <th class="text-xs-center" v-for="header in headers" :key="header.text">{{ header.text }}</th>
        <th class="text-xs-center">Ações</th>
      </template>
      <template v-slot:items="props">
        <tr>
          <td
            class="text-xs-center"
            v-for="header in headers"
            :key="header.title"
          >{{ props.item[header.value] }}</td>
          <td class="text-xs-center">
            <v-tooltip left>
              <v-btn slot="activator" flat icon color="primary" :to="`categoria/${props.item.id}`">
                <v-icon>edit</v-icon>
              </v-btn>
              <span>Editar</span>
            </v-tooltip>
            <v-tooltip right>
              <v-btn slot="activator" flat icon color="red">
                <v-icon>delete</v-icon>
              </v-btn>
              <span>Remover</span>
            </v-tooltip>
          </td>
        </tr>
      </template>
    </v-data-table>
  </v-card>
</template>


<script>
export default {
  props: {
    title: String,
    items: Array,
    headers: Array,
    btnTitle: String
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
