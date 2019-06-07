<template>
  <v-layout wrap style="margin-left: 70px;" mg-top>
    <v-flex xs6>
      <h2>Relatórios</h2>
      <v-autocomplete
        v-model="tipoRelatorio"
        v-validate="'required'"
        label="Tipo Relatório"
        :items="relatorios"
        data-vv-name="tipo relatório"
        :error-messages="errors.collect('tipo relatório')"
      ></v-autocomplete>
    </v-flex>
    <v-flex xs6></v-flex>

    <v-flex xs3 style="padding-right: 5px;">
      <v-text-field
        v-model="dataInicial"
        v-validate="'required'"
        label="Data Inicial"
        data-vv-name="data inicial"
        :error-messages="errors.collect('data inicial')"
      />
    </v-flex>

    <v-flex xs3 style="padding-left: 5px;">
      <v-text-field
        v-model="dataFinal"
        v-validate="'required'"
        label="Data Final"
        data-vv-name="data final"
        :error-messages="errors.collect('data final')"
      />
    </v-flex>
    <v-flex xs6></v-flex>

    <v-flex xs6>
      <v-btn color="#CD5350" dark>Enviar</v-btn>
      <v-btn color="#CD5350" dark>Limpar</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  $_veeValidate: {
    validator: "new"
  },
  data() {
    return {
      relatorios: ["Países", "Instituições", "Vendas"],
      tipoRelatorio: "",
      tipo: [{ nome: "Entrada", value: "E" }, { nome: "Saída", value: "S" }],
      tipoSelected: [],
      paisesSelected: [0],
      instituicoesSelected: [0],
      dataInicial: "",
      dataFinal: "",
      progress: false,
      enabled: false,
      checkF: false,
      checkP: false
    }
  }
}
</script>

