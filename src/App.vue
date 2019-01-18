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
    <v-content>
      <v-container>
        <v-layout justify-center row>
          <v-flex>
            <v-img :src="productImg" :contain="imageContain"></v-img>
          </v-flex>
          <v-flex>
            <p>There are some things we can write asdfasdfasdfasdfasdfasdfasdfasdfasdf</p>
             <Checkout></Checkout>
          </v-flex>
          <!-- <v-flex> -->
            <!-- <GeneralInfo
            infoTitle="Privacy Policy"
            info="The materials contained on this website are provided for general information purposes only and do not claim to be or constitute legal or other professional advice and shall not be relied upon as such. We do not accept any responsibility for any loss which may arise from accessing this website nor the reliance on information found on the website. To the fullest extent permitted by the law, we exclude all liability for loss or damages direct or indirect arising from use of this website. Please use common sense and good judgment when accessing any website. This website's content and the products for sale are based upon the programmer’s intuition and the operator’s research and knowledge. You should do your own research and confirm the information with other sources when searching for information regarding statistical data and always review the information carefully with your personal, professional representative and/or advisor(s) before using any of the tools presented or sold on any website. Our qualified support team is constantly engaged in rendering tutorials, marketing services, programming assistance, and similar professional services or advice via this website. However, the information provided is not intended to replace professional or arbitrary advice offered by a licensed marketing consultant or credentialed lawyer. You should not construe sales of our software and services as an endorsement of the views expressed herein, or any warranty or guarantee of any strategy, recommendation, action, or application of advice made by the programmers of each product and/or tool. Simply using these products are no guarantee of any specific result or outcome whatsoever. Individual results may vary dependent on a multitude of factors including, but not limited to, individual stratagem."
            ></GeneralInfo> -->
          <!-- </v-flex> -->
          </v-layout>
      </v-container>
    </v-content>
    <v-footer color="primary" app>
      <span class="white--text">&copy; {{currentYear}}</span>
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
    productImg:  "https://github.com/Alee02/product-landing-page/blob/master/src/assets/book_main.png?raw=true",
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
}
</style>
