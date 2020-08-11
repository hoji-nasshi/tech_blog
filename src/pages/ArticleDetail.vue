<template>
  <div>
    <p>{{ this.msg }}</p>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    content: {},
  },
  data() {
    return {
      //msg: this.info.contents[1].content,
      msg: this.content,
    };
  },
};
</script>
<style scoped></style>
