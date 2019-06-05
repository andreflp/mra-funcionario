<template>
  <v-layout style="margin-top: 20px; margin-right: -100px;">
    <v-flex offset-xs10 xs2>
      <v-btn :to="to" small color="#CD5350" class="white--text">
        <v-icon dark style="margin-right: 3px;">add</v-icon>
        <span>Adicionar</span>
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    to: {
      type: String
    }
  }
}
</script>

<style>
</style>
