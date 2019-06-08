<template>
  <v-layout wrap row mg-top style="margin-left: 70px;">
    <v-flex xs7>
      <h2>Cliente</h2>
      <v-text-field
        label="Nome"
        v-model="form.nome"
        v-validate="'required'"
        :error-messages="errors.collect('nome')"
        data-vv-name="nome"
        required
      ></v-text-field>
    </v-flex>
    <v-flex xs7>
      <v-text-field
        label="Sobrenome"
        v-model="form.sobrenome"
        v-validate="'required'"
        :error-messages="errors.collect('sobrenome')"
        data-vv-name="sobrenome"
        required
      ></v-text-field>
    </v-flex>
    <v-flex xs7>
      <v-text-field
        label="CPF"
        v-model="form.cpf"
        v-validate="'required'"
        :error-messages="errors.collect('cpf')"
        :mask="masks.cpf"
        data-vv-name="cpf"
        required
      ></v-text-field>
    </v-flex>
    <v-flex xs7>
      <v-text-field
        label="E-mail"
        v-model="form.email"
        v-validate="'required|email'"
        :error-messages="errors.collect('email')"
        data-vv-name="email"
        required
      ></v-text-field>
    </v-flex>
    <v-flex xs7>
      <v-text-field
        label="Confirmação de E-mail"
        v-model="form.emailConfirm"
        v-validate="'required|email'"
        :error-messages="errors.collect('confirmação')"
        data-vv-name="confirmação"
        required
      ></v-text-field>
    </v-flex>
    <v-flex xs7>
      <v-text-field
        label="Data de Nascimento"
        v-model="form.dataNasc"
        v-validate="'required'"
        :error-messages="errors.collect('data de nascimento')"
        :mask="masks.date"
        data-vv-name="data de nascimento"
        required
      ></v-text-field>
    </v-flex>
    <v-flex xs7>
      <v-text-field
        label="Telefone"
        v-model="form.telefone"
        v-validate="'required'"
        :mask="masks.telefone"
        :error-messages="errors.collect('telefone')"
        data-vv-name="telefone"
        required
      ></v-text-field>
    </v-flex>
    <v-flex xs7>
      <v-btn color="#CD5350" dark @click="submit">Enviar</v-btn>
      <v-btn color="#CD5350" dark @click="clear">Limpar</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import masks from "../../utils/masks"
export default {
  $_veeValidate: {
    validator: "new"
  },

  data: () => ({
    form: {
      nome: "",
      sobrenome: "",
      email: "",
      emailConfirm: "",
      dataNasc: "",
      telefone: ""
    },
    masks
  })
}
</script>
