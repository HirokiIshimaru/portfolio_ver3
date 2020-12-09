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
              <p>Platform ・ SNS</p>
              <a href="#" class="about__wrapper__wrap__leftbox__github">
                <img src="@/assets/Github_icon-icons.com_67091.png" alt="">
                <p>to Github</p>
              </a> <!-- about__wrapper__wrap__leftbox__github -->
              <a href="#" class="about__wrapper__wrap__leftbox__wantedly">
                <img src="@/assets/mark_visit.png" alt="">
                <p>to Wantedly</p>
              </a>  <!-- about__wrapper__wrap__leftbox__wantedly -->
            </div>  <!-- about__wrapper__wrap__leftbox -->
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
        <p>お気軽にご連絡ください。お待ちしております。</p>
        <span></span>
        <a href="mailto:hirokiishimaru6132@gmail.com">hirokiishimaru6132@gmail.com</a>
        <span></span>
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
