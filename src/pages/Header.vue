<template>
  <div id="header">
    <div id="header_top">
      <span id="header_title">TECH-BLOG</span><br>
      <span id="header_copy">毎日投稿</span>
    </div>
    <nav>
	<ul>
		<li>プロフィール</li>
		<li>当サイト</li>
		<li>記事一覧</li>
		<li>コンタクト</li>
		<li>お知らせ</li>
	</ul>
</nav>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
/* ヘッダー部分 */
#header {
  height: 190px;
  min-width: 100%;
  background-color: #000;
}
/* ヘッダートップ */
#header_top {
  background-color: #f8e81c;
  height: 130px;
  text-align: center;
}
/* ヘッダータイトル */
#header_title {
  color: #000;
  display: inline-block;
  font-size: 40px;
  margin-top: 20px;
}
/* ヘッダーコピー */
#header_copy {
	border-bottom: 1px dashed #000000;
	font-size: 15px;
	padding-bottom: 5px;
}
/* ヘッダー内のメニュー */
#header nav {
	height: 60px;
	margin: 0 auto;
	width: 1150px;
}
#header nav ul {
	height: 40px;
	margin: 10px 0px 0px 0px;
	padding-left: 0px;
}
#header nav ul li {
	border-right: 1px solid #8D8D8D;
	color: #fff;
	display: inline-block;
	font-size: 25px;
	font-weight: bold;
	line-height: 40px;
    padding-left: 1.5rem;
	padding-right: 1.5rem;
}
#header nav ul li:first-child {
	border-left: 1px solid #8D8D8D;
}
</style>
