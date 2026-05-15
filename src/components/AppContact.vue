<script>
// import emailjs from 'emailjs-com';
import emailjs from '@emailjs/browser';

const COOLDOWN_TIME = 60 * 1000
const COOLDOWN_KEY = 'contact_form_last_sent'
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default {
    name: "AppContact",
    data() {
        return {
            form: {
                name: '',
                email: '',
                message: '',
            },
            loading: false,
            success: false,
            error: false,
            errorMessageEmail: '',
            errorMessageName: '',
            errorMessageContent: '',
        }
    },
    methods: {
        async sendEmail() {
            this.errorMessageEmail = ''
            this.errorMessageName = ''
            this.errorMessageContent = ''

            if (!emailRegex.test(this.form.email)) {
                this.errorMessageEmail = this.$t('contact.errorMessageEmail')
                return
            }
            if (!this.form.name.trim()) {
                this.errorMessageName = this.$t('contact.errorMessageName')
                return
            }
            if (this.form.message.trim().length < 10) {
                this.errorMessageContent = this.$t('contact.errorMessageContent')
                return
            }

            const lastSent = localStorage.getItem(COOLDOWN_KEY)

            if (lastSent && Date.now() - lastSent < COOLDOWN_TIME) {
                alert(this.$t('contact.cooldownTimeAlert'))
                return
            }
            this.loading = true
            this.success = false
            this.error = false

            try {

                await emailjs.send(
                    'service_gmf4rmv',
                    'template_h2qv87t',
                    {
                        user_name: this.form.name,
                        user_email: this.form.email,
                        message: this.form.message
                    },
                    'nHxGq1JY-6nPay5VA'
                )
                localStorage.setItem(
                    COOLDOWN_KEY,
                    Date.now()
                )

                this.success = true
                this.form.email = ''
                this.form.name = ''
                this.form.message = ''

            } catch (error) {
                this.error = true
                console.error(error)

            } finally {
                this.loading = false
            }
        }
    }
}
</script>

<template>
    <section id="contact">
        <div class="d-flex justify-content-center align-items-center flex-column-reverse flex-md-row">
            <div>
                <div class="blur-animation">
                    <h2>
                        {{ $t('contact.title') }}
                    </h2>
                </div>
                <div class="d-flex justify-content-center gap-4 m-4">
                    <div class="contact-icon">
                        <a href="https://wa.me/5491158817371?text=Hola!%20Te%20escribo%20desde%20tu%20web.%20Muy%20bonita%20por%20cierto."
                            target="_blank" rel="noopener noreferrer"><img class="img img-fluid sticker"
                                src="@/assets/img/icons/wpp-icon.svg"
                                alt="Abrir chat de WhatsApp con Compañía Jeruncio"></a>
                    </div>
                    <div class="contact-icon">
                        <a href="https://www.instagram.com/cia.jeruncio?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                            target="_blank" rel="noopener noreferrer">
                            <img class="img img-fluid sticker" src="@/assets/img/icons/insta-icon.svg"
                                alt="Abrir perfil de Instagram de la Compañía Jeruncio"></a>
                    </div>
                    <div class="contact-icon">
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=chonachoadm@gmail.com" target="_blank"
                            rel="noopener noreferrer"><img class="img img-fluid sticker"
                                src="@/assets/img/icons/gmail-icon.svg"
                                alt="Enviar correo electrónico a Compañía Jeruncio"></a>
                    </div>
                    <div class="contact-icon">
                        <a href="https://www.linktr.ee/JeruncioClown" target="_blank" rel="noopener noreferrer"><img
                                class="img img-fluid sticker" src="@/assets/img/icons/linktree-icon.svg"
                                alt="Abrir el LinkTree de Compañía Jeruncio"></a>
                    </div>
                </div>
            </div>
            <img class="img sticker-call-me sticker" src="@/assets/img/stickers/sticker-jeruncio-call_me.svg"
                alt="Sticker de Jeruncio">
        </div>
        <div class="w-100 d-flex justify-content-center">
            <form class="col-10 col-md-6" @submit.prevent="sendEmail">
                <p v-if="success" class="success">
                    {{ $t('contact.formSuccess') }}
                </p>

                <p v-if="error" class="error">
                    {{ $t('contact.formError') }}

                </p>
                <div class="mb-3 fade-animation">
                    <label for="email" class="form-label">{{ $t('contact.labelMail') }}</label>
                    <input type="email" class="form-control" id="email" name="email" aria-describedby="emailHelp"
                        autocomplete="on" v-model="form.email">
                    <small id="emailHelp" class="form-text">{{ $t('contact.mailProtection') }}</small><br>
                    <small v-if="errorMessageEmail" class="input-error">{{ errorMessageEmail }}</small>
                </div>
                <div class="mb-3 fade-animation">
                    <label for="name" class="form-label">{{ $t('contact.labelName') }}</label>
                    <input type="text" class="form-control" id="name" name="name" autocomplete="on" v-model="form.name">
                    <small v-if="errorMessageName" class="input-error">{{ errorMessageName }}</small>
                </div>
                <div class="mb-3 fade-animation">
                    <label for="message" class="form-label">{{ $t('contact.labelMessage') }}</label>
                    <textarea class="form-control" id="message" name="message" rows="3" autocomplete="on"
                        v-model="form.message"></textarea>
                    <small v-if="errorMessageContent" class="input-error">{{ errorMessageContent }}</small>
                </div>
                <div class="mt-4 mt-md-0 mb-4 d-flex justify-content-center">
                    <button type="submit" class="btn button-submit" :disabled="loading">{{ loading ?
                        $t('contact.sending') :
                        $t('contact.send') }}</button>
                </div>
            </form>
        </div>
    </section>
</template>

<style scoped>
section {
    margin-block: 10em;
    scroll-margin-top: 120px;
}

.sticker-call-me {
    width: max(8%, 5em);
    transform: rotate(-10deg);
}

.contact-icon {
    width: 40px;
    height: 40px;
    margin-inline: .3em;
    transition: all .2s ease;
}

.contact-icon:hover,
.contact-icon:focus {
    transform: scale(1.2);
}

.success {
    background-image: linear-gradient(30deg, rgba(0, 128, 0, 0.7), rgba(7, 159, 7, 0.7));
    color: white;
    margin-top: 1rem;
    padding: 2% 5%;
    border-radius: 10px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
}

.error {
    background-image: linear-gradient(30deg, rgba(128, 0, 0, 0.7), rgba(159, 7, 7, 0.7));
    color: white;
    margin-top: 1rem;
    padding: 2% 5%;
    border-radius: 10px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
}

.input-error {
    color: rgb(112, 0, 0);
    margin-top: 5%;
    font-weight: bold;
}

.button-submit {
    font-family: 'DM Sans', sans-serif;
    /* font-size: 1em; */
    text-align: center;
    letter-spacing: 0.05em;
    border: none;
    border-radius: 15px;
    background-color: var(--light-color);
    padding: 1% 3%;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5), 0 0 5px rgba(255, 255, 255, 0.5) inset;
    transition: all .3s ease;
}

.button-submit:hover,
.button-submit:focus {
    background-color: rgb(237, 221, 158);
}

@media (max-width: 768px) {
    .button-submit {
        font-family: 'DM Sans', sans-serif;
        /* font-size: 1em; */
        text-align: center;
        letter-spacing: 0.05em;
        border: none;
        border-radius: 15px;
        background-color: var(--light-color);
        padding: .3em 1.5em;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.5), 0 0 5px rgba(255, 255, 255, 0.5) inset;
        transition: all .3s ease;
    }
}
</style>