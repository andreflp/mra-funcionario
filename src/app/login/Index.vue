<template>
  <div style="background-color: #E57373; width: 100%; height: 100%;">
    <v-layout justify-center style="margin-top: 230px; ">
      <v-flex lg4 md6 sm6 xs4>
        <v-card>
          <v-card-title color="#CD5350" class="padding-bottom: 0;">
            <div>
              <span class="headline">Login</span>
            </div>
          </v-card-title>
          <v-card-text>
            <form>
              <v-text-field
                label="Login"
                v-model="form.usuario"
                v-validate="'required|email'"
                :error-messages="errors.collect('login')"
                data-vv-name="login"
                required
              ></v-text-field>
              <v-text-field
                label="Senha"
                browser-autocomplete="new-password"
                v-model="form.senha"
                v-validate="'required'"
                :error-messages="errors.collect('senha')"
                data-vv-name="senha"
                required
                :append-icon="show ? 'visibility' : 'visibility_off'"
                :type="show ? 'text' : 'password'"
                @click:append="show = !show"
              ></v-text-field>
            </form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="#CD5350" dark to="pacotes" @click="submit">Login</v-btn>
            <v-btn color="#CD5350" dark @click="clear">Limpar</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data: () => ({
    show: false,
    form: {
      usuario: "",
      senha: ""
    }
  })
}
</script>

<style>
</style>
