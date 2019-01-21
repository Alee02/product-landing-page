<template>
  <div id="app">
    <template>
  <v-app>
    <v-toolbar color="primary" dark fixed app>
      <!-- <v-toolbar-side-icon v-on:click.stop="drawer = !drawer"></v-toolbar-side-icon> -->
      <v-spacer></v-spacer>
      <v-toolbar-title>{{navTitle}}</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <br>
    <h1>{{title}}</h1>
      <h2>{{subHeading}}</h2>
    <v-content color="grey" pt-2>
      <v-container>
        <v-layout align-start justify-center fill-height>
           <v-flex shrink pa-1 md4 lg4>
        </v-flex>
          <v-flex grow xs12 sm4 md4 lg4 block>
            <v-img :src="productImg" :contain="imageContain"></v-img>
          </v-flex>
            <v-flex shrink pa-1>
              <h1>Get your copy now</h1>
               <h1>Get your copy now</h1>
                <h1>Get your copy now</h1>
                 <h1>Get your copy now</h1>
                  <h1>Get your copy now</h1>
              <Checkout></Checkout>
            </v-flex>
            <v-flex shrink pa-1 md4 lg4>
        </v-flex>
        </v-layout>
        <br><br><br>
        <h1>Reviews</h1>
        <br><br>
        <v-layout row align-end justify-center fill-height>
          <v-flex>
           <!-- <GeneralInfo
            infoTitle="Privacy Policy"
            info="The materials contained on this website are provided for general information purposes only and do not claim to be or constitute legal or other professional advice and shall not be relied upon as such. We do not accept any responsibility for any loss which may arise from accessing this website nor the reliance on information found on the website. To the fullest extent permitted by the law, we exclude all liability for loss or damages direct or indirect arising from use of this website. Please use common sense and good judgment when accessing any website. This website's content and the products for sale are based upon the programmer’s intuition and the operator’s research and knowledge. You should do your own research and confirm the information with other sources when searching for information regarding statistical data and always review the information carefully with your personal, professional representative and/or advisor(s) before using any of the tools presented or sold on any website. Our qualified support team is constantly engaged in rendering tutorials, marketing services, programming assistance, and similar professional services or advice via this website. However, the information provided is not intended to replace professional or arbitrary advice offered by a licensed marketing consultant or credentialed lawyer. You should not construe sales of our software and services as an endorsement of the views expressed herein, or any warranty or guarantee of any strategy, recommendation, action, or application of advice made by the programmers of each product and/or tool. Simply using these products are no guarantee of any specific result or outcome whatsoever. Individual results may vary dependent on a multitude of factors including, but not limited to, individual stratagem."
            ></GeneralInfo> -->
          </v-flex>
            <v-flex>
              <Reviews>
                <p>Is jahan mein koi ahle dil ki baat jab keh na sake, Toh woh Misbah Shah ki shayari ka sahar le</p>
                <h4>Ali Irfan Shah (Novelist, Masters - Urdu Language)</h4>
             </Reviews>
            </v-flex>
            <v-flex>
             <Reviews>
                  <p>She is just brilliant, Parveen Shakir of our time</p>
                   <h4>Dr. P. Zafar (M.B.B.S RMP Gynacologist)</h4>
             </Reviews>
            </v-flex>
            <v-flex>
             <Reviews>
                  <p>Is jahan mein koi ahle dil ki baat jab keh na sake, Toh woh Misbah Shah ki shayari ka sahar le</p>
                   <h4>Prof. Amjed (Punjab University)</h4>
             </Reviews>
            </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer color="secondary" height="auto" app>
      <v-layout
      justify-center
      row
      wrap
    >
      <v-btn
      class="white--text"
        flat
      >
        Privacy Policty
      </v-btn>
      <v-btn
      class="white--text"
        flat
      >
        Disclaimer
      </v-btn>
      <v-btn
      class="white--text"
        flat
      >
        Terms & Condition
      </v-btn>
      <v-flex
        primary
        lighten-2
        py-3
        text-xs-center
        white--text
        xs12
      >
        <span class="white--text">&copy; {{currentYear }}</span><span class="white--text"> - </span><strong class="white--text"> London Publishing Press Ltd</strong>
      </v-flex>
    </v-layout>
    </v-footer>
  </v-app>
</template>

  </div>
</template>

<script>
import Checkout from "./components/Checkout.vue";
import Reviews from "./components/Reviews.vue";
import GeneralInfo from "./components/GeneralInfo.vue";
import Product from "./components/Product.vue";

export default {
  name: 'app',
   components: {
    Checkout,
    Reviews, 
    GeneralInfo,
    Product
  },
   data: () => ({
    navTitle: "London Publish Press Ltd",
    currentYear: null,
    title: "Lazzat-e-Ghum",
    subHeading: "By Misbah Shah",
    productImg:  require('@//assets/book_main.png'),
    imageContain: true
  }),
  methods: {
    getCurrentYear() {
      this.currentYear = new Date().getFullYear();
    }
  },
  created() {
    this.getCurrentYear();
  },
  computed: {}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: #ebebed;
}
</style>
