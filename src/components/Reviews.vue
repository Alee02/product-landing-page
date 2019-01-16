<template>
  <div id="reviews">
      <h1>Reviews</h1>
      <v-flex>
        <slot></slot>
      </v-flex>
  </div>
</template>

<script>
export default {
  name: "reviews",
  data: () => ({
  }),
  created() {
    // eslint-disable-next-line
    console.log("checkout component created");
  },
  methods: {
  }
};
</script>

<style>
</style>
