<template>
  <div>
    <v-layout justify-center>
      <v-flex xs11 mg-top>
        <DataTable title="Vendas" :headers="headers" :items="vendas"/>
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
      { text: "Pacote", value: "pacote" },
      { text: "Cliente", value: "cliente" },
      { text: "Situação", value: "situacao" }
    ],
    vendas: [
      {
        pacote: "Estados Unidos",
        cliente: "Bruna Santos",
        situacao: "Enviado"
      },
      {
        pacote: "Japão",
        cliente: "José da Silva",
        situacao: "Enviado"
      },
      {
        pacote: "Irlanda",
        cliente: "Maria Aparecida",
        situacao: "Pendente"
      }
    ]
  })
}
</script>

<style>
</style>