import Vue from "vue"
import VeeValidate, { Validator } from "vee-validate"
import pt_BR from "vee-validate/dist/locale/pt_BR"

Vue.use(VeeValidate)
Validator.localize("pt_BR", pt_BR)
