<template>
  <v-layout wrap mg-top style="margin-left: 70px;">
    <v-flex xs7>
      <h2>Venda</h2>
      <v-autocomplete
        v-model="form.cliente"
        :error-messages="errors.collect('cliente')"
        label="Cliente"
        data-vv-name="cliente"
        :items="paises"
        item-text="title"
        item-value="id"
        required
      ></v-autocomplete>
    </v-flex>
    <v-flex xs7>
      <v-autocomplete
        v-model="form.pacote"
        :error-messages="errors.collect('pacote')"
        label="Pacote"
        data-vv-name="pacote"
        :items="paises"
        item-text="title"
        item-value="id"
        required
      ></v-autocomplete>
    </v-flex>

    <v-flex xs7>
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

  data: () => ({
    form: {
      nome: "",
      pais: "",
      instituicao: "",
      tipo: "",
      preco: "",
      periodo: "",
      observacoes: ""
    }
  })
}
</script>


