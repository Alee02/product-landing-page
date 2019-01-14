<template>
  <div id="generalInfo">
      <h1>Info component</h1>
      <h1>{{infoTitle}}</h1>
      <p>{{info}}</p>
  </div>
</template>

<script>
export default {
  name: "generalInfo",
  props: {
      infoTitle: String,
      info: String
  },
  data: () => ({
    // infoTitle: this.infoTitle,
    // info: this.info 
  }),
  created() {
    // eslint-disable-next-line
    console.log("general Info component was just created");
  },
  methods: {
  }
};
</script>

<style>
</style>
