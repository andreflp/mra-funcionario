<template>
  <div>
    <BtnAdicionar/>
    <v-layout justify-center>
      <v-flex xs11 style="margin-top: 20px;">
        <DataTable title="Instituições" :headers="headers" :items="orcamentos"/>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import DataTable from "@/app/default/components/DataTable"
import BtnAdicionar from "@/app/default/components/BtnAdicionar"
export default {
  components: {
    DataTable,
    BtnAdicionar
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
      { text: "Preço", value: "preco" },
      { text: "Situação", value: "situacao" }
    ],
    orcamentos: [
      {
        pais: "Estados Unidos",
        tipo: "Trabalho",
        periodo: "6 Mêses",
        preco: "R$ 6.999,90",
        situacao: "Pendente"
      },
      {
        pais: "Inglaterra",
        tipo: "Estudos",
        periodo: "5 Mêses",
        preco: "R$ 7.500,00",
        situacao: "Finalizado"
      },
      {
        pais: "Irlanda",
        tipo: "Negócios",
        periodo: "6 Mêses",
        preco: "R$ 4.750,00",
        situacao: "Pendente"
      }
    ]
  })
}
</script>

<style>
</style>