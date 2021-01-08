<template>
  <div class="wrapper">
    
    <header class="main-visual" id="home">
      <div class="main-visual__wrapper">
        <div class="main-visual__ttl" id="logo">
          <img src="@/assets/ttl.svg" alt="ロゴ">
        </div>  <!-- main-visual__ttl -->
        <h2 class="main-visual__subttl" id="sub-ttl">
          <img src="@/assets/subttl.svg" alt="サブタイトル">
        </h2>
      </div>
    </header> <!-- main-visual__subttl -->

    <main>
      <div class="about" id="about">
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

      <div class="works" id="works">
        <h2 class="nav-ttl">Works</h2>
        <div class="works__wrapper">
          <div class="works__wrapper__leftbox" id="year-nav">
            <h3 class="works__wrapper__leftbox__heading">{{currentTtl}}</h3>
            <div class="works__wrapper__leftbox__select-year">
              <div class="works__wrapper__leftbox__select-year__select-area">
                <div class="works__wrapper__leftbox__select-year__select-area__select-bar" id="current-bar"></div>
              </div>
              <ul class="works__wrapper__leftbox__select-year__year-list">
                <li>
                  <button @click="view1();">1年次</button>                
                </li>
                <li>
                  <button @click="view2();">2年次</button>
                </li>
                <li>
                  <button @click="view3();">3年次</button>
                </li>
                <li>
                  <button @click="view4();">トレーニング</button>
                </li>
              </ul> <!-- works__wrapper__leftbox__year-list -->
            </div> <!-- works__wrapper__leftbox__select-year -->
          </div> <!-- works__wrapper__leftbox -->
          <div class="works__wrapper__rightbox">
            <transition name="change-current" mode="out-in">
              <component :is="currentView" id="works-component"></component>
            </transition>
          </div>
        </div> <!-- works__wrapper -->
      </div> <!-- works -->

      <div class="contact" id="contact">
        <h2 class="nav-ttl">Contact</h2>
        <p class="contact__message">お気軽にご連絡ください。お待ちしております。</p>
        <div class="contact__mail">
          <a href="mailto:hirokiishimaru6132@gmail.com">hirokiishimaru6132@gmail.com</a>
        </div>
        <footer><p class="contact__copywrite">&copy;2020 hirokiishimaru</p></footer>
      </div> <!-- contact -->
    </main> <!-- main -->
  </div>  <!-- wrapper -->
</template>

<script>
import Works1st from '@/components/works_1st.vue';
import Works2nd from '@/components/works_2nd.vue';
import Works3rd from '@/components/works_3rd.vue';
import Traning from '@/components/works_traning.vue';
export default {
  components: {
    Works1st,
    Works2nd,
    Works3rd,
    Traning,
  },
  data() {
    return{
      currentTtl: '1年次',
      currentView: 'Works1st',
    }
  },
  methods: {
    view1() {
      this.currentView = "Works1st";
      this.currentTtl = "1年次";
      let currentBar = document.getElementById('current-bar');
      currentBar.style.transition = 'ease 0.3s';
      currentBar.style.transform = 'translateY(0px)';
    },
    view2() {
      this.currentView = "Works2nd";
      this.currentTtl = "2年次";
      let currentBar = document.getElementById('current-bar');
      currentBar.style.transition = 'ease 0.3s';
      currentBar.style.transform = 'translateY(80px)';
    },
    view3() {
      this.currentView = "Works3rd";
      this.currentTtl = "3年次";
      let currentBar = document.getElementById('current-bar');
      currentBar.style.transition = 'ease 0.3s';
      currentBar.style.transform = 'translateY(160px)';
    },    
    view4() {
      this.currentView = "Traning";
      this.currentTtl = "トレーニング";
      let currentBar = document.getElementById('current-bar');
      currentBar.style.transition = 'ease 0.3s';
      currentBar.style.transform = 'translateY(240px)';
    },
    viewNav:function() {
      const worksDom = document.getElementById('works');
      const yearNav = document.getElementById('year-nav');
      const getWorksBottom = document.getElementById('works-component');
      let rect = worksDom.getBoundingClientRect();
      let getBottomRect = getWorksBottom.getBoundingClientRect();
      let rectTop = rect.top + window.pageYOffset;
      let rectBottom = getBottomRect.bottom + window.pageYOffset;
      window.addEventListener('scroll', function(){
        let scrollEl = window.scrollY;
        if(scrollEl >= rectBottom){
          yearNav.style.opacity = "0";
          yearNav.style.filter = 'blur(10px)';
        }else if(scrollEl >= rectTop){
          yearNav.style.opacity = "1";
          yearNav.style.transition = "ease-out 0.2s";
          yearNav.style.filter = 'blur(0px)';
        }else{
          yearNav.style.opacity = "0";
          yearNav.style.filter = 'blur(10px)';
        }
      });
    }
  },
  watch:{
    currentView: function(){
      setTimeout(()=> {
        this.viewNav();
      },1000)
    }
  },
  mounted() {
    this.viewNav();
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@300;400;700&family=Noto+Serif+TC:wght@200;400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300&display=swap');
@import '@/sass/index.scss';
$jpFont: 'Noto Sans JP', sans-serif;
$enFont: 'Noto Serif TC','Noto Serif JP', serif;
$fontColor: #fff;

h1,h2,h3, p, a, li, button{
  color: $fontColor;
  text-decoration: none;
}

// works要素切り替えtransition
.change-current-enter-active, .change-current-leave-active{
  transition: opacity 0.5s ease;
}
.change-current-enter, .change-current-leave-to{
  opacity: 0;
}
</style>
