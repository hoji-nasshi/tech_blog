import Vue from "vue";
import VueRouter from "vue-router";
import ArticleDetail from "./../pages/ArticleDetail.vue";
import Article from "./../pages/Article.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/article",
      component: Article,
      children: [
        {
          path: ":id",
          name: "Article",
          component: ArticleDetail,
          props: true,
        },
      ],
    },
  ],
});
