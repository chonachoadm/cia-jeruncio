<script>

export default {
    name: "AppEvents",
    computed: {
        locale() {
            return this.$i18n.locale
        }
    }
}
</script>

<template>
    <section id="show">
        <div class="deco-container">
            <h2 class="blur-animation">
                {{ $t('show.title') }}
            </h2>
        </div>
        <div class="roadmap-container">
            <div class="roadmap-canvas">
                <img class="img img-fluid img-show-2 sticker" src="@/assets/img/stickers/sticker-jeruncio-shoes.svg"
                    alt="Sticker de zapatos">


                <svg class="roadmap-svg" viewBox="0 0 1000 800" xmlns="http://www.w3.org/2000/svg">
                    <path class="roadmap-path" d="M 500 50 C 700 250, 300 550, 500 750" stroke="#F4C846"
                        stroke-width="10" fill="transparent" stroke-linecap="round" />

                    <circle cx="500" cy="50" r="20" fill="#F4C846" />
                    <circle cx="550" cy="250" r="20" fill="#F4C846" />
                    <circle cx="480" cy="450" r="20" fill="#F4C846" />
                    <circle cx="500" cy="750" r="20" fill="#F4C846" />
                </svg>

                <div class="label point-1">
                    <p v-html="$t('show.text1')"></p>
                </div>
                <div class="label point-2">
                    <p v-html="$t('show.text2')"></p>
                </div>
                <div class="label point-3">
                    <p v-html="$t('show.text3')"></p>
                </div>
                <div class="label point-4">
                    <p v-html="$t('show.text4')"></p>
                </div>
                <img class="img img-fluid img-show-1 sticker" src="@/assets/img/stickers/sticker-jeruncio-unicycle.svg"
                    alt="Sticker de Monociclo">
            </div>
        </div>
        <div class="d-flex justify-content-center mb-2 mb-md-4">
            <a :href="$t('show.dossierFile')" download="Jeruncio_Dossier.pdf" class="download-link">
                {{ $t('show.dossierButton') }}
            </a>
        </div>



        <!-- <div class="parent">
            <div class="div1 mx-0 my-4 m-md-4">
                <h3 class="px-0 py-4 p-md-4 blur-animation">
                    {{ $t('show.subtitle') }}
                </h3>
            </div> 
        <div class="div2 mx-0 my-4 m-md-4 position-relative">
            <div class="p-4 text-show">
                <p v-html="$t('show.text1')" class="fade-animation"></p>
            </div>

        </div>
        <div class="div3 mx-0 my-4 m-md-4">
            <div class="p-4 text-show">
                <p v-html="$t('show.text2')" class="fade-animation"></p>
            </div>
        </div>
        <div class="div4 mx-0 my-4 m-md-4">
            <div class="p-4 text-show">
                <p v-html="$t('show.text3')" class="fade-animation"></p>
            </div>
        </div>
        <div class="div5 mx-0 my-4 m-md-4 position-relative">
            <div class="p-4 text-show">
                <p v-html="$t('show.text4')" class="fade-animation"></p>
            </div>

        </div>
        <div class="div6 mx-0 my-4 m-md-4 position-relative blur-animation download-link-container">
            <a :href="$t('show.dossierFile')" download="Jeruncio_Dossier.pdf" class="download-link">
                {{ $t('show.dossierButton') }}
            </a>
            <AppDecoDownloadES v-if="locale === 'es'" />
            <AppDecoDownloadEN v-else />
        </div>
        </div> -->
    </section>
</template>

<style scoped>
section {
    position: relative;
    overflow: hidden;
    margin-block: 10em;
    scroll-margin-top: 120px;
}

.deco-container::before {
    content: "";
    position: absolute;
    width: 200px;
    height: 200px;
    background: var(--yellow-color);
    border-right: 15px solid var(--yellow-color);
    border-radius: 50% 20% 70% 30%;
    top: 0;
    left: -5%;
}

/* .parent {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 1fr);

    grid-column-gap: 0px;
    grid-row-gap: 0px;

    text-align: center;

    margin-inline: min(3em, 4%);
    padding-bottom: 5em;
} */

/* .div2 {
    grid-area: 1 / 1 / 3 / 2;
}

.div3 {
    grid-area: 2 / 2 / 4 / 3;
}

.div4 {
    grid-area: 3 / 1 / 5 / 2;
}

.div5 {
    grid-area: 4 / 2 / 6 / 3;
}

.div6 {
    grid-area: 5 / 1 / 6 / 2;
} */

