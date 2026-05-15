<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/700.css";
import "@fontsource/dm-sans/400-italic.css";
import argentinaFlagIcon from '@/assets/img/icons/argentina-flag-icon-32.png';
import UKFlagIcon from '@/assets/img/icons/united-kingdom-flag-icon-32.png';

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
    start: "top+=1 top",
    end: 999999,

    onEnter: () => {
        gsap.to(".nav-bar", {
            padding: "1em 2em",
            duration: 0.3,
            ease: "power2.out"
        });
    },

    onLeaveBack: () => {
        gsap.to(".nav-bar", {
            padding: "2em",
            duration: 0.3,
            ease: "power2.out"
        });
    }
});

export default {
    name: "AppHeader",
    data() {
        return {
            openNav: false,
        }
    },
    watch: {
        openNav(newVal) {
            if (newVal) {
                gsap.to(".nav-bar", {
                    opacity: 1,
                    filter: "blur(0px)",
                    duration: 0.4,
                    ease: "power2.out",
                });
            } else {
                gsap.to(".nav-bar", {
                    opacity: 0,
                    filter: "blur(10px)",
                    duration: 0.4,
                    ease: "power2.out",
                });
            }
        }
    },
    computed: {
        locale: {
            get() {
                return this.$i18n.locale
            },
            set(value) {
                this.$i18n.locale = value
            }
        },
        flagIcon() {
            return this.$i18n.locale === 'es' ? argentinaFlagIcon : UKFlagIcon
        }
    }
}
</script>

<template>
    <button class="nav-toggle" @click="openNav = !openNav">
        ☰
    </button>
    <nav class="nav-bar" :class="{ openMobileNav: openNav }">
        <button class="nav-toggle" @click="openNav = !openNav">
            X
        </button>
        <ul class="nav-list">
            <li class="nav-item"><a @click="openNav = !openNav" href="#hero">{{ $t('header.hero') }}</a></li>
            <li class="nav-item"><a @click="openNav = !openNav" href="#about-me">{{ $t('header.about') }}</a></li>
            <li class="nav-item"><a @click="openNav = !openNav" href="#show">{{ $t('header.show') }}</a></li>
            <li class="nav-item"><a @click="openNav = !openNav" href="#gallery">{{ $t('header.gallery') }}</a></li>
            <li class="nav-item"><a @click="openNav = !openNav" href="#previous-events">{{ $t('header.previousEvents')
            }}</a></li>
            <li class="nav-item"><a @click="openNav = !openNav" href="#contact">{{ $t('header.contact') }}</a></li>
            <li class="nav-item lang-selector">
                <div class="lang-select">
                    <img :src="flagIcon" alt="Bandera" class="lang-flag" />
                    <select v-model="locale" name="lang-select" id="lang-select" aria-label="Selección de idioma"
                        class="px-2 py-1">
                        <option class="dropdown-item" value="es">Español</option>
                        <option class="dropdown-item" value="en">English</option>
                    </select>
                </div>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
.nav-toggle {
    display: none;
}

.nav-bar {
    display: block;
    visibility: visible;
    width: 100vw;
    position: fixed;
    top: 0;
    right: 0;
    text-align: end;
    padding: 2em;
    box-shadow: 0 3px 15px rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(2em);
    z-index: 20;
    background-color: rgba(255, 255, 255, 0.5);
}


.nav-list {
    list-style: none;
    display: flex;
    justify-content: end;
    margin: 0;
    gap: 3em;
}

.nav-item {
    display: flex;
    align-items: center;
}

.nav-item a {
    font-family: "DM Sans", sans-serif;
    text-decoration: none;
    color: black;
}

.nav-item a:hover,
.nav-item a:focus {
    text-decoration: underline;
    text-underline-offset: 6px;
}

select {
    font-family: "DM Sans", sans-serif;
    border: none;
    border-radius: 10px;
    background-color: transparent;
}

.lang-select {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.lang-flag {
    width: 32px;
    height: 32px;
    object-fit: contain;
}

@media (max-width: 800px) {
    .nav-bar {
        visibility: hidden;
        pointer-events: none;
        position: fixed;
        inset: 0;
        transition: none;
    }

    .openMobileNav {
        visibility: visible;
        pointer-events: auto;
        display: flex;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 235, 157, 0.478);
        justify-content: center;
    }

    .nav-list {
        list-style: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0;
    }

    .nav-toggle {
        display: block;
        position: fixed;
        top: 0;
        right: 0;
        text-align: end;
        font-size: min(7em, 3vw);
        padding: .3em .8em;
        margin: 1em;
        box-shadow: 0 3px 15px rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(2em);
        border: none;
        border-radius: 5px;
        z-index: 100;
        background-color: rgba(255, 255, 255, 0.5);
    }
}
</style>