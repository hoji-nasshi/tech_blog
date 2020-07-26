<template>
  <div>
    <h1>{{ info }}</h1>
    <h1>OK</h1>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      info: "",
    };
  },
  mounted() {
    axios
      .get("https://muscletech.microcms.io/api/v1/blog/k6zimc9au", {
        headers: { "X-API-kEY": "5f3d06aa-83c1-47d2-845a-419a9d4335ed" },
      })
      .then((response) => (this.info = response.data.title));
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
