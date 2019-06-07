import Vue from "vue"
import Vuetify from "vuetify"
import "vuetify/src/stylus/app.styl"
import VueI18n from "vue-i18n"
import { translate } from "../config/translate"

translate(Vue, VueI18n, Vuetify)

Vue.use(Vuetify, {
  iconfont: "md"
})
