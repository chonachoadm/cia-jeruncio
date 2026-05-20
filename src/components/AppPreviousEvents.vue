<script>
export default {
    name: "AppPreviousEvents"
}
</script>

<template>
    <section id="previous-events" class="waves overlay">
        <div>
            <svg class="opener" xmlns="http://www.w3.org/2000/svg" viewBox="0 -2 20 7" preserveAspectRatio="none">
                <path
                    d="M 0 0 C 1 3 5 5 7 5 C 10 5 11 2 16 2 C 18 2 18 5 20 5 L 20 3 C 18 3 18 0 16 0 C 11 0 10 3 7 3 C 5 3 1 1 0 -2 Z"
                    fill="#f4c846" />
            </svg>
        </div>
        <div class="d-flex flex-column flex-xl-row">
            <div class="sub-section">
                <div class="p-4 mb-4 blur-animation">
                    <h2>
                        {{ $t('previousEvents.title') }}
                    </h2>
                </div>
                <div class="w-100 d-flex justify-content-center">
                    <div class="accordion col-12 col-md-10 accordion-box gap-4 fade-animation">
                        <div class="accordion-item accordion-box-item fade-animation">
                            <h3 class="accordion-header">
                                <button class="accordion-button collapsed accordion-header-box" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false"
                                    aria-controls="collapseOne">
                                    <img src="@/assets/img/icons/china.png" alt="Bandera de China"
                                        class="pe-4 flag-icon"><strong>{{
                                            $t('previousEvents.events.title1')
                                        }}</strong>

                                </button>
                            </h3>
                            <div id="collapseOne" class="accordion-collapse collapse"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <ul>
                                        <li><strong>2024</strong> - Qingdao International beer festival</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item accordion-box-item fade-animation">
                            <h3 class="accordion-header">
                                <button class="accordion-button collapsed accordion-header-box" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                                    aria-controls="collapseTwo">
                                    <img src="@/assets/img/icons/india.png" alt="Bandera de India"
                                        class="pe-4 flag-icon"><strong>{{ $t('previousEvents.events.title2') }}</strong>
                                </button>
                            </h3>
                            <div id="collapseTwo" class="accordion-collapse collapse"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <ul>
                                        <li><strong>2025</strong> - International Clown Festival</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item accordion-box-item fade-animation">
                            <h3 class="accordion-header">
                                <button class="accordion-button collapsed accordion-header-box" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
                                    aria-controls="collapseThree">
                                    <img src="@/assets/img/icons/argentina.png" alt="Bandera de Argentina"
                                        class="pe-4 flag-icon"><strong>{{ $t('previousEvents.events.title3') }}</strong>
                                </button>
                            </h3>
                            <div id="collapseThree" class="accordion-collapse collapse"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <ul>
                                        <li><strong>2022</strong> - Festival de arte callejero Coronda</li>
                                        <li><strong>2023</strong> - Festival de arte callejero Coronda</li>
                                        <li><strong>2024</strong> - Festisheca</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item accordion-box-item fade-animation">
                            <h3 class="accordion-header">
                                <button class="accordion-button collapsed accordion-header-box" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false"
                                    aria-controls="collapseFour">
                                    <img src="@/assets/img/icons/italia.png" alt="Bandera de Italia"
                                        class="pe-4 flag-icon"><strong>{{ $t('previousEvents.events.title4') }}</strong>
                                </button>
                            </h3>
                            <div id="collapseFour" class="accordion-collapse collapse"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <ul>
                                        <li><strong>2023</strong> - Artisti di strada Aosta</li>
                                        <li><strong>2024</strong> - Biccari come Buenos Aires</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item accordion-box-item fade-animation">
                            <h3 class="accordion-header">
                                <button class="accordion-button collapsed accordion-header-box" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false"
                                    aria-controls="collapseFive">
                                    <img src="@/assets/img/icons/espana.png" alt="Bandera de España"
                                        class="pe-4 flag-icon"><strong>{{ $t('previousEvents.events.title5') }}</strong>
                                </button>
                            </h3>
                            <div id="collapseFive" class="accordion-collapse collapse"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <ul>
                                        <li><strong>2023</strong> - Fira Tarrega (off)</li>
                                        <li><strong>2024</strong> - Fira Tarrega (off)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item accordion-box-item fade-animation">
                            <h3 class="accordion-header">
                                <button class="accordion-button collapsed accordion-header-box" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false"
                                    aria-controls="collapseSix">
                                    <img src="@/assets/img/icons/uruguay.png" alt="Bandera de Uruguay"
                                        class="pe-4 flag-icon"><strong>{{ $t('previousEvents.events.title6') }}</strong>
                                </button>
                            </h3>
                            <div id="collapseSix" class="accordion-collapse collapse"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <ul>
                                        <li><strong>2025</strong> - {{ $t('previousEvents.events.text6') }}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sub-section">
                <div class="p-4 mt-5 mb-xl-5 mt-xl-0  blur-animation">
                    <h2 class="fs-1">{{ $t('dataSheet.title') }}</h2>
                </div>
                <div class="w-100 d-flex justify-content-center">
                    <div class="col-12 col-md-10 accordion-box gap-4 p-4 fade-animation">
                        <p v-html="$t('dataSheet.text')" class="fs-4"></p>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <svg class="closer" xmlns="http://www.w3.org/2000/svg" viewBox="0 -2 20 7" preserveAspectRatio="none">
                <path
                    d="M 0 0 C 1 3 5 5 7 5 C 10 5 11 2 16 2 C 18 2 18 5 20 5 L 20 3 C 18 3 18 0 16 0 C 11 0 10 3 7 3 C 5 3 1 1 0 -2 Z"
                    fill="#f4c846" />
            </svg>
        </div>
    </section>
