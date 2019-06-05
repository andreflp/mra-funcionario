<template>
  <v-layout wrap mg-top style="margin-left: 70px;">
    <v-flex xs7>
      <h2>Pacote</h2>
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
      <div>
        <v-text-field
          prepend-icon="attach_file"
          single-line
          v-model="filename"
          :label="label"
          :required="required"
          @click.native="onFocus"
          :disabled="disabled"
          ref="fileTextField"
        ></v-text-field>
        <input
          type="file"
          :accept="accept"
          :multiple="false"
          :disabled="disabled"
          ref="fileInput"
          @change="onFileChange"
        >
      </div>
    </v-flex>
    <v-flex xs7>
      <v-btn color="#CD5350">Enviar</v-btn>
      <v-btn color="#CD5350">Limpar</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  $_veeValidate: {
    validator: "new"
  },

  props: {
    value: {
      type: [Array, String]
    },
    accept: {
      type: String,
      default: "*"
    },
    label: {
      type: String,
      default: "Escolha a imagem"
    },
    required: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean, // not yet possible because of data
      default: false
    }
  },

  data: () => ({
    form: {
      pais: "",
      tipo: "",
      preco: "",
      periodo: ""
    },
    filename: ""
  }),

  watch: {
    value(v) {
      this.filename = v
    }
  },
  mounted() {
    this.filename = this.value
  },

  methods: {
    getFormData(files) {
      const data = new FormData()
      ;[...files].forEach(file => {
        data.append("data", file, file.name) // currently only one file at a time
      })
      return data
    },
    onFocus() {
      if (!this.disabled) {
        this.$refs.fileInput.click()
      }
    },
    onFileChange($event) {
      const files = $event.target.files || $event.dataTransfer.files
      const form = this.getFormData(files)
      if (files) {
        if (files.length > 0) {
          this.filename = [...files].map(file => file.name).join(", ")
        } else {
          this.filename = null
        }
      } else {
        this.filename = $event.target.value.split("\\").pop()
      }
      this.$emit("input", this.filename)
      this.$emit("formData", form)
    }
  }
}
</script>

<style scoped>
input[type="file"] {
  position: absolute;
  left: -99999px;
}
</style>