/* .text-show {
    border: 15px solid transparent;
    border-image-source: url("@/assets/img/patterns/animal-print-pattern.webp");
    border-image-slice: 80;
    border-image-repeat: round;

    box-shadow: 0 0 5px black,
        0 0 5px black inset;

    background-image: url("@/assets/img/backgrounds/bg-show.webp");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;

    height: fit-content;

    font-size: 1.1em;
} */

.img-show-1 {
    width: 15%;

    position: absolute;
    bottom: -8%;
    left: -7%;

    transform: rotate(-30deg);
}

.img-show-2 {
    width: 15%;

    position: absolute;
    top: -18%;
    right: 0;

    transform: rotate(15deg);
}

.roadmap-container {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    padding-block: 5rem;
}

.roadmap-canvas {
    position: relative;
    width: 100%;
}

.roadmap-svg {
    width: 100%;
    height: auto;
    display: block;
}

.label {
    position: absolute;
    width: 35%;
    font-family: sans-serif;
}

.point-1 {
    left: 50%;
    top: 6.25%;
    transform: translate(-100%, -50%);
    margin-left: -40px;
    text-align: right;
}

.point-2 {
    left: 55%;
    top: 31.25%;
    transform: translate(0, -50%);
    margin-left: 40px;
    text-align: left;
}

.point-3 {
    left: 48%;
    top: 56.25%;
    transform: translate(-100%, -50%);
    margin-left: -40px;
    text-align: right;
}

.point-4 {
    left: 50%;
    top: 93.75%;
    transform: translate(0, -50%);
    margin-left: 40px;
    text-align: left;
}

.label p {
    margin: 0;
    font-size: 1.2rem;
    color: #333;
    padding: 1rem;
    border: 5px solid transparent;
    border-radius: 40px;
    transition: all .3s ease;
}

.label p:hover {
    border: 5px solid var(--yellow-color);
}

.download-link {
    font-family: 'Patrick Hand', cursive;
    font-size: 1.5em;

    text-align: center;
    text-decoration: none;
    letter-spacing: 0.05em;
    color: black;

    border: none;
    border-radius: 20px;

    background-color: var(--light-color);

    padding: 2% 5%;

    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5), 0 0 5px rgba(255, 255, 255, 0.5) inset;

    transition: all .3s ease;
}

.download-link:hover,
.download-link:focus {
    background-color: rgb(237, 221, 158);
}

@media (max-width: 1024px) {
    .deco-container::before {
        content: "";
        position: absolute;
        width: min(200px, 20%);
        height: 50px;
        background: var(--yellow-color);
        border-right: 15px solid var(--yellow-color);
        border-radius: 50% 20% 70% 30%;
        top: 0;
        left: -5%;
    }

    .img-show-1 {
        width: 15%;

        position: absolute;
        bottom: -8%;
        left: 10%;

        transform: rotate(-30deg);
    }

    .img-show-2 {
        width: 15%;

        position: absolute;
        top: -15%;
        right: 10%;

        transform: rotate(15deg);
    }

    .label p {
        font-size: 1rem;
    }
}

@media (max-width: 768px) {
    /* .parent {
        display: block;
    } */

    /* .text-show {
        border: 5px solid transparent;
        border-image-source: url("@/assets/img/patterns/animal-print-pattern.webp");
        border-image-slice: 30;
        border-image-repeat: round;

        box-shadow: 0 0 5px black,
            0 0 5px black inset;

        background-image: url("@/assets/img/backgrounds/bg-show.webp");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-attachment: fixed;

        height: fit-content;

        font-size: 1em;
    } */

    /* .download-link-container {
        padding-bottom: 10em;
    } */

    .img-show-2 {
        display: none;
    }

    .img-show-1 {
        display: none;
    }

    .roadmap-canvas {
        border-left: 5px solid var(--yellow-color);
        width: 90%;
        margin-inline: 4%;
    }

    .roadmap-svg {
        display: none;
    }


    .label {
        position: relative;
        width: 100%;
    }

    .point-1,
    .point-2,
    .point-3,
    .point-4 {
        top: 0;
        left: 0;
        text-align: start;
        transform: translate(0);
        margin-left: 2%;
    }
}
</style>