<script>
export default {
    name: "AppAboutMe",
}
</script>

<template>
    <section id="about-me" class="waves">
        <div>
            <svg class="opener" xmlns="http://www.w3.org/2000/svg" viewBox="0 -0.444444 14 2.444"
                preserveAspectRatio="none">
                <path
                    d="M 0 0 C 1 0.3333 2 1 3 1 C 4 1 5 1 7 0 C 10 -1 12 0 14 0 L 14 1 C 12 1 10 0 7 1 C 5 2 4 2 3 2 C 2 2 1 1 0 1 Z"
                    fill="#f4c846" />
            </svg>
        </div>
        <div class="wrapper">
            <div>
                <h2 class="blur-animation">{{ $t('about.title') }}</h2>
            </div>
            <div class="d-flex flex-column align-items-center aboutme-content-box">
                <div class="m-0 m-md-4 aboutme-text-box fade-animation">
                    <p v-html="$t('about.text1')"></p>
                </div>
                <img class="img aboutme-img1 sticker" src="@/assets/img/stickers/sticker-jeruncio-2.svg"
                    alt="Sticker de Jeruncio">
                <!-- JERUNCIO CAMISA -->
                <img class="img aboutme-img2 sticker" src="@/assets/img/stickers/sticker-jeruncio-6.svg"
                    alt="Sticker de Jeruncio">
                <!--  ANTHONY -->
                <img class="img aboutme-img3 sticker" src="@/assets/img/stickers/sticker-jeruncio-3.svg"
                    alt="Sticker de Jeruncio">
                <!-- JERUNCIO NARIZ -->
            </div>
        </div>
        <div>
            <svg class="closer" xmlns="http://www.w3.org/2000/svg" viewBox="0 -0.444444 14 2.444"
                preserveAspectRatio="none">
                <path
                    d="M 0 0 C 1 0.3333 2 1 3 1 C 4 1 5 1 7 0 C 10 -1 12 0 14 0 L 14 1 C 12 1 10 0 7 1 C 5 2 4 2 3 2 C 2 2 1 1 0 1 Z"
                    fill="#f4c846" />
            </svg>
        </div>
    </section>
</template>

<style scoped>
section {
    margin-block: none;
    scroll-margin-top: -120px;
    overflow: hidden;
}

.wrapper {
    max-width: 100rem;
    margin-inline: auto;
    padding-inline: 1rem;
}

.waves {
    position: relative;
    background-image: url('@/assets/img/backgrounds/bg-about-me.webp');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    box-shadow: inset 0 0 5px 5px rgba(0, 0, 0, 0.3);

    padding: 15em 0;
    margin-top: -10px;
    z-index: 10;
}

.waves::before,
.waves::after {
    content: '';
    position: absolute;
    width: 100%;
    background: var(--body-bg-color);
    -webkit-mask-image: url('@/assets/svg/divider-mask.svg');
    mask-image: url('@/assets/svg/divider-mask.svg');
}

.waves::before {
    top: -10px;
    height: 20px;
}

.waves::after {
    bottom: -10px;
    height: 50px;
    transform: rotate(.5turn);
}

.opener {
    position: absolute;
    width: 100%;
    height: 80px;
    top: -50px;
}

.closer {
    position: absolute;
    width: 100%;
    height: 50px;
    bottom: 5px;
    transform: rotate(.5turn);
    z-index: 1;
}



.aboutme-content-box {
    position: relative;
}

.aboutme-text-box {
    width: min(50em, 100%);

    padding: 2% 5%;
    padding-top: 3em;

    border: 25px solid #F4C846;
    border-radius: 20px;

    box-shadow: 0 0 10px rgb(0, 0, 0), 0 0 10px rgb(0, 0, 0) inset;
    backdrop-filter: blur(10px);

    font-family: "DM Sans", sans-serif;
}

.aboutme-img1,
.aboutme-img2,
.aboutme-img3 {
    width: calc(100% / 4);
    position: absolute;
}

.aboutme-img1 {
    bottom: -10%;
    left: 10%;
    transform: rotate(10deg) scale(0.8);
}

.aboutme-img2 {
    bottom: 10%;
    right: 10%;
    transform: rotate(-20deg) scale(0.5);
}

.aboutme-img3 {
    top: 25%;
    right: 10%;
    transform: rotate(10deg) scale(0.5);
}


@media (max-width: 1200px) {
    .wrapper {
        padding-inline: 0;
    }

    .aboutme-content-box {
        margin-top: 3em;
    }

    .aboutme-img1 {
        bottom: -10%;
        left: 1%;
        transform: rotate(10deg) scale(0.8);
    }

    .aboutme-img2 {
        bottom: 15%;
        right: 1%;
        transform: rotate(-20deg) scale(0.5);
    }

    .aboutme-img3 {
        top: 30%;
        right: 1%;
        transform: rotate(10deg) scale(0.5);
    }
}

@media(max-width: 900px) {
    .aboutme-img1 {
        bottom: -30%;
        left: 10%;
        transform: rotate(10deg);
    }

    .aboutme-img2 {
        bottom: 70%;
        right: 10%;
        transform: rotate(-25deg) scale(0.8);
    }

    .aboutme-img3 {
        top: 70%;
        right: 10%;
        transform: rotate(10deg) scale(0.8);
    }
}

@media(max-width: 768px) {
    .aboutme-text-box {
        padding-block: 5%;

        border: none;
        border-top: 5px solid #F4C846;
        border-bottom: 5px solid #F4C846;
        border-radius: 0;

        box-shadow: none;
        backdrop-filter: blur(10px);

        font-family: "DM Sans", sans-serif;
    }

    .aboutme-img1 {
        bottom: -30%;
        left: 10%;
        transform: rotate(10deg);
    }

    .aboutme-img2 {
        top: -85%;
        right: 10%;
        transform: rotate(-25deg) scale(0.8);
    }

    .aboutme-img3 {
        bottom: -85%;
        right: 10%;
        transform: rotate(10deg) scale(0.8);
    }
}

@media(max-width: 500px) {
    .aboutme-img1 {
        bottom: -20%;
        left: 10%;
        transform: rotate(10deg) scale(1.5);
    }

    .aboutme-img2 {
        top: -90%;
        right: 10%;
        transform: rotate(-25deg);
    }

    .aboutme-img3 {
        top: 90%;
        right: 10%;
        transform: rotate(10deg);
    }
}

@media(max-width: 350px) {
    .aboutme-img1 {
        bottom: -10%;
        left: 10%;
        transform: rotate(10deg) scale(1.5);
    }

    .aboutme-img2 {
        top: -60%;
        right: 10%;
        transform: rotate(-25deg);
    }

    .aboutme-img3 {
        top: 90%;
        right: 10%;
        transform: rotate(10deg);
    }
}
</style>