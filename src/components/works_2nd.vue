<template>
    <div class="wrapper">
        <div class="works">
            <div class="works__img">
                <img src="@/assets/portfolio-ver1.svg" alt="作品サムネイル">
            </div>
            <div class="works__content">
                <p class="works__content__date">2020.03</p>
                <p class="works__content__ttl">ポートフォリオver1</p>
                <h2 class="works__content__catch-copy">白を基調としたシンプルかつ見やすさ重視のポートフォリオサイト</h2>
                <div class="works__content__skill">
                    <p class="works__content__skill__icon">Skills</p>
                    <p class="works__content__skill__list">HTML5 / CSS / JavaScript</p>
                </div>
                <div class="works__content__link">
                    <a href="https://github.com/HirokiIshimaru/portfolio_ver1" class="works__content__link__btn" target="_blank" rel="noopener">Githubへ</a>
                    <a href="http://click.ecc.ac.jp/ecc/hisimaru/works/portfolio01/portfolio.html" target="_blank" rel="noopener" class="works__content__link__btn">サイトへ</a>
                    <router-link to="portfoliov1-detail" class="works__content__link__btn">詳細へ</router-link>
                </div>
            </div>
        </div>
        <div class="works">
            <div class="works__img">
                <img src="@/assets/portfolio-ver2.svg" alt="作品サムネイル">
            </div>
            <div class="works__content">
                <p class="works__content__date">2020.05</p>
                <p class="works__content__ttl">ポートフォリオver2</p>
                <h2 class="works__content__catch-copy">黒を基調とし自分らしさを出したポートフォリオサイト</h2>
                <div class="works__content__skill">
                    <p class="works__content__skill__icon">Skills</p>
                    <p class="works__content__skill__list">HTML5 / SCSS / JavaScript</p>
                </div>
                <div class="works__content__link">
                    <a href="https://github.com/HirokiIshimaru/portfolio_ver2" class="works__content__link__btn" target="_blank" rel="noopener">Githubへ</a>
                    <a href="http://click.ecc.ac.jp/ecc/hisimaru/works/portfolio_web/" target="_blank" rel="noopener" class="works__content__link__btn">サイトへ</a>
                    <router-link to="portfoliov2-detail" class="works__content__link__btn">詳細へ</router-link>
                </div>
            </div>
        </div>
        <div class="works">
            <div class="works__img">
                <img src="@/assets/mule.svg" alt="作品サムネイル">
            </div>
            <div class="works__content">
                <p class="works__content__date">2020.07</p>
                <p class="works__content__ttl">Mule</p>
                <h2 class="works__content__catch-copy">スキマ時間で音楽のプロへ</h2>
                <div class="works__content__skill">
                    <p class="works__content__skill__icon">Skills</p>
                    <p class="works__content__skill__list">HTML5 / CSS / JavaScript / Vue.js</p>
                </div>
                <div class="works__content__link">
                    <a href="https://github.com/HirokiIshimaru/Mule" class="works__content__link__btn" target="_blank" rel="noopener">Githubへ</a>
                    <a href="http://click.ecc.ac.jp/ecc/hisimaru/works/mule_web/" target="_blank" rel="noopener" class="works__content__link__btn">サイトへ</a>
                    <router-link to="mule-detail" class="works__content__link__btn">詳細へ</router-link>
                </div>
            </div>
        </div>
        <div class="works">
            <div class="works__img">
                <img src="@/assets/personalI.svg" alt="作品サムネイル">
            </div>
            <div class="works__content">
                <p class="works__content__date">2020.07</p>
                <p class="works__content__ttl">personalI</p>
                <h2 class="works__content__catch-copy">写真を撮るだけで相手の隠れた性格がわかる新感覚アプリ</h2>
                <div class="works__content__skill">
                    <p class="works__content__skill__icon">Skills</p>
                    <p class="works__content__skill__list">HTML5 / SCSS / JavaScript</p>
                </div>
                <div class="works__content__link">
                    <a href="https://github.com/HirokiIshimaru/personalI" class="works__content__link__btn" target="_blank" rel="noopener">Githubへ</a>
                    <a href="http://click.ecc.ac.jp/ecc/hisimaru/works/personal%20I/" target="_blank" rel="noopener" class="works__content__link__btn">サイトへ</a>
                    <router-link to="personali-detail" class="works__content__link__btn">詳細へ</router-link>
                </div>
            </div>
        </div>
        <div class="works">
            <div class="works__img">
                <img src="@/assets/tuiless.svg" alt="作品サムネイル">
            </div>
            <div class="works__content">
                <p class="works__content__date">2020.10</p>
                <p class="works__content__ttl">tuiless</p>
                <h2 class="works__content__catch-copy">「目で見て認識、話して改善」</h2>
                <div class="works__content__skill">
                    <p class="works__content__skill__icon">Skills</p>
                    <p class="works__content__skill__list">HTML5 / SCSS / JavaScript</p>
                </div>
                <div class="works__content__link">
                    <a href="https://github.com/HirokiIshimaru/tuiless_app" class="works__content__link__btn" target="_blank" rel="noopener">Githubへ</a>
                    <a href="http://click.ecc.ac.jp/ecc/hisimaru/works/web/start.html" target="_blank" rel="noopener" class="works__content__link__btn">サイトへ</a>
                    <router-link to="tuiless-detail" class="works__content__link__btn">詳細へ</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@300;400;700&family=Noto+Serif+TC:wght@200;400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+JP&display=swap');
@import '@/sass/works-list.scss';
$jpFont: 'Noto Serif JP', serif;
$enFont: 'Noto Serif TC','Noto Serif JP', serif;
$fontColor: #fff;

h1,h2,h3, p, a, li, button{
  color: $fontColor;
  text-decoration: none;
}
</style>