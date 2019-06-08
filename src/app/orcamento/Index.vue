<template>
  <v-layout wrap mg-top style="margin-left: 70px;">
    <v-flex xs7>
      <h2>Orçamento</h2>
      <v-text-field
        v-model="form.cliente"
        :error-messages="errors.collect('cliente')"
        label="Cliente"
        data-vv-name="cliente"
        required
      ></v-text-field>
    </v-flex>
    <v-flex xs7>
      <v-autocomplete
        v-model="form.pais"
        :error-messages="errors.collect('país')"
        label="País"
        data-vv-name="país"
        :items="paises"
        item-text="title"
        item-value="id"
        required
      ></v-autocomplete>
    </v-flex>
    <v-flex xs7>
      <v-autocomplete
        v-model="form.instituicao"
        :error-messages="errors.collect('instituição')"
        label="Instituição"
        data-vv-name="instituição"
        :items="instituicoes"
        item-text="title"
        item-value="id"
        required
      ></v-autocomplete>
    </v-flex>
    <v-flex xs7>
      <v-autocomplete
        v-model="form.tipo"
        :error-messages="errors.collect('tipo de intêrcambio')"
        label="Tipo de Intercâmbio"
        data-vv-name="tipo de intercâmbio"
        :items="tipos"
        item-text="title"
        item-value="id"
        required
      ></v-autocomplete>
    </v-flex>
    <v-flex xs7>
      <v-text-field
        v-model="form.preço"
        :error-messages="errors.collect('preço')"
        label="Preço"
        data-vv-name="preço"
        required
      ></v-text-field>
    </v-flex>
    <v-flex xs7>
      <v-text-field
        v-model="form.período"
        :error-messages="errors.collect('período')"
        label="Período"
        data-vv-name="período"
        required
      ></v-text-field>
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
      pais: "",
      tipo: "",
      preco: "",
      periodo: ""
    },
    filename: ""
  })
}
</script>
