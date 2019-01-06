<template>
  <div id="checkout">
    <vue-stripe-checkout
      ref="checkoutRef"
      :image="image"
      :name="name"
      :description="description"
      :currency="currency"
      :amount="amount"
      :allow-remember-me="false"
      @done="done"
      @opened="opened"
      @closed="closed"
      @canceled="canceled"
    ></vue-stripe-checkout>
    <v-btn color="primary" @click="checkout">Checkout</v-btn>
  </div>
</template>

<script>
export default {
  name: "checkout",
  data: () => ({
    image: "https://misbahshah.com/franquias/2/371212/editor-html/2402510.png",
    name: "Lazzat-e-ghum",
    description: "By Misbah Shah",
    currency: "GBP",
    amount: 299
  }),
  created() {
    // eslint-disable-next-line
    console.log("checkout component created");
  },
  methods: {
    async checkout() {
      // token - is the token object
      // args - is an object containing the billing and shipping address if enabled
      const { token, args } = await this.$refs.checkoutRef.open();
    },
    done({ token, args }) {
      // token - is the token object
      // args - is an object containing the billing and shipping address if enabled
      // do stuff...
    },
    opened() {
      // do stuff
    },
    closed() {
      // do stuff
    },
    canceled() {
      // do stuff
    }
  }
};
</script>

<style>
</style>
