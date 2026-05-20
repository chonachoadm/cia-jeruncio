<script>
import "@fontsource/patrick-hand";

export default {
    name: "AppHero",
    data() {
        return {
            videoDesktop: "bg-video-jeruncio-desktop.mp4",
            videoMobile: "bg-video-jeruncio-mobile.mp4",
            isMobile: window.innerWidth < 768,
        }
    },
    // computed: {
    //     selectVideo() {
    //         return this.isMobile ? this.videoMobile : this.videoDesktop;
    //     }
    // },
    mounted() {
        window.addEventListener("resize", () => {
            this.isMobile = window.innerWidth < 768;
        });
    }
}
</script>

<template>
    <section id="hero">
        <video autoplay muted loop playsinline class="bg-video">
            <source v-if="isMobile" src="/src/assets/videos/bg-video-jeruncio-mobile.mp4" type="video/mp4">
            <source v-else src="/src/assets/videos/bg-video-jeruncio-desktop.mp4" type="video/mp4">
        </video>
        <div class="h1-box">
            <h1 class="sr-only">CÍA. JERUNCIO</h1>
            <svg viewBox="0 0 600 500" class="curved-title">
                <path id="curve-top" d="M -300 -50 A 100 100 0 0 0 300 -200" fill="transparent" />
                <path id="curve-bottom" d="M 0 450 A 200 100 0 0 1 600 450" fill="transparent" />
                <text class="hero-title small">
                    <textPath href="#curve-top" startOffset="50%" text-anchor="middle">
                        CÍA.
                    </textPath>
                </text>
                <text class="hero-title big">
                    <textPath href="#curve-bottom" startOffset="50%" text-anchor="middle">
                        JERUNCIO
                    </textPath>
                </text>
            </svg>
        </div>
    </section>
</template>

<style scoped>
section {
    position: relative;
    height: 105vh;
    margin-bottom: none;
    z-index: 6;
}

section::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 0;
}

.bg-video {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: translate(-50%, -50%);
    z-index: -100000;
}

.h1-box {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    position: relative;
    z-index: 1;
}

.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
}

.curved-title {
    width: 100%;
    max-width: 600px;
    height: 300px;
}

.hero-title {
    font-family: "Patrick Hand", cursive;
    fill: var(--yellow-color);
    letter-spacing: 0.1em;
    text-shadow: 5px 5px 0 #00000089;
    font-weight: 900;
}

.hero-title.small {
    font-size: 8em;
    letter-spacing: .2em;
}

.hero-title.big {
    font-size: 10em;
}

@media(max-width: 768px) {
    .h1-box {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        position: relative;
        z-index: 1;
    }

    .curved-title {
        max-width: 70vw;
        height: auto;
        overflow: visible;
    }
}
</style>