</template>

<style scoped>
section {
    margin-block: 10em;
    scroll-margin-top: -160px;
}

.sub-section {
    width: 50%;
}


.overlay {
    border-image: fill 1 linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7));
}

.waves {
    position: relative;
    background-image: url("@/assets/img/backgrounds/bg-previous-events.webp");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    padding: 15em 0;
}

.waves::before,
.waves::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100px;
    background: var(--body-bg-color);
    -webkit-mask-image: url('@/assets/svg/divider-previous_events.svg');
    mask-image: url('@/assets/svg/divider-previous_events.svg');
}

.waves::before {
    top: -10px
}

.waves::after {
    bottom: -10px;
    transform: rotate(.5turn);
}

.opener {
    position: absolute;
    width: 100%;
    height: 100px;
    top: -10px;

}

.closer {
    position: absolute;
    width: 100%;
    height: 100px;
    bottom: -10px;
    transform: rotate(.5turn);
    z-index: 1;
}

.accordion-box {
    padding: 2em 3em;
    border-width: 20px;
    border-image: url("@/assets/img/patterns/animal-print-pattern.webp");
    border-image-slice: 50;
    border-style: solid;
    border-image-repeat: repeat;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5),
        0 0 5px rgba(0, 0, 0, 0.5) inset;
    backdrop-filter: blur(10px);
}

.accordion-box-item {
    background-color: var(--light-color);
    border: none;
    border-radius: 10px;
    overflow: hidden;
    margin: 1em;
}

.accordion-header-box {
    background-color: var(--light-color);
}

.flag-icon {
    width: max(15%, 5em);
}

@media (max-width: 1200px) {
    .sub-section {
        width: 100%;
    }
}


@media (max-width: 768px) {
    .accordion-box {
        padding: 0;
        border-width: 10px;
        border-image: url("@/assets/img/patterns/animal-print-pattern.webp");
        border-image-slice: 30;
        border-style: solid;
        border-image-repeat: repeat;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.5),
            0 0 5px rgba(0, 0, 0, 0.5) inset;
        backdrop-filter: blur(10px);
    }



    .accordion-box-item {
        background-color: var(--light-color);
        border: none;
        border-radius: 10px;
        overflow: hidden;
        margin: 1em;
    }
}
</style>