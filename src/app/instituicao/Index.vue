<template>
  <v-layout wrap mg-top style="margin-left: 70px;">
    <v-flex xs7>
      <h2>Instituição</h2>
      <v-text-field
        v-model="form.instituicao"
        :error-messages="errors.collect('instituição')"
        label="Instituição"
        data-vv-name="instituição"
        required
      ></v-text-field>
    </v-flex>
    <v-flex xs7>
      <v-text-field
        v-model="responsavel"
        :error-messages="errors.collect('responsável')"
        label="Responsável"
        data-vv-name="responsável"
        required
      ></v-text-field>
    </v-flex>
    <v-flex xs7>
      <v-text-field
        v-model="email"
        :error-messages="errors.collect('email')"
        label="E-mail"
        data-vv-name="email"
        required
      ></v-text-field>
    </v-flex>
    <v-flex xs7>
      <v-text-field
        v-model="CNPJ"
        :error-messages="errors.collect('cnpj')"
        label="CNPJ"
        data-vv-name="cnpj"
        required
      ></v-text-field>
    </v-flex>
    <v-flex xs7>
      <v-text-field
        v-model="form.endereco.rua"
        :error-messages="errors.collect('rua')"
        label="Rua"
        data-vv-name="rua"
        required
      ></v-text-field>
    </v-flex>
    <v-flex xs7>
      <v-text-field
        v-model="form.endereco.numero"
        :error-messages="errors.collect('número')"
        label="Número"
        data-vv-name="número"
        :items="tipos"
        item-text="title"
        item-value="id"
        required
      ></v-text-field>
    </v-flex>
    <v-flex xs7>
      <v-text-field
        v-model="form.endereco.cep"
        :error-messages="errors.collect('código postal')"
        label="Código Postal"
        data-vv-name="código postal"
        required
      ></v-text-field>
    </v-flex>
    <v-flex xs7>
      <v-text-field
        v-model="form.endereco.bairro"
        :error-messages="errors.collect('bairro')"
        label="Bairro"
        data-vv-name="bairro"
        required
      ></v-text-field>
    </v-flex>
    <v-flex xs7>
      <v-autocomplete
        v-model="form.endereco.cidade"
        :error-messages="errors.collect('cidade')"
        label="Cidade"
        data-vv-name="cidade"
        :items="tipos"
        item-text="title"
        item-value="id"
        required
      ></v-autocomplete>
    </v-flex>
    <v-flex xs7>
      <v-autocomplete
        v-model="form.endereco.pais"
        :error-messages="errors.collect('país')"
        label="País"
        data-vv-name="país"
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
      instituicao: "",
      endereco: {
        rua: "",
        email: "",
        responsavel: "",
        numero: "",
        cep: "",
        bairro: "",
        cidade: "",
        pais: ""
      }
    }
  })
}
</script>

<style scoped>
input[type="file"] {
  position: absolute;
  left: -99999px;
}
</style>
