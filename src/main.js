import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/es5/util/colors'
import VueStripeCheckout from 'vue-stripe-checkout';

Vue.config.productionTip = false

 
Vue.use(VueStripeCheckout, 'pk_live_NabI87Fil8TmdEMDXvVdnDy6');

Vue.use(Vuetify, {
  theme: {
    primary: colors.brown.darken2, // #E53935
    secondary: colors.brown.darken2, // #FFCDD2
    accent: colors.brown.darken2 // #3F51B5
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
