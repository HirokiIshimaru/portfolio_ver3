<template>
  <div class="detail">
    <h1 class="detail__ttl">Tuiless</h1>
    <div class="detail__link"><a href="http://click.ecc.ac.jp/ecc/hisimaru/works/web/start.html" target="blank">This Site <span></span></a></div>
    <div class="detail__description">
        <h2>Concept</h2>
        <p>「目で見て認識、話して改善」<br>
          自分の口癖を設定し、口癖を言った回数カウントし、口癖を言った回数を目で見て確認できます。</p>
    </div> <!-- detail__description -->
    <div class="detail__description">
      <h2>Motivation</h2>
      <p>JavaScriptを使って音声認識、口癖を言った回数を数えるカウント機能<br>
        会話の中から口癖を見つける機能の作成に携わりました。</p>
    </div> <!-- detail__consept -->
    <div class="detail__productDetail">
      <ul class="detail__productDetail__child01">
        <li>
          <p class="detail__productDetail__child01__enfont">Production</p>
          <p>グループ制作</p>
        </li>
        <li>
          <p class="detail__productDetail__child01__enfont">Position</p>
          <p>企画/コーディング</p>
        </li>
      </ul> <!-- detail__productDetail__child01 -->
      <ul class="detail__productDetail__child02">
        <li>
          <p>Use time</p>
          <p>50時間</p>
        </li>
        <li>
          <p>Tool</p>
          <p>HTML/SCSS/JavaScript</p>
        </li>
      </ul> <!-- detail__productDetail__child02 -->
    </div> <!-- detail__productDetail -->
    <div class="detail__button"><a href="https://github.com/HirokiIshimaru/tuiless_app" class="works__content__link__btn" target="_blank" rel="noopener">Githubへ</a></div>
    <div class="detail__button"><router-link to="./">ホームへ戻る</router-link></div>
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
  background-image: url('../../assets/tuiless_detail.jpg');
  background-size: cover;
}
</style>