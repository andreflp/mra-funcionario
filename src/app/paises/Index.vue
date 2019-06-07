<template>
  <div>
    <v-layout justify-center>
      <v-flex xs11 mg-top>
        <DataTable title="Países" :headers="headers" :items="paises"/>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import DataTable from "@/app/default/components/DataTable"

export default {
  components: {
    DataTable
  },

  data: () => ({
    headers: [
      { text: "País", value: "pais" },
      { text: "Línguas", value: "linguas" }
    ],
    paises: [
      { pais: "Alemanha", linguas: "Alemão" },
      { pais: "Canadá", linguas: "Inglês, Francês" },
      { pais: "Espanha", linguas: "Espanhol" },
      { pais: "Estados Unidos", linguas: "Inglês" },
      { pais: "Inglaterra", linguas: "Inglês" },
      { pais: "Irlanda", linguas: "Inglês, Irlandês" },
      { pais: "Itália", linguas: "Italiano" }
    ]
  })
}
</script>

<style>
</style>