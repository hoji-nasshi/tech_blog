<template>
  <div>
    <div>
      <Header></Header>
    </div>
    <div id="wrapper">
      <div id="content">
        <div id="content_main">
          <router-view
            :info="info"/>
        </div>
        <div id="content_sub">
          <Aside></Aside>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./pages/Header.vue";
import Footer from "./pages/Footer.vue";
import Aside from "./pages/Aside.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Aside,
  },
  data() {
    return {
      info: "",
    };
  },
  methods: {
    onClick() {
      this.$router.push({ name: "Article", params: { id: 1234 } });
    },
  },
  created() {
    axios
      .get("https://muscletech.microcms.io/api/v1/blog", {
        headers: { "X-API-kEY": "5f3d06aa-83c1-47d2-845a-419a9d4335ed" },
      })
      .then((response) => (this.info = response.data));
  },
  updated() {
    console.log(this.info);
    console.log(Object.keys(this.info.contents).length);
  },
};
</script>

<style>
/* ラッパー部分 */
#wrapper {
  background-color: #89bfff;
  min-width: 100%;
}
/* コンテンツ部分 */
#content {
  width: 100%;
  min-height: 500px;
  display: inline-block;
  text-align: center;
}
/* コンテンツメイン部分 */
#content_main {
  width: 70%;
  min-height: 500px;
  float: left; /*float属性を追加*/
}
/* コンテンツサブ部分 */
#content_sub {
  float: right;
  width: 30%;
  min-height: 500px;
}
</style>
