<script>
export default {
    name: "AppGallery",
    data() {
        return {
            images: [
                "carousel-1.webp",
                "carousel-2.webp",
                "carousel-3.webp",
                "carousel-4.webp",
                "carousel-5.webp",
                "carousel-6.webp",
                "carousel-7.webp",
                "carousel-8.webp",
                "carousel-9.webp",
                "carousel-10.webp",
                "carousel-11.webp",
                "carousel-12.webp",
            ],
            isMobile: window.innerWidth < 768
        }
    },
    computed: {
        groupedImages() {
            const size = this.isMobile ? 1 : 3;
            const groups = [];

            for (let i = 0; i < this.images.length; i += size) {
                groups.push(this.images.slice(i, i + size));
            }
            return groups;
        }
    },
    mounted() {
        window.addEventListener("resize", () => {
            this.isMobile = window.innerWidth < 768;
        });
    }
}
</script>

<template>
    <section id="gallery">
        <div class="d-flex flex-column align-items-stretch gap-4 mt-4 p-4">
            <h2 class="align-self-center blur-animation">{{ $t('gallery.title') }}</h2>
            <div>
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel"
                    data-bs-interval="3000">
                    <div class="carousel-inner px-1 px-md-5">
                        <div v-for="(group, index) in groupedImages" :key="index" class="carousel-item"
                            :class="{ active: index === 0 }">
                            <div class="mx-auto d-flex justify-content-between gap-4">
                                <img src="/src/assets/img/carousel/carousel-1.webp" alt="carousel-1">
                                <img src="/src/assets/img/carousel/carousel-2.webp" alt="carousel-2">
                                <img src="/src/assets/img/carousel/carousel-3.webp" alt="carousel-3">
                                <img src="/src/assets/img/carousel/carousel-4.webp" alt="carousel-4">
                                <img src="/src/assets/img/carousel/carousel-5.webp" alt="carousel-5">
                                <img src="/src/assets/img/carousel/carousel-6.webp" alt="carousel-6">
                                <img src="/src/assets/img/carousel/carousel-7.webp" alt="carousel-7">
                                <img src="/src/assets/img/carousel/carousel-8.webp" alt="carousel-8">
                                <img src="/src/assets/img/carousel/carousel-9.webp" alt="carousel-9">
                                <img src="/src/assets/img/carousel/carousel-10.webp" alt="carousel-10">
                                <img src="/src/assets/img/carousel/carousel-11.webp" alt="carousel-11">
                                <img src="/src/assets/img/carousel/carousel-12.webp" alt="carousel-12">
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev mx-1 mx-md-5" type="button"
                        data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next mx-1 mx-md-5" type="button"
                        data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
        <div class="px-4 see-more">
            <button class="py-2 px-4" data-bs-toggle="modal" data-bs-target="#galleryModal">
                {{ $t('gallery.more') }}
            </button>
        </div>
        <div class="modal" id="galleryModal" tabindex="-1">
            <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                    <button class="close-modal" data-bs-dismiss="modal">X</button>
                    <div class="modal-body gallery">
                        <img src="@/assets/img/gallery-modal/gallery-1.webp" alt="Imagen galería 1"
                            class="gallery-modal-img">
                        <img src="@/assets/img/gallery-modal/gallery-2.webp" alt="Imagen galería 2"
                            class="gallery-modal-img">
                        <img src="@/assets/img/gallery-modal/gallery-3.webp" alt="Imagen galería 3"
                            class="gallery-modal-img">
                        <img src="@/assets/img/gallery-modal/gallery-4.webp" alt="Imagen galería 4"
                            class="gallery-modal-img">
                        <img src="@/assets/img/gallery-modal/gallery-5.webp" alt="Imagen galería 5"
                            class="gallery-modal-img">
                        <img src="@/assets/img/gallery-modal/gallery-6.webp" alt="Imagen galería 6"
                            class="gallery-modal-img">
                        <img src="@/assets/img/gallery-modal/gallery-7.webp" alt="Imagen galería 7"
                            class="gallery-modal-img">
                        <img src="@/assets/img/gallery-modal/gallery-8.webp" alt="Imagen galería 8"
                            class="gallery-modal-img">
                        <img src="@/assets/img/gallery-modal/gallery-9.webp" alt="Imagen galería 9"
                            class="gallery-modal-img">
                        <img src="@/assets/img/gallery-modal/gallery-10.webp" alt="Imagen galería 10"
                            class="gallery-modal-img">
                        <img src="@/assets/img/gallery-modal/gallery-11.webp" alt="Imagen galería 11"
                            class="gallery-modal-img">
                        <img src="@/assets/img/gallery-modal/gallery-12.webp" alt="Imagen galería 12"
                            class="gallery-modal-img">
                        <img src="@/assets/img/gallery-modal/gallery-13.webp" alt="Imagen galería 13"
                            class="gallery-modal-img">
                        <img src="@/assets/img/gallery-modal/gallery-14.webp" alt="Imagen galería 14"
                            class="gallery-modal-img">
                        <img src="@/assets/img/gallery-modal/gallery-15.webp" alt="Imagen galería 15"
                            class="gallery-modal-img">
                        <img src="@/assets/img/gallery-modal/gallery-16.webp" alt="Imagen galería 16"
                            class="gallery-modal-img">
                        <img src="@/assets/img/gallery-modal/gallery-17.webp" alt="Imagen galería 17"
                            class="gallery-modal-img">
                        <img src="@/assets/img/gallery-modal/gallery-18.webp" alt="Imagen galería 18"
                            class="gallery-modal-img">
                        <img src="@/assets/img/gallery-modal/gallery-19.webp" alt="Imagen galería 19"
                            class="gallery-modal-img">
                        <img src="@/assets/img/gallery-modal/gallery-20.webp" alt="Imagen galería 20"
                            class="gallery-modal-img">
                        <img src="@/assets/img/gallery-modal/gallery-21.webp" alt="Imagen galería 21"
                            class="gallery-modal-img">
                        <img src="@/assets/img/gallery-modal/gallery-22.webp" alt="Imagen galería 22"
                            class="gallery-modal-img">
                        <img src="@/assets/img/gallery-modal/gallery-23.webp" alt="Imagen galería 23"
                            class="gallery-modal-img">
                        <img src="@/assets/img/gallery-modal/gallery-24.webp" alt="Imagen galería 24"
                            class="gallery-modal-img">
                        <img src="@/assets/img/gallery-modal/gallery-25.webp" alt="Imagen galería 25"
                            class="gallery-modal-img">
                        <img src="@/assets/img/gallery-modal/gallery-26.webp" alt="Imagen galería 26"
                            class="gallery-modal-img">
                        <img src="@/assets/img/gallery-modal/gallery-27.webp" alt="Imagen galería 27"
                            class="gallery-modal-img">
                        <img src="@/assets/img/gallery-modal/gallery-28.webp" alt="Imagen galería 28"
                            class="gallery-modal-img">
                        <img src="@/assets/img/gallery-modal/gallery-29.webp" alt="Imagen galería 29"
                            class="gallery-modal-img">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
