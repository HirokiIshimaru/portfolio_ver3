<template>
  <div class="detail">
    <h1 class="detail__ttl">Mule</h1>
    <div class="detail__link"><a href="http://click.ecc.ac.jp/ecc/hisimaru/works/mule_web/dist/" target="blank">This Site <span></span></a></div>
    <div class="detail__description">
        <h2>Concept</h2>
        <p>音楽教室で音楽を習いたいと思っているけども仕事があり、なかなか音楽教室に通えない、<br>
          仕事終わりなどのスキマ時間に教えてもらいプロに近づけるサービス</p>
    </div> <!-- detail__description -->
    <div class="detail__description">
      <h2>Motivation</h2>
      <p>Vue.js学習後はじめてVue.jsとVueRouterを使ったSPAのアプリケーションを作成しました。<br>
        はじめてVue.jsを使った制作だったので手こずりましたが制作してとても勉強になった作品です。</p>
    </div> <!-- detail__consept -->
    <div class="detail__productDetail">
      <ul class="detail__productDetail__child01">
        <li>
          <p class="detail__productDetail__child01__enfont">Production</p>
          <p>個人制作</p>
        </li>
        <li>
          <p class="detail__productDetail__child01__enfont">Position</p>
          <p>企画/デザイン/コーディング</p>
        </li>
      </ul> <!-- detail__productDetail__child01 -->
      <ul class="detail__productDetail__child02">
        <li>
          <p>Use time</p>
          <p>60時間</p>
        </li>
        <li>
          <p>Tool</p>
          <p>Photoshop/XD/<br/>HTML/CSS/Vue.js</p>
        </li>
      </ul> <!-- detail__productDetail__child02 -->
    </div> <!-- detail__productDetail -->
     <div class="detail__button"><a href="https://github.com/HirokiIshimaru/Mule" class="works__content__link__btn" target="_blank" rel="noopener">Githubへ</a></div>
    <div class="detail__button"><router-link to="./">他の作品を見る</router-link></div>
    <footer><p class="copyright">&copy; 2020 hirokiishimaru</p></footer>
  </div> <!-- detail -->
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@300;400;700&family=Noto+Serif+TC:wght@200;400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300&display=swap');
@import '@/sass/detail.scss';
$jpFont: 'Noto Sans JP', sans-serif;
$enFont: 'Noto Serif TC','Noto Serif JP', serif;
$fontColor: #fff;

h1,h2,h3, p, a, li, button{
  color: $fontColor;
  text-decoration: none;
}

.detail__link{
  background-image: url('../../assets/mule_detail.jpg');
  background-size: cover;
}
</style>