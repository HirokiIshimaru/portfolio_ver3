<template>
    <div class="wrapper">
        <div class="works" id="mockup">
            <div class="works__img">
                <img src="@/assets/fisy.svg" alt="作品サムネイル">
            </div>
            <div class="works__content">
                <p class="works__content__date">2019.07</p>
                <p class="works__content__ttl">cafe Fysi</p>
                <h2 class="works__content__catch-copy">木や花の自然に囲まれた自然をコンセプトにしたカフェサイト</h2>
                <div class="works__content__skill">
                    <p class="works__content__skill__icon">Skills</p>
                    <p class="works__content__skill__list">HTML5 / CSS / JavaScript</p>
                </div>
                <div class="works__content__link">
                    <a href="https://github.com/HirokiIshimaru/Fysi" class="works__content__link__btn" target="_blank" rel="noopener">Githubへ</a>
                    <a href="http://click.ecc.ac.jp/ecc/hisimaru/works/fysi/" target="_blank" rel="noopener" class="works__content__link__btn">サイトへ</a>
                    <router-link to="fysi-detail" class="works__content__link__btn">詳細へ</router-link>
                </div>
            </div>
        </div>
        <div class="works">
            <div class="works__img">
                <img src="@/assets/fitness.svg" alt="作品サムネイル">
            </div>
            <div class="works__content">
                <p class="works__content__date">2019.07</p>
                <p class="works__content__ttl">放課後フィットネス</p>
                <h2 class="works__content__catch-copy">中高生の健康や自信を伸ばす事に特化したフィットネスサービス</h2>
                <div class="works__content__skill">
                    <p class="works__content__skill__icon">Skills</p>
                    <p class="works__content__skill__list">HTML5 / CSS / PHP</p>
                </div>
                <div class="works__content__link">
                    <a href="https://github.com/HirokiIshimaru/afterschoolFitness" class="works__content__link__btn" target="_blank" rel="noopener">Githubへ</a>
                    <a href="http://click.ecc.ac.jp/ecc/hisimaru/works/afterschool_fitnes/" target="_blank" rel="noopener" class="works__content__link__btn">サイトへ</a>
                    <router-link to="fitness-detail" class="works__content__link__btn">詳細へ</router-link>
                </div>
            </div>
        </div>
        <div class="works">
            <div class="works__img">
                <img src="@/assets/lookclothe.svg" alt="作品サムネイル">
            </div>
            <div class="works__content">
                <p class="works__content__date">2020.02</p>
                <p class="works__content__ttl">LookClothe</p>
                <h2 class="works__content__catch-copy">月額定額でスタイリスト考案のコーデを一式レンタル</h2>
                <div class="works__content__skill">
                    <p class="works__content__skill__icon">Skills</p>
                    <p class="works__content__skill__list">HTML5 / CSS / JavaScript</p>
                </div>
                <div class="works__content__link">
                    <a href="https://github.com/HirokiIshimaru/LookClothe" class="works__content__link__btn" target="_blank" rel="noopener">Githubへ</a>
                    <a href="http://click.ecc.ac.jp/ecc/hisimaru/works/lookclothe_web/" target="_blank" rel="noopener" class="works__content__link__btn">サイトへ</a>
                    <router-link to="lookclothe-detail" class="works__content__link__btn">詳細へ</router-link>
                </div>
            </div>
        </div>
        <div class="works">
            <div class="works__img">
                <img src="@/assets/mama.svg" alt="作品サムネイル">
            </div>
            <div class="works__content">
                <p class="works__content__date">2020.02</p>
                <p class="works__content__ttl">MAMAgement</p>
                <h2 class="works__content__catch-copy">スマホひとつで冷蔵庫の中身からレシピまで提案してくれるサービス</h2>
                <div class="works__content__skill">
                    <p class="works__content__skill__icon">Skills</p>
                    <p class="works__content__skill__list">HTML5 / CSS / PHP</p>
                </div>
                <div class="works__content__link">
                    <a href="https://github.com/HirokiIshimaru/MAMAgement" class="works__content__link__btn" target="_blank" rel="noopener">Githubへ</a>
                    <a href="http://click.ecc.ac.jp/ecc/hisimaru/works/mamas/" target="_blank" rel="noopener" class="works__content__link__btn">サイトへ</a>
                    <router-link to="mama-detail" class="works__content__link__btn">詳細へ</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@300;400;700&family=Noto+Serif+TC:wght@200;400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@300&display=swap');
@import '@/sass/works-list.scss';
$jpFont: 'Noto Serif JP', serif;
$enFont: 'Noto Serif TC','Noto Serif JP', serif;
$fontColor: #fff;

h1,h2,h3, p, a, li, button{
  color: $fontColor;
  text-decoration: none;
}
.works__content__date, .works__content__ttl, .works__content__catch-copy, .works__content__link__btn{
    font-family: $jpFont;
}
</style>