<template>
  <v-layout wrap mg-top style="margin-left: 70px;">
    <v-flex xs7>
      <h2>País</h2>
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
        v-model="form.idiomas"
        :error-messages="errors.collect('idiomas')"
        label="Idiomas"
        data-vv-name="idiomas"
        :items="tipos"
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
      pais: "",
      idiomas: ""
    }
  })
}
</script>

