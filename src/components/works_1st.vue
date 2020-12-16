<template>
    <div class="wrapper">
        <div class="works">
            <div class="works__img">
                <img src="@/assets/fisy.svg" alt="作品サムネイル">
            </div>
            <div class="works__content">
                <p class="works__content__date">2019.08</p>
                <p class="works__content__ttl">cafe Fysi</p>
                <h2 class="works__content__catch-copy">月額定額でスタイリスト考案のコーデを一式レンタル</h2>
                <div class="works__content__skill">
                    <p class="works__content__skill__icon">Skills</p>
                    <p class="works__content__skill__list">HTML5 / SCSS / JavaScript</p>
                </div>
                <div class="works__content__link">
                    <a href="#" class="works__content__link__btn">詳細へ</a>
                    <a href="#" class="works__content__link__btn">Githubへ</a>
                    <a href="#" class="works__content__link__btn">サイトへ</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@300;400;700&family=Noto+Serif+TC:wght@200;400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300&display=swap');
@import '@/sass/works-list.scss';
$jpFont: 'Noto Sans JP', sans-serif;
$enFont: 'Noto Serif TC','Noto Serif JP', serif;
$fontColor: #fff;

h1,h2,h3, p, a, li, button{
  color: $fontColor;
  text-decoration: none;
}
</style>