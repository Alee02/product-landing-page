<template>
  <v-app>
    <v-toolbar color="primary" dark fixed app>
      <!-- <v-toolbar-side-icon v-on:click.stop="drawer = !drawer"></v-toolbar-side-icon> -->
      <v-spacer></v-spacer>
      <v-toolbar-title>Misbah Shah</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <h1>{{title}}</h1>
      <h2>{{subHeading}}</h2>

      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <v-flex text-xs-center>
            <v-img :src="productImg" aspect-ratio="2" :contain="imageContain"></v-img>
          </v-flex>
          <v-flex>
             <Checkout></Checkout>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer color="primary" app>
      <span class="white--text">&copy; {{currentYear}}</span>
    </v-footer>
  </v-app>
</template>

<script>
import Checkout from "../components/Checkout.vue";

export default {
  name: "LandingPage",
  components: {
    Checkout
  },
  props: {
    source: String,
    msg: String
  },
  data: () => ({
    drawer: null,
    currentYear: null,
    title: "Product Title",
    subHeading: "Sub-Heading",
    productImg:
      "https://misbahshah.com/franquias/2/371212/editor-html/2402853.png",
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