section {
    margin-block: 10em;
    scroll-margin-top: 120px;
}

.carousel,
.carousel-inner,
.carousel-item {
    width: 100%;
}

.carousel-inner {
    overflow: hidden;
}

.carousel-item img {
    width: 30%;
    height: auto;
    border: 5px solid var(--yellow-color);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.carousel-control-prev,
.carousel-control-next {
    width: fit-content;
    padding-inline: 2%;
    margin-inline: 0;
    background-color: rgba(255, 249, 162, 0);

    transition: all .2 ease;
}

.carousel-control-prev:hover,
.carousel-control-prev:focus,
.carousel-control-next:hover,
.carousel-control-next:focus {
    background-color: rgba(255, 249, 162, 0.5);
}

.see-more {
    text-align: end;
    margin-right: 5%;
    margin-top: 2rem;
}

.see-more button {
    font-family: 'DM Sans', sans-serif;
    font-size: 1em;
    text-align: center;
    letter-spacing: 0.05em;
    border: none;
    border-radius: 15px;
    background-color: var(--light-color);
    padding: 1% 3%;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5), 0 0 5px rgba(255, 255, 255, 0.5) inset;
    transition: all .3s ease;
}

.see-more button:hover,
.see-more button:focus {
    background-color: rgb(237, 221, 158);
}

.gallery {
    position: relative;

    column-count: 3;
    column-gap: min(1.5rem, 2%);
}

.gallery-modal-img {
    width: 100%;
    margin-bottom: min(1.5rem, 5%);
}

.close-modal {
    display: flex;
    align-items: center;
    justify-content: end;

    position: sticky;

    /* width: 1.2em;
    height: 1.2em; */
    text-align: end;
    font-weight: bold;
    font-size: 1.1em;


    margin: .5em 1em;

    background-color: transparent;
    border: none;
    border-radius: 50%;
}

@media (max-width: 768px) {
    .carousel-item img {
        width: 100%;
        height: auto;
        border: 5px solid var(--yellow-color);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    }

    .see-more {
        text-align: center;
        margin-inline: auto;
        margin-top: 2rem;
    }
}
</style>