<template>
  <div class="content-header">
    <div>
      <div class="article-date">
        <time>{{ this.item.postedDate | dateFormat }}</time>
      </div>
      <h1 class="article-title">{{ this.item.title }}</h1>
      <a class="article-category">{{ this.item.tag }}</a>
    </div>
    <div class="article-content">
      <p class="article-detail">{{ this.item.content }}</p>
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
    return {
      innerHTML: "",
    };
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
    let target = document.getElementsByClassName("article-detail")[0];
    target.innerHTML = `${this.item.content}`;
  },
};
</script>
<style scoped>
.content-header {
  display: block;
  padding: 10%;
}
.article-date {
  color: #ffffff;
  background-color: #ee7674;
  width: 20%;
  margin: 0px 0px 0px 0px;
  font-size: 1rem;
  text-align: center;
}
.article-title {
  padding: 0.2rem;
  background: #286da8;
  color: #ffffff;
  font-size: 1.8rem;
  display: block;
  margin: 0px 0px 0px 0px;
}
.article-category {
  border: 0.05rem solid #e6e6e6;
  border-radius: 2px;
  float: left;
  display: block;
  line-height: 32px;
  margin: 0.3rem 0.3rem 0 0;
  padding: 0 1rem;
}
.article-content p {
  display: block;
  clear: left;
  font-size: 1.1rem;
  padding: 2.5rem;
}
</style>
