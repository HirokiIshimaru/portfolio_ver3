<template>
  <div class="wrapper">
    
    <div class="main-visual" id="main-visual">
      <div class="main-visual__wrapper">
        <div class="main-visual__ttl" id="logo">
          <img src="@/assets/ttl.svg" alt="タイトル">
        </div>  <!-- main-visual__ttl -->
        <h2 class="main-visual__subttl" id="sub-ttl">田舎の農業高校からWebエンジニアへ</h2>
      </div>
    </div> <!-- main-visual__subttl -->

    <main>
      <div class="about">
        <h2 class="nav_ttl"></h2>
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
    </main> <!-- main -->
  </div>  <!-- wrapper -->
</template>

<script>
export default {
  methods: {
    window:onload = () =>{
      const mainVisual = document.getElementById('main-visual');
      const logo = document.getElementById('logo');
      const subTtl = document.getElementById('sub-ttl');
      console.log(mainVisual, logo, subTtl);
      subTtl.style.opacity = '0';
      subTtl.style.transform = 'translateY(30px)';
      mainVisualAnimation();

      async function mainVisualAnimation(){
        logo.style.visibility = 'hidden';
        subTtl.style.transition = "ease 0.5s all";
        
        mainVisual.addEventListener('animationend', ()=>{
          logo.style.visibility = 'visible';
          setTimeout(() => {
            subTtl.style.opacity = '1';
            subTtl.style.transform = 'translateY(0px)';
          }, 8500);
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@300;400;700&family=Noto+Serif+TC:wght@200;400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300&display=swap');
$jpFont: 'Noto Sans JP', sans-serif;
$enFont: 'Noto Serif TC','Noto Serif JP', serif;
$fontColor: #fff;

h2, p, a{
  color: $fontColor;
  text-decoration: none;
}
.main-visual {
  font-weight: 300;
  width: 100vw;
  height: 100vh;
  background-image: url("~@/assets/header_bg.jpg");
  background-size: cover;
  background-position: center top;
  position: relative;
  display: flex;
  align-items: center;
  z-index: 0;
  overflow: hidden;
  position: relative;
  animation: viewMainVisual ease 2.5s;
  @keyframes viewMainVisual {
    0%{
      background-image: url("~@/assets/header_bg.jpg");
      filter: blur(10px);
      opacity: 0;
    }
    100%{
      background-image: url("~@/assets/header_bg.jpg");
      filter: blur(0px);
      opacity: 1;
    }
  }
  &__wrapper {
    width: 80%;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }
  &__ttl {
    margin: 30px 0 30px 0;
    letter-spacing: 0.04em;
    width: 500px;
    img {
      display: block;
      width: 100%;
    }
  }
  &__subttl {
    letter-spacing: 0.08em;
    font-family: $jpFont;
  }
  &::before {
    content: "";
    position: absolute;
    top :0;
    left: 0;
    right :0;
    bottom:0;
    z-index: 1;
    display: block;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, rgba(0,0,0,0.9), transparent);
  }
}


</style>
