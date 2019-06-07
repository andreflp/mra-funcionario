<template>
  <div>
    <v-layout justify-center>
      <v-flex xs11 mg-top>
        <DataTable title="Pacotes" :headers="headers" :items="orcamentos"/>
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
      {
        text: "País",
        align: "left",
        sortable: false,
        value: "pais"
      },
      { text: "Tipo Intercâmbio", value: "tipo" },
      { text: "Período", value: "periodo" },
      { text: "Preço", value: "preco" }
    ],
    orcamentos: [
      {
        pais: "Estados Unidos",
        tipo: "Trabalho",
        periodo: "6 Mêses",
        preco: "R$ 6.999,90"
      },
      {
        pais: "Inglaterra",
        tipo: "Estudos",
        periodo: "5 Mêses",
        preco: "R$ 7.500,00"
      },
      {
        pais: "Irlanda",
        tipo: "Negócios",
        periodo: "6 Mêses",
        preco: "R$ 4.750,00"
      }
    ]
  })
}
</script>

<style>
</style>