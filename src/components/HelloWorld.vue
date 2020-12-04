<template>
  <div class="wrapper">
    <header class="header">
      <div class="header__ttl">
        <img src="@/assets/ttl.png" alt="タイトル">
      </div>  <!-- header__ttl -->
      <h2 class="header__subttl">田舎の農業高校からWebエンジニアへ</h2>
    </header> <!-- header__subttl -->
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
</script>

<style lang="scss" scoped>
$fontColor: #fff;

h2, p, a{
  color: $fontColor;
}
</style>
