<template>
  <div>
    <div>
      <p>{{ this.item.postedDate | dateFormat }}</p>
      <h1>{{ this.item.title }}</h1>
      <p>{{ this.item.tag }}</p>
      <p>{{ this.item.content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    item: {},
  },
  data() {
    return {};
  },
  filters: {
    dateFormat: function(value) {
      // 日付をフォーマット
      if (!value) return "";
      value = value.substr(0, 10);
      return value;
    },
  },
  mounted() {
    console.log(this.item);
  },
};
</script>
<style scoped></style>
