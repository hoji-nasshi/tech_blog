<template>
  <div v-if="this.info">
    <article class="article" v-for="item in this.info.contents" :key="item.id">
      <router-link :to="{name:'Article',params:{id:item.id}}">
        <figure class="article-figure">
          <img :src="item.thumbnail.url" />
        </figure>
        <div class="article-info">
          <h1 class="article-title">{{ item.title }}</h1>
          <span class="article-category">{{ item.tag }}</span>
          <time class="article-date">{{ item.postedDate | dateFormat }}</time>
          <p class="shortcut">{{ item.content }}</p>
        </div>
      </router-link>
    </article>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    info: {},
  },
  filters: {
    dateFormat: function(value) {
      //APIで取得した日付を整形
      if (!value) return ""; //valueに何も入っていなければ''を返す
      value = value.substr(0, 10);
      return value;
    },
  },
  updated(){
    let targetElement = document.getElementsByClassName("shortcut")[1];
    let targetElementHeight = Number(window.getComputedStyle(targetElement).height.toString().slice(0,-2));
    let targetText = targetElement.textContent.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g,''); // HTMLタグを除去して取得
    //const targetInnerHTML = targetElement.innerHTML;
    const clone = targetElement.cloneNode(true);
    clone.style.visibility  = "hidden";
    clone.style.position    = "absolute";
    clone.style.overflow    = "visible";
    clone.style.width       = `${targetElement.clientWidth}px`;
    clone.style.height      = "auto";
    targetElement.insertAdjacentElement("afterend", clone);

    while((targetText.length > 0) && (clone.clientHeight > targetElementHeight)) {
      targetText = targetText.substr(0, targetText.length - 1);
      clone.innerHTML = `${targetText}...`;
    }
    console.log(clone.clientHeight)
    console.log(targetElement.clientHeight)
    targetElement.innerHTML = clone.innerHTML;

    var parent = document.getElementsByClassName("shortcut")[0].parentNode;
    console.log('parent', parent); // <ul id="parent">...</ul>

    clone.parentNode.removeChild(clone);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.article {
  height: 200px;
  margin-top: 20px;
  background-color: white;
  width: 90%;
  display: inline-block;
  text-align: center;
}
/* 記事一覧のfigure */
.article figure {
  float: left;
  height: 100%;
  width: 30%;
  margin: 0;
  background-color: #8b8b8b;
  /*子要素を上下左右中央揃え */
  display: flex;
  justify-content: center;
  align-items: center;
}
/* 記事一覧のimg */
.article figure img {
  border-radius: 0.4em;
  height: auto; /**画像の縦横比を維持させて表示 */
  width: 90%;
  display: inline-block;
  vertical-align: middle;
}
/* 記事一覧の詳細部分 */
.article-info {
  display: block;
  float: right;
  width: 70%;
  height: 100%;
}
/* 記事一覧のタイトル */
.article-info h1 {
  margin-top: 0em;
  margin-bottom: 0.5em;
  margin-left: auto;
  margin-right: auto;
  line-height: 3em; /*縦にセンタリング */
  height:3em;
  font-size:1.2em;
  background-color:azure;
}
/* ショートカットしたい箇所のcss */
.shortcut {
  height: 50%;
  overflow: hidden;
}
/* カテゴリータグ */
#content_main .article-category {
  background-color: #fff687;
  border-radius: 1.2em;
  color: #000000;
  padding: 0.4em 0.4em 0.4em 0.4em;
}
/* 投稿日 */
.article-date {
  margin-left: 1em;
}
/* 記事冒頭の紹介文 */
.article-info p {
  margin-top:0.5em;
}
</style>
