<template>
  <div>
    <v-layout justify-center>
      <v-flex xs11 mg-top>
        <DataTable title="Instituições" :headers="headers" :items="orcamentos"/>
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
      { text: "Instituição", value: "instituicao" },
      { text: "Endereço", value: "endereco" },
      { text: "País", value: "pais" }
    ],
    orcamentos: [
      {
        pais: "Estados Unidos",
        instituicao: "Universidade Harvard",
        endereco: "Cambridge, MA 02138"
      },
      {
        pais: "Estados Unidos",
        instituicao: "Universidade Yale",
        endereco: "New Haven, CT 06520"
      },
      {
        pais: "Inglaterra, Reino Unido",
        instituicao: "Universidade Oxford",
        endereco: "Oxford OX1 2JD"
      }
    ]
  })
}
</script>

<style>
</style>