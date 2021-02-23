<template>
  <div class="detail">
    <h1 class="detail__ttl">ポートフォリオver1</h1>
    <div class="detail__link"><a href="http://click.ecc.ac.jp/ecc/hisimaru/works/portfolio01/portfolio.html" target="blank">This Site <span></span></a></div>
    <div class="detail__description">
        <h2>Concept</h2>
        <p>白を基調としたシンプルかつ見やすさ重視のポートフォリオサイト</p>
    </div> <!-- detail__description -->
    <div class="detail__description">
      <h2>Motivation</h2>
      <p>2年生の春休みの春季講習の時に2週間で制作しました。<br>
        初めてのポートフォリオ制作だったのでプログラミングに力を入れようと思い、アニメーションに力を入れました。</p>
    </div> <!-- detail__consept -->
    <div class="detail__productDetail">
      <ul class="detail__productDetail__child01">
        <li>
          <p class="detail__productDetail__child01__enfont">Production</p>
          <p>個人制作</p>
        </li>
        <li>
          <p class="detail__productDetail__child01__enfont">Position</p>
          <p>企画/デザイン/コーデング</p>
        </li>
      </ul> <!-- detail__productDetail__child01 -->
      <ul class="detail__productDetail__child02">
        <li>
          <p>Use time</p>
          <p>30時間</p>
        </li>
        <li>
          <p>Tool</p>
          <p>Photoshop/XD/<br/>HTML/SCSS/JavaScript</p>
        </li>
      </ul> <!-- detail__productDetail__child02 -->
    </div> <!-- detail__productDetail -->
    <div class="detail__button"><a href="https://github.com/HirokiIshimaru/portfolio_ver1" class="works__content__link__btn" target="_blank" rel="noopener">Githubへ</a></div>
    <div class="detail__button"><router-link to="./">他の作品を見る</router-link></div>
    <footer><p class="copyright">&copy; 2021 hirokiishimaru</p></footer>
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
  background-image: url('../../assets/portfolio-v1_detail.jpg');
  background-size: cover;
}
</style>