<template>
  <div class="widget">
    <span class="widget-title">CATEGORY</span>
    <ul>
      <li>ライフ <span>100</span></li>
      <li>ガジェット <span>100</span></li>
      <li>アプリ <span>100</span></li>
      <li>スタートアップ <span>100</span></li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>
/* サイドバー部分 */
.widget {
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
  background-color: #fff;
  border-radius: 5px;
  margin-top: 30px;
  min-height: 300px;
  padding-left: 18px;
  padding-right: 18px;
}
/* サイドバーのタイトル */
.widget-title {
  border-bottom: 1px solid #4dbfa5;
  display: block;
  font-size: 25px;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 100%;
}
/* サイドバーの各項目 */
.widget ul {
  list-style: none;
  margin-top: 0px;
  margin-bottom: 0px;
  padding-left: 0px;
}
.widget ul li {
  border-bottom: 1px dashed #b5b5b5;
  color: #686868;
  font-size: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>
