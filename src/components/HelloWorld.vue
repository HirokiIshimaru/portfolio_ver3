<template>
  <div class="wrapper">
    
    <div class="main-visual" id="main-visual">
      <div class="main-visual__wrapper">
        <div class="main-visual__ttl" id="logo">
          <img src="@/assets/ttl.svg" alt="ロゴ">
        </div>  <!-- main-visual__ttl -->
        <transition name="sub-ttl">
          <h2 class="main-visual__subttl" id="sub-ttl">
            <img src="@/assets/subttl.svg" alt="サブタイトル">
          </h2>
        </transition>
      </div>
    </div> <!-- main-visual__subttl -->

    <main>
      <div class="about">
        <h2 class="nav-ttl">About</h2>
        <div class="about__wrapper">
          <div class="about__wrapper__wrap">
            <div class="about__wrapper__wrap__leftbox">
              <img src="@/assets/about_my_img.png" alt="">
              <h3 class="about__wrapper__wrap__leftbox__platform">Platform ・ SNS</h3>
              <a href="https://github.com/HirokiIshimaru?tab=repositories" target="_blank" rel="noopener" class="about__wrapper__wrap__leftbox__github">
                <img src="@/assets/github.svg" alt="">
                <span>to Github</span>
              </a> <!-- about__wrapper__wrap__leftbox__github -->
              <a href="https://www.wantedly.com/id/hirokiishimaru" target="_blank" rel="noopener" class="about__wrapper__wrap__leftbox__wantedly">
                <img src="@/assets/mark_visit.svg" alt="">
                <span>to Wantedly</span>
              </a>  <!-- about__wrapper__wrap__leftbox__wantedly -->
            </div>  <!-- about__wrapper__wrap__leftbox -->
            <div class="about__wrapper__wrap__rightbox">
              <h3 class="about__wrapper__wrap__rightbox__name">HIROKI ISHIMARU</h3>
              <p>ECCコンピュータ専門学校 Webデザインコース 22年卒</p>
              <p>フロントエンドエンジニア志望</p>
              <p class="about__wrapper__wrap__rightbox__trigger"><img src="@/assets/trigger.svg" alt="web業界を目指したきっかけ"></p>
              <p>高校時代は農業について調べることが多く、<br>
              その際に様々なWebサイトを見て興味を持ち、<br>
              将来はWebに携わりたいと思い、<br>
              Web業界に足を踏み入れました。</p>
            </div>
          </div>  <!-- about__wrapper__wrap -->
        </div>  <!-- about__wrapper -->
      </div>  <!-- about -->

      <div class="Works">
        <h2 class="nav-ttl">Works</h2>
        <div class="works__wrapper">
          <div class="works__wrapper__leftbox">
            <h3 class="works__wrapper__leftbox__heading">2019</h3>
            <ul class="works__wrapper__leftbox__year-list">
              <li>
                <button>2019</button>                
              </li>
              <li>
                <button>2020</button>
              </li>
              <li>
                <button>2021</button>
              </li>
              <li>
                <button>勉強集</button>
              </li>
            </ul> <!-- works__wrapper__leftbox__year-list -->
          </div> <!-- works__wrapper__leftbox -->
          <div class="works__wrapper__rightbox">

          </div>
        </div> <!-- works__wrapper -->
      </div> <!-- works -->

      <div class="contact">
        <h2 class="nav-ttl">Contact</h2>
        <p class="contact__message">お気軽にご連絡ください。お待ちしております。</p>
        <a href="mailto:hirokiishimaru6132@gmail.com" class="contact__mail">hirokiishimaru6132@gmail.com</a>
        <p class="contact__copywrite"><small>&copy;2020 hirokiishimaru</small></p>
      </div> <!-- contact -->
    </main> <!-- main -->
  </div>  <!-- wrapper -->
</template>


<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@300;400;700&family=Noto+Serif+TC:wght@200;400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300&display=swap');
@import '@/sass/index.scss';
$jpFont: 'Noto Sans JP', sans-serif;
$enFont: 'Noto Serif TC','Noto Serif JP', serif;
$fontColor: #fff;

h1,h2,h3, p, a, li{
  color: $fontColor;
  text-decoration: none;
}
</style>
