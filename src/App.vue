<script>
import AppAboutMe from './components/AppAboutMe.vue';
import AppContact from './components/AppContact.vue';
import AppShow from './components/AppShow.vue';
import AppGallery from './components/AppGallery.vue';
import AppHeader from './components/AppHeader.vue';
import AppHero from './components/AppHero.vue';
import AppPreviousEvents from './components/AppPreviousEvents.vue';
import AppFooter from './components/AppFooter.vue';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  name: "App",
  data() {
    return {
      loading: true,
    }
  },
  components: {
    AppHero,
    AppHeader,
    AppAboutMe,
    AppShow,
    AppGallery,
    AppPreviousEvents,
    AppContact,
    AppFooter,
  },
  mounted() {
    this.loading = false;

    const preloader = document.getElementById('preloader');
    if (preloader) {
      preloader.style.display = 'none';
    };
    this.$nextTick(() => {
      gsap.utils.toArray(".sticker").forEach((element) => {
        gsap.from(element, {
          scale: 0.6,
          opacity: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
          }
        });
        gsap.to(element, {
          y: "+=5",
          rotation: "+=1",
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
      });

      gsap.utils.toArray(".blur-animation").forEach((element) => {
        gsap.from(element, {
          opacity: 0,
          filter: "blur(10px)",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
          }
        });
      });

      gsap.utils.toArray(".fade-animation").forEach((element) => {
        gsap.from(element, {
          y: 50,
          opacity: 0,
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        });
      });
    });
  }
}
</script>

<template>
  <div>
    <div v-if="!loading">
      <header>
        <AppHeader />
      </header>

      <main class="position-relative">
        <AppHero />

        <!-- Wave divider SVG moved here -->
        <svg class="wave-divider" xmlns="http://www.w3.org/2000/svg" viewBox="0 -0.444444 14 2.444"
          preserveAspectRatio="none">
          <path
            d="M 0 0 C 1 0.3333 2 1 3 1 C 4 1 5 1 7 0 C 10 -1 12 0 14 0 L 14 1 C 12 1 10 0 7 1 C 5 2 4 2 3 2 C 2 2 1 1 0 1 Z"
            fill="#f4c846" />
        </svg>

        <AppAboutMe />
        <AppShow />
        <AppGallery />
        <AppPreviousEvents />
        <AppContact />
      </main>

      <footer>
        <AppFooter />
      </footer>
    </div>

  </div>
</template>

<style scoped>
.wave-divider {
  position: absolute;
  top: 100vh;
  width: 100%;
  height: 80px;
  z-index: 15;
  pointer-events: none;
}

@media (max-width: 1024px) {
  .box-nav {
    display: block;
    position: fixed;
    top: 0;
    /* width: 75vw; */
    z-index: 5;
    transition: none;
    right: 0;
    transform: translateX(100%);
  }
}
</style>