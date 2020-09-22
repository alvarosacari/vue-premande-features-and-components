import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import es from 'vuetify/lib/locale/es.js'
import en from 'vuetify/lib/locale/en.js'

Vue.use(Vuetify)

const opts = {
  lang: {
    locales: { es, en },
    current: es
  },
  theme: {
    dark: true
  }
}

export default new Vuetify(opts)
