<template>
  <v-content class="body">
    <Toolbar/>
    <Menu/>
    <transition name="router-anim">
      <router-view/>
    </transition>
  </v-content>
</template>

<script>
import Menu from "@/app/default/components/Menu"
import Toolbar from "@/app/default/components/Toolbar"
export default {
  components: {
    Menu,
    Toolbar
  },
  data: () => ({})
}
</script>

<style>
</style>
