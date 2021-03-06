import Vue from "vue";
import VueRouter from "vue-router";
import ArticleDetail from "./../pages/ArticleDetail.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/article/:id",
      name: "Article",
      component: ArticleDetail,
    },
  ],
});
