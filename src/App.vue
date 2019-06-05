<template>
  <v-app id="app">
    <router-view/>
  </v-app>
</template>

<style>
.mg-top {
  margin-top: 45px;
}

.router-anim-enter-active {
  animation: coming 0.7s;
  animation-delay: 0.1s;
  opacity: 0;
}

@keyframes coming {
  from {
    transform: translateX(-50px);
    opacity: 0;
  }
  to {
    transform: translateX(0px);
    opacity: 1;
  }
}

html {
  overflow-y: auto;
}
</style>
